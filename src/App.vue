<template>
    <n-config-provider abstract :theme="darkTheme">
        <n-layout>
            <n-layout-header bordered>
                <div class="nav">
                    <n-menu mode="horizontal" :options="menuOptions" />
                </div>
            </n-layout-header>
            <n-layout-content class="content">
                <n-loading-bar-provider>
                    <RouterView></RouterView>
                </n-loading-bar-provider>
                <div class="background"></div>
            </n-layout-content>
        </n-layout>
    </n-config-provider>
    <div class="background"></div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { MenuOption, darkTheme } from 'naive-ui';
import { h } from 'vue';
const menuOptions: MenuOption[] = [
    {
        label: () => h(RouterLink, { to: '/' },
            { default: () => '主页' }
        ),
        key: 'index'
    },
    {
        label: () => h(RouterLink, { to: '/statistics' },
            { default: () => '统计' }
        ),
        key: 'statistics'
    },
    {
        label: () => h(RouterLink, { to: '/config' },
            { default: () => '配置' }
        ),
        key: 'config'
    }
]
</script>

<style scoped lang="scss">
.nav {
    width: 1100px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
}

.content {
    width: 100vw;
    height: calc(100vh - 61px);
    overflow: hidden;
    filter: alpha(opacity=60);
    background: url('@/assets/background2.png');
}
</style>
<style>
a {
    text-decoration: none;
    color: unset;
}
</style>