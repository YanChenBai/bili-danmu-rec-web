<template>
    <Wrap>
        <n-grid cols="12" x-gap="10" y-gap="10">
            <n-gi v-for="item in data" span="4">
                <n-card hoverable class="card" content-style="padding: 10px" @click="goto(item.roomId)">
                    <div class="box">
                        <div class="face">
                            <img :src="`https://images.weserv.nl/?url=${item.face}`">
                        </div>
                        <div class="info">
                            <div><n-h3 style="margin-bottom: 0;">{{ item.name }}</n-h3></div>
                            <div><n-text>房间ID #{{ item.roomId }}</n-text></div>
                        </div>
                    </div>
                </n-card>
            </n-gi>
        </n-grid>
    </Wrap>
</template>
<script setup lang="ts">
import Wrap from '@/components/wrap.vue';
import Api from '@/api/api';
import { getUserList } from '@/api/info';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
defineOptions({
    name: 'indexPage'
});
const router = useRouter();
const data = ref<any>([]);
Api<{ data: any }>(getUserList()).then(res => {
    if (res === false) return;
    data.value = res.data;
})

function goto(id: string) {
    router.push('/danmu/' + id)
}
</script>

<style scoped lang="scss">
.face img {
    display: flex;
    width: 100px;
    border-radius: 2px;
}

.card {
    max-width: 400px;
    cursor: pointer;
}

.box {
    display: flex;
}
.info {
    margin-left: 10px;
}
</style>
