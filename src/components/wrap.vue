<template>
    <div class="wrap">
        <div class="wrap-box">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
defineOptions({ name: "Wrap" });
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