<template>
    <div>
        <div v-for="item in data" class="msg-card">
            <div class="top">
                <a :href="`https://live.bilibili.com/${item.badge.anchor.room_id}`" target="_blank" class="badge"
                    :style="{ background: item.badge.color }" v-if="item.badge">
                    <div class="uname">{{ item.badge.name }}</div>
                    <div class="level" :style="{ color: item.badge.color }">{{ item.badge.level }}</div>
                </a>
                <div class="roomAdmin" v-if="item.identityInfo.room_admin">房管</div>
                <div class="guard" v-if="item.identityInfo && item.identityInfo.guard_level !== 0">
                    <div v-if="item.identityInfo.guard_level === 3">
                        <img width="30" height="20" src="@/assets/jz.png">
                    </div>
                    <div v-else-if="item.identityInfo.guard_level === 2">
                        <img width="30" height="20" src="@/assets/td.png">
                    </div>
                    <div v-else>
                        <img width="30" height="20" src="@/assets/zd.png">
                    </div>
                </div>
                <div style="margin-left: 10px;">{{ item.uname }}</div>
            </div>
            <div class="msg">{{ item.msg }}</div>
        </div>
    </div>
    <div class="more"><n-button style="width: 200px;" type="primary" @click="getData(pagination.page++)">加载更多 ({{ pagination.page }} / {{ pagination.pageCount
    }})</n-button></div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getDanmu } from '@/api/info';
import Api from '@/api/api';
import { GuardLevel } from 'blive-message-listener'
import { reactive, ref } from 'vue';
defineOptions({
    name: "Danmu"
});
const route = useRoute();
const id = Number(route.params.id);
const data = ref<Msg[]>([]);
const pagination = reactive({
    page: 1,
    pageSize: 100,
    pageCount: 0
})

interface MsgStr {
    id: number,
    msg: string,
    roomId: string,
    uid: string,
    uname: string,
    createTime: string,
    receiveTime: string,
    messageId: string,
    badge: string,
    identityInfo: string
}

type Msg = MsgStr & {
    badge: {
        active: boolean,
        name: string,
        level: number,
        color: string,
        anchor: {
            room_id: number,
            uid: number
        }
    },
    identityInfo: {
        /** 直播榜单排名 */
        rank: 0 | 1 | 2 | 3
        /** 大航海信息 */
        guard_level: GuardLevel
        /** 房管 */
        room_admin: boolean
    }
}
function getData(page = 1) {
    Api<{
        results: MsgStr[],
        page: number,
        count: number
    }>(getDanmu(id, page)).then(res => {
        if (res === false) return;
        const results: Msg[] = res.data.results.map(item => ({ ...item, badge: JSON.parse(item.badge), identityInfo: JSON.parse(item.identityInfo) }))
        data.value = [...data.value, ...results];
        console.log(Math.floor(res.data.count / 100));
        pagination.pageCount = Math.floor(res.data.count / 100);
    })
}
getData()
</script>

<style scoped lang="scss">
.msg-card {
    margin-top: 10px;
    overflow: hidden;
    border-radius: 4px;
    background: rgba(200, 200, 200, 0.1);
}

.top,
.msg {
    padding: 4px;
}

.msg {
    font-weight: 600;
    font-size: 16px;
    background: rgba(200, 200, 200, 0.1);
    color: #fff;
}

.top {
    display: flex;
    align-items: center;
}

.badge {
    text-decoration: none;
    color: unset;
    border-radius: 2px;
    font-size: 14px;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-align: center;
    height: 20px;
    user-select: none;
    cursor: pointer;

    .uname {
        width: 50px;
    }

    .level {
        width: 20px;
        background-color: #fff;
        padding: 0 3px;
    }
}

.guard {
    height: 20px;
    margin-left: 10px;
}

.roomAdmin {
    height: 20px;
    padding: 0 4px;
    border-radius: 2px;
    margin-left: 10px;
    background: rgb(255, 136, 0);
}

.more {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 300px;
}
</style>