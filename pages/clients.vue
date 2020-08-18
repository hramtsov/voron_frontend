<template>
   <div>
      <PageHeader title="Клиенты" icon="fad fa-users-crown" />

      <div class="card-box p-4">
         <Table row-key="id" :columns="clients_columns" :data="clients">
            <template slot-scope="{ row }" slot="id">
               <span class="less-important">{{ row.id }}</span>
            </template>

            <!-- /give/infoclient/" . $one['cid'] . "?ses=" . $one['id'] . "&mode=client -->
            <template slot-scope="{ row }" slot="info">
               <Tooltip
                  content="Информация"
                  placement="top"
                  :transfer="true"
                  v-if="$can('clients/info_client')"
               >
                  <Button>
                     <Icon custom="fad fa-address-card" />
                  </Button>
               </Tooltip>
            </template>

            <!-- /give/rentallstatistic/?start=2011-1&end=2030-12&type=client_month&client=" . $one['cid'] . " -->
            <template slot-scope="{ row }" slot="statistic">
               <Tooltip content="Статистика" placement="top" :transfer="true">
                  <Button>
                     <i class="fad fa-chart-bar"></i>
                  </Button>
               </Tooltip>
            </template>

            <!-- /devices/tracksclient/" . $one['cid'] . " -->
            <template slot-scope="{ row }" slot="tracks">
               <Tooltip content="Все треки" placement="top" :transfer="true">
                  <Button>
                     <i class="fad fa-route"></i>
                  </Button>
               </Tooltip>
            </template>

            <!-- 
            <template slot-scope="{ row }" slot="amount">
               <span class="number-hl">{{ row.amount | number }}</span>
               <span class="unit">₽</span>
            </template>-->

            <!-- <template slot-scope="{ row }" slot="date">
               <template v-if="row.date">
                  {{ row.date | date_td }}
                  <span class="dtime">{{ row.date | date_t }}</span>
               </template>
               <template v-else>
                  <a>
                     <span class="data-empty">Дата отсутствует</span>
                  </a>
               </template>
            </template>-->

            <!-- <template slot-scope="{ row }" slot="about">
               <template v-if="row.about">{{ row.about }}</template>
               <template v-else>
                  <a>
                     <span class="data-empty">Описание отсутствует</span>
                  </a>
               </template>
            </template>-->

            <!-- <template slot-scope="{ row, index }" slot="action"> -->
            <!-- <Button type="primary" size="small" @click="confirm_fine(row.id)">Оштрафовать</Button> -->
            <!-- </template> -->

            <!-- <template slot-scope="{ row, index }" slot="remove"> -->
            <!-- <Tooltip
                  content="Удалить"
                  placement="top"
                  v-if="$can('fines/delete')"
                  :transfer="true"
               >
                  <a @click="confirm_remove(row.id)">
                     <Icon custom="fas fa-times red-color mx-1 my-1"></Icon>
                  </a>
            </Tooltip>-->
            <!-- </template> -->
         </Table>
      </div>
   </div>
</template>



<script>
export default {
   middleware: ["auth", "page"],
   head: {
      title: "Клиенты / VORON BLACK"
   },
   data() {
      return {
         process: {
            polling: null,
            time: 3000
         },

         // modal: {
         //    fine_id: null,

         //    delete: {
         //       show: false,
         //       ses: "1"
         //    },
         //    fine: {
         //       show: false
         //    }
         // },

         clients_columns: [
            {
               title: "ID",
               slot: "id",
               key: "id",
               width: 70,
               sortable: true
            },
            {
               title: " ",
               slot: "info",
               align: "center",
               width: 100
            },

            {
               title: " ",
               slot: "statistic",
               align: "center",
               width: 100
            },

            {
               title: " ",
               slot: "tracks",
               align: "center",
               width: 100
            },
            {
               title: "Фамилия",
               key: "lastName",
               sortable: true,
               width: 270
            },

            {
               title: "Имя",
               key: "firstName",
               sortable: true,
               width: 270
            }

            // {
            //    title: "Автомобиль",
            //    slot: "number",
            //    width: 150,
            //    key: "number",
            //    sortable: true
            // },
            // {
            //    title: "Постановление",
            //    key: "act",
            //    width: 270
            // },
            // {
            //    title: "Сумма",
            //    key: "amount",
            //    slot: "amount",
            //    width: 120,
            //    sortable: true,
            //    filters: [
            //       {
            //          label: "Более 1 000 рублей",
            //          value: "from_1000"
            //       },
            //       {
            //          label: "До 1 000 рублей",
            //          value: "to_1000"
            //       }
            //    ],
            //    filterMultiple: false,
            //    filterMethod(value, row) {
            //       if (value === "from_1000") {
            //          return row.amount > 1000;
            //       } else if (value === "to_1000") {
            //          return row.amount < 1000;
            //       }
            //    }
            // },
            // {
            //    title: "Время нарушения",
            //    key: "date",
            //    slot: "date",
            //    width: 200,
            //    filters: [
            //       {
            //          label: "С датой",
            //          value: "date"
            //       },
            //       {
            //          label: "Без даты",
            //          value: "null"
            //       }
            //    ],
            //    filterMultiple: false,
            //    filterMethod(value, row) {
            //       if (value === "date") {
            //          return row.date > 0;
            //       } else if (value === "null") {
            //          return row.date == 0;
            //       }
            //    },
            //    sortable: true
            //    // sortMethod (a,b ,type) {
            //    // type === 'asc' ? (a.date > b.date ? 1 : -1): (a.date < b.date ? 1 : -1)
            //    // },
            // },
            // {
            //    title: "Статья",
            //    slot: "about"
            // },

            // {
            //    title: " ",
            //    slot: "action",
            //    align: "center",
            //    width: 150
            // },
            // {
            //    title: " ",
            //    slot: "remove",
            //    align: "center",
            //    width: 60
            // }
         ],
         clients: []
      };
   },
   async asyncData({ $axios, error }) {
      let response = await $axios.$get("/clients/getlist");
      return { clients: response.data };
   },

   created() {
      this.pollData();
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
            let response = await this.$axios.$get("/clients/getlist", {
               progress: false
            });
            this.clients = response.data;
         } catch (error) {
            this.$Notice.error({
               title: "Ошибка обновления"
            });
         }
      }

      // modal_close() {
      //    this.modal.fine.show = false;
      //    this.modal.delete.show = false;
      // },

      // confirm_fine(id) {
      //    console.log(id);
      //    this.modal.fine.show = true;
      //    this.modal.fine_id = id;
      // },

      // confirm_remove(id) {
      //    console.log(id);
      //    this.modal.delete.show = true;
      //    this.modal.fine_id = id;
      // },

      // async remove() {
      //    try {
      //       let response = await this.$axios.$post(
      //          "/fines/delete/" + this.modal.fine_id,
      //          {
      //             ses: this.modal.delete.ses
      //          }
      //       );
      //       this.$Notice.success({
      //          title: "Удаление штрафа",
      //          desc: "Успешно"
      //       });

      //       this.load();
      //    } catch (error) {
      //       this.$Notice.error({
      //          title: "Удаление штрафа",
      //          desc: "Неизвестная ошибка"
      //       });
      //    }

      //    this.modal.delete.show = false;
      // },

      // async fine() {
      //    try {
      //       await this.$axios.$post("/fines/claim/" + this.modal.fine_id);
      //       let response = await this.$axios.$get("/fines/getlist");
      //       this.fines = response.data;
      //       this.$Notice.success({
      //          title: "Выставление штрафа",
      //          desc: "Успешно"
      //       });

      //       this.load();
      //    } catch (error) {
      //       this.$Notice.error({
      //          title: "Выставление штрафа",
      //          desc: "Неизвестная ошибка"
      //       });
      //    }

      //    this.modal.fine.show = false;
      // }
   }
};
</script>