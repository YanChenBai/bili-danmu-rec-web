<template>
    <Wrap>
        <n-form inline>
            <n-form-item :show-label="false">
                <n-input style="width: 200px;" placeholder="搜索用户名" v-model:value="search.uname" />
            </n-form-item>
            <n-form-item :show-label="false">
                <n-input style="width: 200px;" placeholder="搜索弹幕" v-model:value="search.msg" />
            </n-form-item>
            <n-form-item :show-label="false">
                <n-date-picker v-model:value="range" type="datetimerange" clearable />
            </n-form-item>
            <n-form-item :show-label="false">
                <n-button type="primary" @click="getData(1)">搜索</n-button>
            </n-form-item>
        </n-form>
        <n-text type="primary">Tips： 当前显示的粉丝牌为发弹幕时所佩戴的</n-text>
        <div v-for="item in data" class="msg-card">
            <div class="top">
                <div class="left">
                    <div class="top-item" v-if="item.badge !== null">
                        <Badge class="top-item" :badge="item.badge"></Badge>
                    </div>
                    <template v-if="item.identityInfo !== null">
                        <RoomAdmin class="top-item" :is="item.identityInfo.room_admin"
                            v-if="item.identityInfo.room_admin" />
                        <Guard class="top-item" :level="item.identityInfo.guard_level"
                            v-if="item.identityInfo.guard_level !== 0"></Guard>
                    </template>
                    <div class="uname">
                        <n-tooltip trigger="hover">
                            <template #trigger>
                                <a :href="`https://space.bilibili.com/${item.uid}`" target="_blank">{{ item.uname }}</a>
                            </template>
                            点击去到他/她/它的主页
                        </n-tooltip>
                    </div>
                </div>
                <div>
                    {{ transformDate(item.receiveTime) }}
                </div>
            </div>
            <div class="msg">{{ item.msg }}</div>
        </div>
        <div class="page">
            <n-pagination v-model:page="pagination.page" :page-count="pagination.pageCount" @update:page="updatePage" />
        </div>
    </Wrap>
</template>
<script setup lang="ts">
import Wrap from '@/components/wrap.vue';
import { useRoute } from 'vue-router';
import { queryDanmu, QueryDanmuParams } from '@/api/info';
import Api from '@/api/api';
import Badge from '@/components/badge.vue';
import RoomAdmin from '@/components/roomAdmin.vue';
import Guard from '@/components/guard.vue';
import { reactive, ref } from 'vue';
import { Msg } from '@/types/danmu.type';
import { filterEmptyKey } from '@/utils/transformer';
import moment from 'moment';
defineOptions({
    name: "Danmu"
});
const route = useRoute();
const roomId = Number(route.params.roomId);
const data = ref<Msg[]>([]);
const pagination = reactive({
    page: 1,
    pageSize: 100,
    pageCount: 0,
    count: 0
})
const search = reactive({
    uname: '',
    msg: '',
});

const range = ref([moment().subtract(1, 'months').valueOf(), Date.now()])

function getData(page = 1) {
    const params: QueryDanmuParams = {
        roomId,
        page,
        ...search,
        startTime: range.value[0],
        endTime: range.value[1]
    }
    Api<{
        results: any[],
        page: number,
        count: number
    }>(queryDanmu(filterEmptyKey(params))).then(res => {
        if (res === false) return;
        data.value = res.data.results;
        console.log(Math.floor(res.data.count / 100));
        pagination.pageCount = Math.floor(res.data.count / 100);
        pagination.count = res.data.count;
        pagination.page = page;
    })
}

const updatePage = (page: number) => getData(page)

function transformDate(str: string) {
    return moment(str, "YYYY-MM-DDTHH:mm:ss").format("YYYY/MM/DD HH:mm:ss")
}

getData()
</script>

<style scoped lang="scss">
.msg-card {
    margin-bottom: 10px;
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
    justify-content: space-between;
}

.left {
    display: flex;

    .top-item {
        margin-right: 6px;
    }
}

.uname {
    padding: 0 4px;
}

.page {
    margin-bottom: 400px;
}
</style>