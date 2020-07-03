<template>
    <div>

        <PageHeader title="Новая роль" icon="fad fa-user-shield"/>

        <Row>
            <Col span="12">
                <div class="card-box p-4">
                    <RoleForm :roleForm="roleForm" :permissions="permissions"  />
                </div>
            </Col>
        </Row>

    </div>
</template>

<script>
    import RoleForm from '@/components/access/RoleForm'

    export default {
        middleware: ['auth', 'page'], //
        head: {
            title: 'Новая роль / VORON BLACK'
        },
        data() {
            return {
                roleForm: {
                    title: '',
                    partner: 'all',
                    permissions: [],
                },
                permissions: [],
            }
        },
        components: {
            RoleForm,
        },
        async asyncData({$axios, params}) {
            let permissions = await $axios.$get('/permissions/getlist')
            return {permissions: permissions.data}
        },
    }
</script>
