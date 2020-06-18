<template>
  <div>

    <PageHeader title="Права доступа" icon="fad fa-user-shield" />

    <Row>
      <Col span="8">
        <Table height="200" :columns="roles_columns" :data="roles"></Table>
      </Col>

      <Col span="12">col-12</Col>

    </Row>


  </div>
</template>

<script>
    export default {
        middleware: ['auth', 'page'],
        head: {
          title: 'Права доступа / VORON BLACK'
        },
        data () {
            return {
                roles_columns: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: 'Название',
                        key: 'title'
                    },
                    {
                        title: 'Описание',
                        key: 'description'
                    }
                ],
                roles: []
            }
        },
        async mounted() {
            try {
              let response = await this.$axios.$get('/roles/getlist')
              this.roles = response.data

              // this.roles = await this.$axios.$get('/roles/getlist')
              // let response = await this.$auth.loginWith('local', {data: this.authForm}) //
              // this.$Message.success('Павел, добро пожаловать в Voron Black!');
            } catch (error) {
              this.$Notice.error({
                title: 'Ошибка',
                desc: error.response.data.message
              });
            }


        },
    }
</script>
