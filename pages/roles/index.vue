<template>
    <div>

        <PageHeader title="Права доступа" icon="fad fa-user-shield">

            <template slot="buttons">
                <Button type="primary" v-if="$can('roles/create')" to="/roles/create">Новая роль</Button>
            </template>

        </PageHeader>




            <Row>
                <Col span="12">
                    <div class="card-box p-4">
                    <Table :columns="roles_columns" :data="roles">
                        <template slot-scope="{ row }" slot="partner">
                            <span v-if="row.partner == 'all'">Все партнеры</span>
                            <span v-if="row.partner == 'group'">Группа партнеров</span>
                            <span v-if="row.partner == 'partner'">Один партнер</span>
                        </template>

                        <template slot-scope="{ row }" slot="edit" v-if="row.id != 1 && $can('roles/edit')">
                            <Tooltip content="Редактировать" placement="top" :transfer="true">
                                <nuxt-link :to="`/roles/edit/${row.id}`">
                                    <Icon custom="fad fa-pencil-alt gray-color mx-1 my-1"/>
                                </nuxt-link>
                            </Tooltip>
                        </template>

                        <template slot-scope="{ row, index }" slot="remove" v-if="row.id != 1 && $can('roles/delete')">
                            <Tooltip content="Удалить" placement="top" :transfer="true">
                                <a @click="confirm_remove(row.id)">
                                    <Icon custom="fas fa-times red-color mx-1 my-1"/>
                                </a>
                            </Tooltip>

                        </template>

                    </Table>
        </div>
                </Col>

            </Row>



        <Modal v-model="modal.delete.show" title="Вы действительно хотите удалить роль?">

            <p>Данные будут безвозвратно утеряны</p>

            <div slot="footer">
                <Button @click="modal_close">Нет</Button>
                <Button type="error" @click="remove">Да</Button>
            </div>
        </Modal>


    </div>
</template>

<script>
    export default {
        middleware: ['auth', 'page'], //
        head: {
            title: 'Права доступа / VORON BLACK'
        },
        data() {
            return {
                process: {
                    polling: null,
                    time: 3000,
                },
                modal: {
                    role_id: null,
                    delete: {
                        show: false,
                    }
                },

                roles_columns: [
                    {
                        title: 'ID',
                        key: 'id',
                        width: 80,
                    },
                    {
                        title: 'Название',
                        key: 'title'
                    },
                    {
                        title: 'Ограничение',
                        slot: 'partner'
                    },
                    {
                        title: ' ',
                        slot: 'edit',
                        align: 'center',
                        width: 60,
                    },
                    {
                        title: ' ',
                        slot: 'remove',
                        align: 'center',
                        width: 60,
                    },
                ],
                roles: []
            }
        },

        async asyncData({$axios, error}) {
            let response = await $axios.$get('/roles/getlist')
            return {roles: response.data}
        },
        created() {
            this.pollData()
        },
        beforeDestroy() {
            clearInterval(this.process.polling)
        },

        methods: {
            pollData() {
                this.process.polling = setInterval(() => {
                    this.load()
                }, this.process.time)
            },

            async load() {
                try {
                    let response = await this.$axios.$get('/roles/getlist', {progress: false})
                    this.roles = response.data
                } catch (error) {
                    this.$Notice.error({
                        title: 'Ошибка обновления',
                    });
                }
            },

            modal_close() {
                this.modal.delete.show = false
            },

            confirm_remove(id) {
                this.modal.delete.show = true
                this.modal.role_id = id
            },

            async remove() {
                try {
                    let response = await this.$axios.$post('/roles/delete/' + this.modal.role_id)
                    this.$Notice.success({
                        title: 'Удаление роли',
                        desc: 'Успешно'
                    });

                    this.load()

                } catch (error) {
                    this.$Notice.error({
                        title: 'Удаление роли',
                        desc: error.response.data.message
                    });
                }

                this.modal.delete.show = false
            },
        },
    }
</script>


