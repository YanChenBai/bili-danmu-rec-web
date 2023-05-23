<template>
    <n-tooltip trigger="hover" v-if="badge">
        <template #trigger>
            <a :href="`https://live.bilibili.com/${badge.anchor.room_id}`" target="_blank" class="badge"
                :style="{ background: badge.color }">
                <div class="uname">{{ badge.name }}</div>
                <div class="level" :style="{ color: badge.color }">{{ badge.level }}</div>
            </a>
        </template>
        进入直播间
    </n-tooltip>
</template>
<script setup lang="ts">
import { Badge } from '@/types/danmu.type';
defineOptions({ name: "Badge" });

const { badge } = defineProps<{
    badge: Badge | ''
}>()
</script>

<style scoped lang="scss">
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
    width: 80px;
    user-select: none;
    cursor: pointer;

    .uname {
        width: 60px;
    }

    .level {
        width: 20px;
        background-color: #fff;
        padding: 0 3px;
    }
}
</style>