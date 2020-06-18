<template>
  <div :class="['layout']" >
        <Layout :style="{minHeight: '100vh'}" >

            <Sider breakpoint="md" collapsible :collapsed-width="48" v-model="isCollapsed">
                <MainMenu :isCollapsed="isCollapsed" />
            </Sider>

            <Layout>
                <Header class="layout-header-bar">
                    <TopBar />
                </Header>
                <Content>
                    <nuxt />
                </Content>
            </Layout>
        </Layout>
    </div>
</template>


<script>

import MainMenu from '@/components/MainMenu'
import TopBar from '@/components/TopBar'

export default {
    components: {
        MainMenu,
        TopBar
    },
  data () {
    return {
        isCollapsed: true,

    }
  },
  methods: {

  },
}
</script>


<style lang="scss" scoped>

    .ivu-layout-sider {
        background: $blue_gray-900;
    }

    .layout-header-bar {
        background: $gray-50;
        border-bottom: 1px solid $gray-100;
    }

    .ivu-layout-content {
        padding: 30px 50px;
    }

</style>
