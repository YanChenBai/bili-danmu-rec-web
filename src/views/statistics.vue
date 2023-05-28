<template>
    <wrap>
        <div id="container"></div>
    </wrap>
</template>
<script setup lang="ts">
import wrap from '@/components/wrap.vue';
import { Chart } from '@antv/g2';
// import { onMounted } from 'vue';
import { Plugin } from '@antv/g-plugin-rough-canvas-renderer';
import WebFont from 'webfontloader';
defineOptions({ name: "statistics" });



WebFont.load({
    google: {
        families: ['Gaegu'],
    },
    active: () => {
        const chart = new Chart({
            container: 'container',
            theme: 'classicDark',
            autoFit: true,
            paddingLeft: 60,
            plugins: [new Plugin()],
        });

        chart
            .interval()
            .data([
                {
                    "hour": "2023-05-27 00:00:00",
                    "count": 13951
                },
                {
                    "hour": "2023-05-27 01:00:00",
                    "count": 11752
                },
                {
                    "hour": "2023-05-27 02:00:00",
                    "count": 7620
                },
                {
                    "hour": "2023-05-27 03:00:00",
                    "count": 4273
                },
                {
                    "hour": "2023-05-27 04:00:00",
                    "count": 33
                },
                {
                    "hour": "2023-05-27 05:00:00",
                    "count": 34
                },
                {
                    "hour": "2023-05-27 06:00:00",
                    "count": 30
                },
                {
                    "hour": "2023-05-27 07:00:00",
                    "count": 29
                },
                {
                    "hour": "2023-05-27 08:00:00",
                    "count": 37
                },
                {
                    "hour": "2023-05-27 09:00:00",
                    "count": 46
                },
                {
                    "hour": "2023-05-27 10:00:00",
                    "count": 48
                },
                {
                    "hour": "2023-05-27 11:00:00",
                    "count": 51
                },
                {
                    "hour": "2023-05-27 12:00:00",
                    "count": 33
                },
                {
                    "hour": "2023-05-27 13:00:00",
                    "count": 34
                },
                {
                    "hour": "2023-05-27 14:00:00",
                    "count": 22
                },
                {
                    "hour": "2023-05-27 15:00:00",
                    "count": 20
                },
                {
                    "hour": "2023-05-27 16:00:00",
                    "count": 9
                }
            ])
            .encode('x', 'hour')
            .encode('y', 'count')
            .style('strokeWidth', 2)
            .style('fillStyle', 'zigzag')
            .axis('x', {
                style: {
                    titleFontSize: 15,
                    titleFontFamily: 'Gaegu',
                    labelFontFamily: 'Gaegu',
                    tickStroke: '#cdcdcd',
                },
            })
            .axis('y', {
                labelFormatter: '~s',
                style: {
                    titleFontSize: 15,
                    titleFontFamily: 'Gaegu',
                    labelFontFamily: 'Gaegu',
                    tickStroke: '#cdcdcd',
                    gridStroke: '#efefef',
                },
            })
            .legend({ color: { itemLabelFontFamily: 'Gaegu' } });

        chart.render();
    },
});
</script>

<style scoped lang="scss">
#container {
    height: 600px;
}
</style>