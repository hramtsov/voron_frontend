<template>

    <Row type="flex" justify="space-between" align="middle" class="code-row-bg">
        <Col>
            <div class="account-partner-name">ИП Маркелов</div>
        </Col>
        <Col>


<!--            <Dropdown trigger="click" placement="bottom-end">-->
<!--                <Icon custom="fas fa-ellipsis-v"></Icon>-->
<!--                <DropdownMenu slot="list">-->

<!--                    <DropdownItem>-->

<!--                        <div class="dropdown-into">-->
<!--                            <div class="dropdown-icon">-->
<!--                                <Icon custom="fad fa-car-wash" />-->
<!--                            </div>-->
<!--                            <div class="dropdown-info">-->
<!--                                <div class="dropdown-title">Парк автомобилей</div>-->
<!--                                <div class="dropdown-text">Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений.</div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </DropdownItem>-->
<!--                    <DropdownItem>-->

<!--                        <div class="dropdown-into">-->
<!--                            <div class="dropdown-icon">-->
<!--                                <Icon custom="fad fa-users-crown" />-->
<!--                            </div>-->
<!--                            <div class="dropdown-info">-->
<!--                                <div class="dropdown-title">Клиенты</div>-->
<!--                                &lt;!&ndash;              <div class="dropdown-text">Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений.</div>&ndash;&gt;-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </DropdownItem>-->
<!--                    <DropdownItem disabled>-->

<!--                        <div class="dropdown-into">-->
<!--                            <div class="dropdown-icon">-->
<!--                                <Icon custom="fad fa-car-wash" />-->
<!--                            </div>-->
<!--                            <div class="dropdown-info">-->
<!--                                <div class="dropdown-title">Парк автомобилей</div>-->
<!--                                <div class="dropdown-text">Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений.</div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </DropdownItem>-->
<!--                    <DropdownItem>-->
<!--                        <div class="dropdown-into">-->
<!--                            <div class="dropdown-icon">-->
<!--                            </div>-->
<!--                            <div class="dropdown-info">-->
<!--                                <div class="dropdown-title">Статистика</div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem divided>-->

<!--                        <div class="dropdown-into">-->
<!--                            <div class="dropdown-icon">-->
<!--                                <Icon custom="fad fa-sign-out red-color" />-->
<!--                            </div>-->
<!--                            <div class="dropdown-info">-->
<!--                                <div class="dropdown-title red-color">Выйти</div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </DropdownItem>-->
<!--                </DropdownMenu>-->
<!--            </Dropdown>-->

            <div class="top-menu-item account-fullname">
                <Avatar style="color: #f56a00;background-color: #fde3cf; font-size: 10px;" size="small">{{$auth.user.profile.firstname[0]}}{{$auth.user.profile.lastname[0]}}</Avatar>
                <span class="ml-1">{{$auth.user.profile.firstname}} {{$auth.user.profile.lastname}}</span>
                <Icon account-type="А" class="account-type" custom="fas fa-shield" size="12" color="rgb(22,172,6)"></Icon>
            </div>

<!--            <Search />-->

            <Dropdown placement="bottom-end" class="top-menu-item cursor-pointer" trigger="click" v-on:on-click="handleDropdownClick($event)">
                <a>
                    <Icon custom="fad fa-user-crown" size="18"></Icon>
                    <Icon class="ml-1" custom="fad fa-chevron-down" size="10"></Icon>
                </a>

                <DropdownMenu slot="list">

                    <DropdownItem name="logout" divided2>

                        <div class="dropdown-into">
                            <div class="dropdown-icon">
                                <Icon custom="fad fa-sign-out red-color" />
                            </div>
                            <div class="dropdown-info">
                                <div class="dropdown-title red-color">Выйти</div>
                            </div>
                        </div>

                    </DropdownItem>


                </DropdownMenu>
            </Dropdown>




        </Col>
    </Row>

</template>




<script>
    import Search from '@/components/Search'

    export default {
        components: {
            Search
        },
        props: [
            'isCollapsed'
        ],
        data () {
            return {
                // menu: []
            }
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
        },

    }
</script>


<style lang="scss" scoped>
    .account-partner-name {
        @include font-medium();
    }

    .top-menu-item {
        padding: 0 20px;
        position: relative;
        display: inline-block;
    }

    .top-menu-item::after {
        content: "";
        width: 1px;
        height: 20px;
        background-color: $divider-color;
        position: absolute;
        top: 6px;
        left: 0;
    }




    .account-type {
        line-height: 1rem;
        position: relative;
    }

    .account-type::after {
        font-family: 'Proxima Nova Cn Rg';
        font-weight: 400;
        width: 12px;
        top: 0.5px;
        text-align: center;
        content: attr(account-type);
        color: #fff;
        position: absolute;
        left: 0;
        font-size: 9px;
    }

</style>
