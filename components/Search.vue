<template>
    <div class="navbar-item">

<!--        <AutoComplete v-model="search" icon="ios-search" placeholder="input here" style="width:300px">-->
<!--          <div class="demo-auto-complete-item" v-for="item in data4">-->
<!--              <div class="demo-auto-complete-group">-->
<!--                  <span>{{ item.title }}</span>-->
<!--                  <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>-->
<!--              </div>-->
<!--              <Option v-for="option in item.children" :value="option.title" :key="option.title">-->
<!--                  <span class="demo-auto-complete-title">{{ option.title }}</span>-->
<!--                  <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>-->
<!--              </Option>-->
<!--          </div>-->
<!--          <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>-->
<!--        </AutoComplete>-->


<!--        <Icon class="cursor-pointer" @click="search_start"  custom="fad fa-search" size="16"></Icon>-->
<!--        <Input ref="search" v-model="search" placeholder="Поиск..." :class="['header-search', (search_show ? 'active' : '' )]" />-->
<!--        <Icon class="cursor-pointer" v-show="search_show" custom="fad fa-long-arrow-right" size="16" color="rgba(0,0,0, 0.5)" />-->
<!--        <Icon class="cursor-pointer" v-show="search_show && search.length > 0" custom="fad fa-times" size="16" @click="search_clear" color="rgba(0,0,0, 0.5)" />-->
    </div>
</template>



<script>
    export default {
        props: [
            'isCollapsed'
        ],
        data () {
            return {
                search_show: false,
                search: '',
            }
        },
        methods: {
            search_start() {
                this.search_show = true
                this.$refs.search.focus()
            },

            search_end() {
                this.search_show = false
                this.search = ''
            },

            search_clear() {
                this.search = ''
                this.search_show = false
            },
        },

    }
</script>


<style lang="scss" scoped>
    .header-search {
        width: 0;
        transition: all 200ms ease-in-out;

        .ivu-input {
            border: none !important;
            background: transparent;
        }

        .ivu-input:focus {
            box-shadow: none;
        }
    }

    .header-search.active {
        width: 200px;
    }
</style>