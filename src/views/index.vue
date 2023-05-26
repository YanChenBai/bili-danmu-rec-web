<template>
    <Wrap>
        <n-grid cols="12" x-gap="10" y-gap="10">
            <n-gi v-for="item in data" span="4">
                <n-card hoverable class="card" content-style="padding: 10px" :bordered="false">
                    <div class="box">
                        <div class="box-left">
                            <div class="face">
                                <img :src="`https://images.weserv.nl/?url=${item.face}`">
                            </div>
                            <div class="info">
                                <div><n-h3 style="margin-bottom: 0;">{{ item.name }}</n-h3></div>
                                <div><n-text>房间ID #{{ item.roomId }}</n-text></div>
                                <div>
                                    今天弹幕：{{ count[item.roomId] ? count[item.roomId].count : '无' }}
                                </div>
                            </div>
                        </div>
                        <div class="box-right">
                            <n-space vertical align="end">
                                <n-switch v-model:value="item.state"></n-switch>
                                <RouterLink :to="`room/danmu/${item.roomId}`"><n-button strong secondary
                                        type="primary">查看</n-button></RouterLink>
                            </n-space>
                        </div>
                    </div>
                </n-card>
            </n-gi>
            <n-gi span="4">
                <n-card hoverable class="card" content-style="padding: 10px" :bordered="false" @click="showModal = true">

                </n-card>
            </n-gi>
        </n-grid>
    </Wrap>

    <n-modal v-model:show="showModal">
        <n-card style="width: 600px" title="添加直播间" :bordered="false" role="dialog" aria-modal="true">
            <template #header-extra>
                不要加太多哦,会溢出来
            </template>
            <n-form-item label="直播间ID">
                <n-input v-model:value="id" />
            </n-form-item>
            <template #footer>
                <n-space justify="end">
                    <n-button type="primary" @click="submit()">添加</n-button>
                    <n-button @click="showModal = false">取消</n-button>
                </n-space>
            </template>
        </n-card>
    </n-modal>
</template>
<script setup lang="ts">
import Wrap from '@/components/wrap.vue';
import Api from '@/api/api';
import { addRoom, getUserList, todayDanmuCount } from '@/api/info';
import { UserListRes, TodayDanmuCountRes } from '@/api/info';
import { ref } from 'vue';
defineOptions({
    name: 'indexPage'
});

const data = ref<any>([]), showModal = ref<boolean>(false), id = ref<string>(''), count = ref<any>({});

Promise.all([
    Api<UserListRes[]>(getUserList()).then(res => {
        if (res === false) return;
        data.value = res.data;
    }).catch(),
    Api<TodayDanmuCountRes[]>(todayDanmuCount()).then(res => {
        if (res === false) return;
        const tmp = res.data.map(item => [item.roomId, item]);
        count.value = Object.fromEntries(tmp);

    }).catch(),
]);


function submit() {
    Api(addRoom(id.value))
}
</script>

<style scoped lang="scss">
.face {
    display: flex;
    width: 80px;
    height: 80px;

    img {
        width: 100%;
        border-radius: 2px;
    }
}

.card {
    max-width: 400px;
    height: 100px;
    cursor: pointer;
}

.box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-left {
    display: flex;
    align-items: center;
}

.info {
    margin-left: 10px;
}
</style>
