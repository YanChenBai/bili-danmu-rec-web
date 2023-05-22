<template>
    #{{ id }}
    <n-card v-for="item in data">{{ item.msg }}</n-card>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getDanmu } from '@/api/info';
import Api from '@/api/api';
import { ref } from 'vue';
defineOptions({
    name: "Danmu"
});
const route = useRoute();
const id = Number(route.params.id);
const data = ref<any>([]);
Api<{ data: any }>(getDanmu(id)).then(res => {
    if (res === false) return;
    data.value = res.data;
})
</script>

<style scoped lang="scss"></style>