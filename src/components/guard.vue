<template>
    <div class="guard">
        <div v-if="level === 3">
            <img width="30" height="20" src="@/assets/jz.png">
        </div>
        <div v-else-if="level === 2">
            <img width="30" height="20" src="@/assets/td.png">
        </div>
        <div v-else-if="level === 1">
            <img width="30" height="20" src="@/assets/zd.png">
        </div>
    </div>
</template>
<script setup lang="ts">
import { GuardLevel } from 'blive-message-listener';
defineOptions({ name: "Guard" });

const { level } = defineProps<{
    level: GuardLevel
}>();
</script>
<style scoped lang="scss">
.guard {
    height: 20px;
}
</style>