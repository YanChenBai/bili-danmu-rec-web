<template>
    <n-layout>
        <n-layout-header bordered>
            <div class="nav">Index</div>
        </n-layout-header>
        <n-layout-content class="background">
            <n-scrollbar style="height: calc(100vh - 62px);">
                <div class="wrap">
                    <RouterView></RouterView>
                </div>
            </n-scrollbar>
        </n-layout-content>
    </n-layout>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.nav {
    width: 1440px;
    margin: 0 auto;
    height: 60px;
}

.wrap {
    max-width: 1440px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    height: calc(100vh - 62px);
}

.background {
    background-color: rgb(250, 250, 250);
}
</style>