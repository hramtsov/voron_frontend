<template>
    <div class="layout">


        <div :class="['content-sidebar', (isCollapsed ? 'content-sidebar-fixed' : '')]">

            <img src="/assets/images/logo.png" alt="">

            <ul class="main-menu">
                <li v-for="(item, key) in menu" v-cloak>
                    <nuxt-link exact :to="item.link" active-class="active">
                        <i :class="['fad', item.icon]"></i>
                        <span class="truncate">{{ item.text }}</span>
                    </nuxt-link>
                </li>
            </ul>

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

    import Top from '@/components/Top'

    export default {
        components: {
            Top,
        },
        data() {
            return {
                menu: {},
            }
        },

        computed: {
            ...mapGetters({
                isCollapsed: 'sidebar/isCollapsed'
            })
        },

        created: function() {
            this.$store.dispatch('sidebar/getCollapse')
            this.generate_menu()
        },
        methods: {
            handleDropdownClick(event) {
                if (event == 'logout') {
                    console.log('Выходим')
                    this.$auth.logout()
                }
                if (event == 'cars') {
                    this.$route.push('/cars')
                }
            },


            generate_menu() {
                this.menu['main'] = {
                    'text': 'Главная',
                    'icon': 'fa-home-lg-alt',
                    'link': '/',
                }

                if (this.$can('cars/section')) {
                    this.menu['cars-table'] = {
                        'text': 'Парк авто',
                        'icon': 'fa-cars',
                        'link': '/cars/all',
                    }
                }

                if (this.$can('clients/section')) {
                    this.menu['clients'] = {
                        'text': 'Клиенты',
                        'icon': 'fa-users-crown',
                        'link': '/clients',
                    }
                }

                if (this.$can('trips/section')) {
                    this.menu['trips'] = {
                        'text': 'Поездки',
                        'icon': 'fa-pennant',
                        'link': '/trips',
                    }
                }

                if (this.$can('map/section')) {
                    this.menu['map'] = {
                        'text': 'Карта',
                        'icon': 'fa-map-marked-alt',
                        'link': '/map',
                    }
                }

                if (this.$can('deliveries/section')) {
                    this.menu['deliveries'] = {
                        'text': 'Заказы',
                        'icon': 'fa-map-marker-alt',
                        'link': '/deliveries',
                    }
                }
                //
                //
                // if (this.$auth.user.permissions['wash_page']) {
                //     this.menu['wash'] = {
                //         'text': 'Мойки',
                //         'icon': 'fad fa-shower',
                //         'link': '/wash',
                //     }
                // }
                //
                // if (this.$auth.user.permissions['statistic_main_page']) {
                //     this.menu['statistic'] = {
                //         'text': 'Статистика',
                //         'icon': 'fad fa-chart-pie',
                //         'link': '/statistic',
                //     }
                // }
                //
                // if (this.$auth.user.permissions['reg_page']) {
                //     this.menu['registers'] = {
                //         'text': 'Регистрации',
                //         'icon': 'fad fa-address-card',
                //         'link': '/registers',
                //     }
                // }
                //
                // if (this.$auth.user.permissions['bound_no'] && this.$auth.user.permissions['zp_page'] && this.$auth.user.profile.phone.length == 10) {
                //     this.menu['check'] = {
                //         'text': 'ЗП',
                //         'icon': 'fad fa-money-check-alt',
                //         'link': '/check',
                //     }
                // }
                //
                // if (this.$auth.user.permissions['bound_no'] && this.$auth.user.permissions['schedule_page']) {
                //     this.menu['schedule'] = {
                //         'text': 'График',
                //         'icon': 'fad fa-calendar-alt',
                //         'link': '/schedule',
                //     }
                // }

                if (this.$can('fines/section')) {
                    this.menu['fines'] = {
                        'text': 'Штрафы',
                        'icon': 'fa-traffic-light',
                        'link': '/fines',
                    }
                }

                // if (this.$auth.user.permissions['partner_page'] && (this.$auth.user.permissions['bound_group'] || this.$auth.user.permissions['bound_no'])) {
                //     this.menu['partners'] = {
                //         'text': 'Партнеры',
                //         'icon': 'fad fa-briefcase',
                //         'link': '/partners',
                //     }
                // }
                //
                // if (this.$auth.user.permissions['partner_page'] && this.$auth.user.permissions['bound_partner']) {
                //     this.menu['partner'] = {
                //         'text': 'Партнер',
                //         'icon': 'fad fa-briefcase',
                //         'link': '/partner',
                //     }
                // }

                // if (this.$auth.user.permissions['driver_page']) {
                //     this.menu['drivers'] = {
                //         'text': 'Сервисники',
                //         'icon': 'fad fa-bolt',
                //         'link': '/drivers',
                //     }
                // }

                if (this.$can('managers/section')) {
                    this.menu['managers'] = {
                        'text': 'Менеджеры',
                        'icon': 'fa-user-friends',
                        'link': '/managers',
                    }
                }

                if (this.$can('categories/section')) {
                    this.menu['categories'] = {
                        'text': 'Категории',
                        'icon': 'fa-list',
                        'link': '/categories',
                    }
                }

                if (this.$can('spam/section')) {
                    this.menu['spam'] = {
                        'text': 'Спам',
                        'icon': 'fa-paper-plane',
                        'link': '/spam',
                    }
                }

                if (this.$can('roles/section')) {
                    this.menu['roles'] = {
                        'text': 'Права доступа',
                        'icon': 'fa-user-shield',
                        'link': '/roles',
                    }
                }




                this.menu['guide'] = {
                    'text': 'Гайдлайн',
                    'icon': 'fa-palette',
                    'link': '/guide',
                }

            },

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

        .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        ul.main-menu {
            li {
                padding: 0 15px;

                a {
                    border-radius: 4px;
                    padding: 8px 14px;
                    display: flex;
                    align-items: center;
                    color: $black;
                    font-size: 15px;
                    @include font-medium();

                    i {
                        color: $gray-800;
                        text-align: center;
                        width: 22px;
                        min-width: 22px;
                        font-size: 16px;
                        transition: all .25s ease;

                        /*font-family: "Font Awesome 5 Pro" !important;*/
                        /*font-weight: 300 !important;*/
                        /*font-style: normal;*/


                        /*font-family: "Font Awesome 5 Duotone" !important;*/
                        /*font-weight: 900 !important;*/
                    }

                    .truncate {
                        margin-left: 1rem;
                        display: inline-block;
                    }
                }

                a:not(.active):hover {
                    transform: translateX(5px);
                    transition: transform .25s ease;

                    i {
                        /*font-weight: 600 !important;*/
                    }
                }

                a.active {
                    background: $amber-100 !important;
                    //color: $white;

                    i {
                        color: $amber-800 !important;
                        font-weight: 600 !important;
                    }
                }
            }
        }

    }

    .content-sidebar:hover,
    .content-sidebar-fixed {
        max-width: $sidebar-menu-width;

        .sidebar-trigger {
            max-width: $sidebar-menu-width;
        }

        li {
            a {
                i {
                    color: $gray-400 !important;
                }

                .truncate {
                    display: none;
                }
            }
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
