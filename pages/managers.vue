<template>
   <div>
      <PageHeader title="Менеджеры" icon="fad fa-user-friends" />

      <!--        <i class="fad fa-users-medical"></i>-->

      <div class="card-box p-4">
         <Table row-key="id" :columns="managers_columns" :data="managers">
            <template slot-scope="{ row }" slot="id">
               <span class="less-important" @click="re_login(row.id)">{{ row.id }}</span>
            </template>

            <template slot-scope="{ row }" slot="fullname">
               <div class="fullname">{{ row.fullname }}</div>
            </template>

            <template slot-scope="{ row }" slot="role">{{ row.role_title }}</template>

            <template slot-scope="{ row }" slot="partner">
               <span v-if="row.partner_title" class="partner-tag">{{ row.partner_title }}</span>
            </template>

            <template slot-scope="{ row }" slot="email">
               <span class="less-important">{{ row.email }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="edit">
               <Tooltip content="Редактировать" placement="top" :transfer="true">
                  <nuxt-link :to="`/managers/edit/${row.id}`">
                     <Icon custom="fad fa-pencil-alt gray-color mx-1 my-1" />
                  </nuxt-link>
               </Tooltip>
            </template>

            <template slot-scope="{ row, index }" slot="change-pass">
               <Tooltip content="Изменить пароль" placement="top" :transfer="true">
                  <nuxt-link :to="`/managers/edit/${row.id}`">
                     <Icon custom="fad fa-key gray-color mx-1 my-1" />
                  </nuxt-link>
               </Tooltip>
            </template>

            <template slot-scope="{ row, index }" slot="remove">
               <!--                <Tooltip content="Удалить" placement="top" v-if="$can('fines/delete')">-->
               <!--                    <a @click="confirm_remove(row.id)"><Icon custom="fas fa-times red-color mx-1 my-1"></Icon></a>-->
               <!--                </Tooltip>-->
            </template>
         </Table>
      </div>

      <!--        <Modal v-model="modal.delete.show" title="Вы действительно хотите удалить штраф?">-->

      <!--            <RadioGroup v-model="modal.delete.ses" vertical>-->
      <!--                <Radio label="1">Чужой штраф</Radio>-->
      <!--                <Radio label="2">Штраф по вине сервиса</Radio>-->
      <!--                <Radio label="3">Простили клиенту</Radio>-->
      <!--                <Radio label="5">Уже выставили</Radio>-->
      <!--            </RadioGroup>-->

      <!--            <div slot="footer">-->
      <!--                <Button @click="modal_close">Нет</Button>-->
      <!--                <Button type="error" @click="remove">Да</Button>-->
      <!--            </div>-->
      <!--        </Modal>-->

      <!--        <Modal v-model="modal.fine.show" title="Оштрафовать?">-->

      <!--            <p>Вы действительно хотите оштрафовать клиента?</p>-->

      <!--            <div slot="footer">-->
      <!--                <Button @click="modal_close">Нет</Button>-->
      <!--                <Button type="error" @click="fine">Да</Button>-->
      <!--            </div>-->
      <!--        </Modal>-->
   </div>
</template>


<script>
export default {
   middleware: ["auth", "page"],
   head: {
      title: "Менеджеры / VORON BLACK"
   },
   data() {
      return {
         process: {
            polling: null,
            time: 30000
         },

         // modal: {
         //     fine_id: null,
         //
         //     delete: {
         //         show: false,
         //         ses: '1',
         //     },
         //     fine: {
         //         show: false,
         //     }
         // },

         managers_columns: [
            {
               title: "ID",
               key: "id",
               slot: "id",
               sortable: true,
               width: 70
            },
            {
               title: "ФИО",
               slot: "fullname",
               key: "fullname",
               sortable: true,
               width: 240
            },
            {
               title: "Роль",
               slot: "role",
               width: 240,
               key: "role_id",
               sortable: true,
               filters: [],
               filterMultiple: true,
               filterMethod(value, row) {
                  return row.role_id == value;
               }
            },
            {
               title: "Партнер",
               slot: "partner",
               key: "partner_id",
               width: 240,
               sortable: true,

               filters: [],
               filterMultiple: true,
               filterMethod(value, row) {
                  return row.partner_id == value;
               }
            },

            {
               title: "Почта",
               slot: "email"
            },

            {
               title: " ",
               slot: "edit",
               align: "center",
               width: 80
            },
            {
               title: " ",
               slot: "change-pass",
               align: "center",
               width: 80
            },
            {
               title: " ",
               slot: "remove",
               align: "center",
               width: 80
            }
         ],
         managers: []
      };
   },
   async asyncData({ $axios, error }) {
      let response = await $axios.$get("/managers/getlist");
      return { managers: response.data };
   },

   created() {
      this.pollData();

      this.managers_columns[2].filters = this.$table_filters(
         this.managers,
         "role_id",
         "role_title",
         "Без роли"
      );
      this.managers_columns[3].filters = this.$table_filters(
         this.managers,
         "partner_id",
         "partner_title"
      );
   },
   beforeDestroy() {
      clearInterval(this.process.polling);
   },

   methods: {
      pollData() {
         this.process.polling = setInterval(() => {
            this.load();
         }, this.process.time);
      },

      async load() {
         try {
            let response = await this.$axios.$get("/managers/getlist", {
               progress: false
            });
            this.managers = response.data;

            // this.managers_columns[2].filters = this.$table_filters(this.managers, 'role_id', 'role_title', 'Без роли')
            // this.managers_columns[3].filters = this.$table_filters(this.managers, 'partner_id', 'partner_title')
         } catch (error) {
            this.$Notice.error({
               title: "Ошибка обновления"
            });
         }
      },

      re_login(id) {
         console.log(id);

         // try {
         let token = this.$auth.getToken("local");
         this.$auth.logout();

         this.$auth
            .loginWith("local", {
               data: { user_id: 166, jwt: token }
            })
            .then(() => alert("Logged In!"));

         // let response = await this.$auth.loginWith("local", {
         //    data: {
         //       user_id: 166
         //    }
         // }); //
         // this.$Message.success("Павел, добро пожаловать в Voron Black!");
         // } catch (error) {
         //    this.$Notice.error({
         //       title: "Ошибка",
         //       desc: error.response.data.message
         //    });
         // }
      }

      // modal_close() {
      //     this.modal.fine.show = false
      //     this.modal.delete.show = false
      // },
      //
      // confirm_fine(id) {
      //     console.log(id)
      //     this.modal.fine.show = true
      //     this.modal.fine_id = id
      // },
      //
      //
      // confirm_remove(id) {
      //     console.log(id)
      //     this.modal.delete.show = true
      //     this.modal.fine_id = id
      // },
      //
      // async remove() {
      //     try {
      //         let response = await this.$axios.$post('/fines/delete/' + this.modal.fine_id, {
      //             ses: this.modal.delete.ses
      //         })
      //         this.$Notice.success({
      //             title: 'Удаление штрафа',
      //             desc: 'Успешно'
      //         });
      //
      //         this.load()
      //
      //     } catch (error) {
      //         this.$Notice.error({
      //             title: 'Удаление штрафа',
      //             desc: 'Неизвестная ошибка'
      //         });
      //     }
      //
      //     this.modal.delete.show = false
      // },
      //
      //
      // async fine () {
      //       try {
      //           await this.$axios.$post('/fines/claim/' + this.modal.fine_id)
      //           let response = await this.$axios.$get('/fines/getlist')
      //           this.fines = response.data
      //           this.$Notice.success({
      //               title: 'Выставление штрафа',
      //               desc: 'Успешно'
      //           });
      //
      //           this.load()
      //
      //       } catch (error) {
      //           this.$Notice.error({
      //               title: 'Выставление штрафа',
      //               desc: 'Неизвестная ошибка'
      //           });
      //       }
      //
      //     this.modal.fine.show = false
      // },
   }
};
</script>

<style lang="scss" scoped>
.fullname {
   @include font-medium();
}

.partner-tag {
   padding: 2px 10px;
   border-radius: 10px;
   background: $gray-200;
   color: $gray-600;
}
</style>
