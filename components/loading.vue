<template lang="html">


    <Spin size="large" fix v-if="loading"></Spin>
</template>

<!--<div class="page-loader" v-if="loading">-->
<!--    <p>Загрузка...</p>-->

<!--</div>-->

<script>
    export default {
        data: () => ({
            loading: false
        }),
        methods: {
            start () {
                this.loading = true
            },
            finish () {
                this.loading = false
            }
        }
    }
</script>

<style scoped>
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding-top: 200px;
        font-size: 30px;
        font-family: sans-serif;
    }
</style>