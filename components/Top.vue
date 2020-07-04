<template>
    <div class="navbar-inner">

        <Search />

        <div class="navbar-item">
            <div class="top-menu-item account-partner-name">ИП Маркелов</div>


            <div class="top-menu-item account-fullname">
                <Avatar class="avatar-profile" size="small">{{$auth.user.profile.firstname[0]}}{{$auth.user.profile.lastname[0]}}</Avatar>
                <span class="ml-1">{{$auth.user.profile.firstname}} {{$auth.user.profile.lastname}}</span>
                <!--                        <Icon account-type="А" class="account-type" custom="fas fa-shield" size="12" color="rgb(22,172,6)"></Icon>-->
            </div>






            <Dropdown class="top-menu-item" trigger="click" placement="bottom-end" :transfer="false" v-on:on-click="profileMenu($event)">
                <a>
                  <i class="fad fa-user-circle" style="font-size: 22px;"></i>
                </a>
                <DropdownMenu slot="list" class="dropdown-profile">

                    <DropdownItem>

                        <div class="dropdown-into">
                            <div class="dropdown-icon">
                                <Icon custom="fad fa-car-wash" />
                            </div>
                            <div class="dropdown-info">
                                <div class="dropdown-title">Парк автомобилей</div>
                                <div class="dropdown-text">Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений.</div>
                            </div>
                        </div>

                    </DropdownItem>
                    <DropdownItem>

                        <div class="dropdown-into">
                            <div class="dropdown-icon">
                                <Icon custom="fad fa-users-crown" />
                            </div>
                            <div class="dropdown-info">
                                <div class="dropdown-title">Клиенты</div>
                            </div>
                        </div>

                    </DropdownItem>
                    <DropdownItem disabled>

                        <div class="dropdown-into">
                            <div class="dropdown-icon">
                                <Icon custom="fad fa-car-wash" />
                            </div>
                            <div class="dropdown-info">
                                <div class="dropdown-title">Парк автомобилей</div>
                                <div class="dropdown-text">Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений.</div>
                            </div>
                        </div>

                    </DropdownItem>
                    <DropdownItem>
                        <div class="dropdown-into">
                            <div class="dropdown-icon">
                            </div>
                            <div class="dropdown-info">
                                <div class="dropdown-title">Статистика</div>
                            </div>
                        </div>
                    </DropdownItem>


                    <DropdownItem name="logout" divided>

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








        <!--                    <i-switch class="switcher-theme" v-model="theme_switch" true-color="#ECEEEF" false-color="#141417">-->
        <!--                        <Icon custom="fad fa-moon" slot="open" color="rgba(0,0,0, 0.5)"></Icon>-->
        <!--                        <Icon custom="fad fa-sun" slot="close" color="#fff"></Icon>-->
        <!--                    </i-switch>-->


        </div>
    </div>
</template>

<script>
    import Search from '@/components/Search'
    export default {
        components: {
            Search
        },
        methods: {
            profileMenu(item) {
                if (item == 'logout') {
                    this.$auth.logout()
                }

            },
        },

    }
</script>

<style lang="scss" scoped>

    .navbar-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        -webkit-box-pack: justify;
    }

    .navbar-item {
        display: flex;
        align-items: center;
        -webkit-box-pack: justify;
    }


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
        height: 70%;
        background-color: #e0e0e0;
        position: absolute;
        top: 15%;
        left: 0;
    }

    .top-menu-item:first-child {
        padding-left: 0;
    }

    .top-menu-item:last-child {
        padding-right: 0;
    }

    .top-menu-item:first-child:after {
        display: none;
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




    .icon-menu-not-fixed {
        color: $gray-400;
    }

    .icon-menu-fixed {
        color: $gray-900;
    }

    .dropdown-profile {
        width: 320px;
        max-width: 100%;
    }

</style>
