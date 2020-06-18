<template>
    <Modal v-model="show" :title="title">
      {{ content }}
    </Modal>
</template>


<script>
    export default {
        props: [
            'id', 'show'
        ],
        data () {
            return {
                title: 'Информация об авто',
                content: 'Содержание',
            }
        },

        async fetch ({$axios, params}) {
            console.log(params)
            // this.posts = await this.$http.$get('https://jsonplaceholder.typicode.com/posts')


            // let response = await $axios.$get('/cars/info/' + params.id)
            // return { content: response.data.tables }


        },

        mounted() {
            console.log(this.content)
        }


        // methods: {
        //     info_car (id) {
        //         this.modal_show = true
        //
        //         // this.$Modal.info({
        //         //   title: 'Заголовок',
        //         //   content: 'Контент'
        //         // });
        //     },
        // },

    }
</script>


<style lang="scss" scoped>

</style>