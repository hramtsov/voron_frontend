<template>
    <div class="layout">

        <div :class="['content-sidebar', (isCollapsed ? 'content-sidebar-fixed' : ''), hoverClass]"
             @mouseenter="hoverClass='content-sidebar-hover'"
             @mouseleave="hoverClass=''">

            <div class="logo-sidebar">
              <img src="~/assets/images/logo.png" alt="">
            </div>

            <MainMenu :cl="[(isCollapsed ? 'content-sidebar-fixed' : ''), hoverClass]" />

            <div class="sidebar-trigger">
                <a :class="[(isCollapsed ? 'active' : '')]" @click="$store.dispatch('sidebar/toggleCollapse')">
                    <i :class="['', 'fad', (isCollapsed ? 'fa-chevron-left' : 'fa-chevron-right')]"></i>
                </a>
            </div>

        </div>
        <div :class="['content-wrapper', (isCollapsed ? 'content-wrapper-reduced' : '')]">
            <div class="content-inside">


                <Affix :offset-top="0">
                    <div class="content-navbar">
                        <Top />
                    </div>
                </Affix>

                <div class="router-view">
                    <nuxt/>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    import { mapGetters } from 'vuex'

    import MainMenu from '@/components/MainMenu'
    import Top from '@/components/Top'

    export default {
        components: {
          MainMenu,
            Top,
        },
        data() {
            return {
              hoverClass: ''
            }
        },

        computed: {
            ...mapGetters({
                isCollapsed: 'sidebar/isCollapsed'
            })
        },

        created: function() {
            this.$store.dispatch('sidebar/getCollapse')
        },
        methods: {

        },
    }
</script>


<style lang="scss" scoped>

    .avatar-profile {
        background: $orange-100;
        color: $orange-800;
        font-size: 10px;
    }

    .content-sidebar {
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, .05);
        background: $white;
        transition: all .25s ease;
        position: fixed;
        height: 100vh;
        top: 0;
        z-index: 1015;
        width: 100%;
        max-width: 80px;
        left: 0;

        overflow: hidden;

        .logo-sidebar {
          margin: 15px 0 30px;
          padding: 0 15px 0 25px;


          img {
            width: 100%;
            max-width: 30px;
          }
        }

        .sidebar-trigger {
            position: fixed;
            bottom: 10px;
            transition: all .2s ease-in-out;
            z-index: 1000;
            text-align: center;
            cursor: pointer;
            width: 100%;
            max-width: 80px;

            padding: 0 15px;

            a {
                color: $black;
                font-size: 15px;
                @include font-medium();
                border-radius: 4px;
                padding: 8px 14px;
                width: 100%;
                display: block;
            }

            a.active {
                background: $amber-100 !important;

                i {
                    color: $amber-800 !important;
                    font-weight: 600 !important;
                }
            }
        }



        //////

    }




    .content-sidebar:hover,
    .content-sidebar-fixed {
        max-width: $sidebar-menu-width;

        .sidebar-trigger {
            max-width: $sidebar-menu-width;
        }

    }




    .content-wrapper {
        height: 100vh;
        transition: margin-left .5s;
        margin-left: 80px;
    }

    .content-wrapper-reduced {
        margin-left: $sidebar-menu-width;
    }

    .content-navbar {
        background: $white;
        border-radius: .5rem;
        padding: .8rem 1.5rem;
        transition: all .5s;
        width: 100%;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .05);

        margin-bottom: 2.2rem;
    }

    .content-navbar:hover {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .09);
    }

    .content-inside {
        padding: 1.3rem 2.2rem;
    }

    .router-view {

    }

</style>
