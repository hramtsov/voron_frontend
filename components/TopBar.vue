<template>

    <Row type="flex" justify="space-between" align="middle" class="code-row-bg">
        <Col>
            <div class="account-partner-name">ИП Маркелов</div>
        </Col>
        <Col>

            <div class="top-menu-item account-fullname">
                <Avatar style="color: #f56a00;background-color: #fde3cf; font-size: 10px;" size="small">{{$auth.user.profile.firstname[0]}}{{$auth.user.profile.lastname[0]}}</Avatar>
                <span class="ml-1">{{$auth.user.profile.firstname}} {{$auth.user.profile.lastname}}</span>
                <Icon account-type="А" class="account-type" custom="fas fa-shield" size="12" color="rgb(22,172,6)"></Icon>
            </div>

<!--            <Search />-->

            <Dropdown class="top-menu-item cursor-pointer" trigger="click" v-on:on-click="handleDropdownClick($event)">
                <Icon custom="fad fa-user-crown" size="18"></Icon>
                <Icon class="ml-1" custom="fad fa-chevron-down" size="10"></Icon>
                <DropdownMenu slot="list">
                    <!-- <DropdownItem name="cars">
                      <Icon custom="fad fa-cars" />
                      Парк
                    </DropdownItem> -->
                    <DropdownItem class="text-danger" name="logout" divided2>
                        <Icon custom="fad fa-sign-out" />
                        Выйти
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Col>
    </Row>

</template>


<!-- <i-switch class="switcher-theme" v-model="theme_switch" true-color="#ECEEEF" false-color="#141417">
    <Icon custom="fad fa-moon" slot="open" color="rgba(0,0,0, 0.5)"></Icon>
    <Icon custom="fad fa-sun" slot="close" color="#fff"></Icon>
</i-switch> -->




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
        font-family: 'Proxima Nova Lt';
        font-weight: 600;
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
