<template>
    <n-spin :show=loading>
        <div class="wrap">
            <div class="wrap-box">
                <slot></slot>
            </div>
        </div>
        <n-back-top :right="100" />
    </n-spin>
</template>
<script setup lang="ts">
defineOptions({ name: "Wrap" });
const { loading } = defineProps<{ loading?: boolean }>()
</script>
<style scoped lang="scss">
.wrap {
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
}

.wrap-box {
    max-width: 1100px;
    margin: 0 auto;
}
</style>