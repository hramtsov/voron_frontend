<template>

    <Menu :class="[( !isCollapsed ? 'ivu-menu-opened' : '' )]" :active-name="$route.name" width="auto">
        <template v-for="(item, key) in menu" v-cloak>
            <Tooltip v-if="isCollapsed" :content="item.text" placement="right">
                <MenuItem :to="item.link" :name="key">
                    <Icon :custom="item.icon" />
                </MenuItem>
            </Tooltip>
            <MenuItem v-else :to="item.link" :name="key">
                <Icon :custom="item.icon" />
                <span>{{ item.text }}</span>
                <!-- <Badge v-if="item.count > 0" :count="item.count" :class="['badge ml-1', (item.count_class ? item.count_class : 'badge-light' )]" /> -->
            </MenuItem>
        </template>
    </Menu>

</template>




<script>
    export default {
        props: [
            'isCollapsed'
        ],
        data () {
            return {
                menu: {},
            }
        },

        created: function() {
            this.generate_menu()
        },

        methods: {
            generate_menu() {
                this.menu['main'] = {
                    'text': 'Главная',
                    'icon': 'fad fa-home-lg-alt',
                    'link': '/',
                }

                if (this.$auth.user.permissions['car_page']) {
                    this.menu['cars-table'] = {
                        'text': 'Парк авто',
                        'icon': 'fad fa-cars',
                        'link': '/cars/all',
                    }
                }

                if (this.$auth.user.permissions['client_page']) {
                    this.menu['clients'] = {
                        'text': 'Клиенты',
                        'icon': 'fad fa-users-crown',
                        'link': '/clients',
                    }
                }

                if (this.$auth.user.permissions['drive_page']) {
                    this.menu['drive'] = {
                        'text': 'Поездки',
                        'icon': 'fad fa-pennant',
                        'link': '/drive',
                    }
                }

                if (this.$auth.user.permissions['map_page']) {
                    this.menu['map'] = {
                        'text': 'Карта',
                        'icon': 'fad fa-map-marked-alt',
                        'link': '/map',
                    }
                }

                if (this.$auth.user.permissions['delivery_page']) {
                    this.menu['delivery'] = {
                        'text': 'Заказы',
                        'icon': 'fad fa-map-marker-alt',
                        'link': '/delivery',
                    }
                }


                if (this.$auth.user.permissions['wash_page']) {
                    this.menu['wash'] = {
                        'text': 'Мойки',
                        'icon': 'fad fa-shower',
                        'link': '/wash',
                    }
                }

                if (this.$auth.user.permissions['statistic_main_page']) {
                    this.menu['statistic'] = {
                        'text': 'Статистика',
                        'icon': 'fad fa-chart-pie',
                        'link': '/statistic',
                    }
                }

                if (this.$auth.user.permissions['reg_page']) {
                    this.menu['registers'] = {
                        'text': 'Регистрации',
                        'icon': 'fad fa-address-card',
                        'link': '/registers',
                    }
                }

                if (this.$auth.user.permissions['bound_no'] && this.$auth.user.permissions['zp_page'] && this.$auth.user.profile.phone.length == 10) {
                    this.menu['check'] = {
                        'text': 'ЗП',
                        'icon': 'fad fa-money-check-alt',
                        'link': '/check',
                    }
                }

                if (this.$auth.user.permissions['bound_no'] && this.$auth.user.permissions['schedule_page']) {
                    this.menu['schedule'] = {
                        'text': 'График',
                        'icon': 'fad fa-calendar-alt',
                        'link': '/schedule',
                    }
                }

                if (this.$auth.user.permissions['fine_page']) {
                    this.menu['fines'] = {
                        'text': 'Штрафы',
                        'icon': 'fad fa-traffic-light',
                        'link': '/fines',
                    }
                }

                if (this.$auth.user.permissions['partner_page'] && (this.$auth.user.permissions['bound_group'] || this.$auth.user.permissions['bound_no'])) {
                    this.menu['partners'] = {
                        'text': 'Партнеры',
                        'icon': 'fad fa-briefcase',
                        'link': '/partners',
                    }
                }

                if (this.$auth.user.permissions['partner_page'] && this.$auth.user.permissions['bound_partner']) {
                    this.menu['partner'] = {
                        'text': 'Партнер',
                        'icon': 'fad fa-briefcase',
                        'link': '/partner',
                    }
                }

                if (this.$auth.user.permissions['driver_page']) {
                    this.menu['drivers'] = {
                        'text': 'Сервисники',
                        'icon': 'fad fa-bolt',
                        'link': '/drivers',
                    }
                }

                if (this.$auth.user.permissions['manager_page']) {
                    this.menu['managers'] = {
                        'text': 'Менеджеры',
                        'icon': 'fad fa-user-friends',
                        'link': '/managers',
                    }
                }

                if (this.$auth.user.permissions['category_page']) {
                    this.menu['categories'] = {
                        'text': 'Категории',
                        'icon': 'fad fa-bars',
                        'link': '/categories',
                    }
                }

                if (this.$auth.user.permissions['spam']) {
                    this.menu['spam'] = {
                        'text': 'Спам',
                        'icon': 'fad fa-paper-plane',
                        'link': '/spam',
                    }
                }

                if (this.$auth.user.permissions['role_page'] || this.$auth.user.permissions['permission_page']) {
                    this.menu['access'] = {
                        'text': 'Права доступа',
                        'icon': 'fad fa-user-shield',
                        'link': '/access',
                    }
                }








                this.menu['guide'] = {
                    'text': 'Гайдлайн',
                    'icon': 'fad fa-palette',
                    'link': '/guide',
                }

            },
        },
    }
</script>


<style lang="scss" scoped>

    .ivu-menu {
        color: $white;
        background: none !important;

        .ivu-menu-item {

            i {
                width: 24px;
                height: 16px;
                margin: 0;
            }

            span {
                font-size: 0.9rem;
                margin-left: 10px;
            }
        }

        .ivu-menu-item-active:not(.ivu-menu-submenu),
        .ivu-menu-item:hover,
        .ivu-menu-submenu-title:hover {
            //color: $white;
            //background: transparent;
            color: $orange-600;
            background: rgba(255,255,255, 0.1);
            text-decoration: none;
        }

        .ivu-menu-item-active:not(.ivu-menu-submenu):after {
            display: none;
            //left: 0;
            //background: $orange-400;
        }
    }



    .ivu-menu-vertical {
        .ivu-menu-item,
        .ivu-menu-submenu-title {
            padding: 5px 12px;
            margin: 5px 0;
        }
    }

    .ivu-menu-vertical:after {
        display: none !important;
    }

    .ivu-menu-opened.ivu-menu-vertical {
        .ivu-menu-item,
        .ivu-menu-submenu-title {
            padding: 5px 20px;
        }
    }


</style>
