<template>
    <div>

        <PageHeader title="Изменить роль" icon="fad fa-user-shield"/>

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
            title: 'Изменить роль / VORON BLACK'
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

        async validate ({ params, $axios }) {
            try {
                await $axios.$get('/roles/get/' + params.id)
                return true
            } catch (error) {
                return false
            }
        },
        components: {
            RoleForm,
        },

        async asyncData({$axios, params}) {
            let permissions = await $axios.$get('/permissions/getlist')
            let roleForm = await $axios.$get('/roles/get/' + params.id)

            return {permissions: permissions.data, roleForm: roleForm.data}
        },


    }
</script>


<!--/roles/get/12-->