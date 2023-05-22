<template>
    <n-config-provider abstract :theme="darkTheme">
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
    </n-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import { darkTheme } from 'naive-ui';
</script>

<style scoped lang="scss">
.nav {
    width: 1100px;
    margin: 0 auto;
    height: 60px;
}

.wrap {
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
}

.background {
    width: 100vw;
    // background-color: rgb(250, 250, 250);
}
</style>