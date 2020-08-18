<template>
   <Modal v-model="show" :title="title" width="900" :footer-hide="true">
      <Table stripe :columns="deposits_columns" :data="deposits">
         <template slot-scope="{ row }" slot="sum">
            <template v-if="row.sum < 200000">
               {{ row.sum | number }}
               <span class="unit">₽</span>
            </template>
            <template v-else>
               <Tooltip content="Безлимит" placement="top" :transfer="true">
                  <i class="fad fa-crown gray-color"></i>
               </Tooltip>
            </template>
         </template>

         <template slot-scope="{ row }" slot="date">{{ row.date | date_d }} {{ row.date | date_t }}</template>

         <template slot-scope="{ row }" slot="trid">{{ row.trid }}</template>
         <template slot-scope="{ row }" slot="status">{{ row.status }}</template>
         <template
            slot-scope="{ row }"
            slot="date_update"
         >{{ row.date_update | date_d }} {{ row.date_update | date_t }}</template>
      </Table>

      <!-- <div v-for="(deposit, key) in deposits" :key="key">
         
          —
         <b>{{ deposit.trid | number }}</b>
         <span class="aboutcompens">№ транзакции</span> —
         <b>{{ deposit.status }}</b>
         — {{ deposit.date_update | date_d }} {{ deposit.date_update | date_t }}
         <span
            class="aboutcompens"
         >обновлен</span>
         {{ deposit.return }}
      </div>-->
   </Modal>
</template>


<script>
export default {
   props: ["value"],
   data() {
      return {
         show: false,
         title: "Депозиты",
         // client: [],
         deposits: [],

         deposits_columns: [
            {
               title: "Сумма",
               slot: "sum",
               width: 120,
               key: "sum",
               sortable: true,
               filters: [
                  {
                     label: "До 200 000",
                     value: "sum"
                  },
                  {
                     label: "Безлимит",
                     value: "unlimited"
                  }
               ],
               filterMultiple: false,
               filterMethod(value, row) {
                  if (value === "sum") {
                     return row.sum < 200000;
                  } else if (value === "unlimited") {
                     return row.sum >= 200000;
                  }
               }
            },
            {
               title: "Внесено",
               slot: "date",
               width: 200,
               key: "date",
               sortable: true
            },
            {
               title: "№ транзакции",
               slot: "trid",
               // width: 150,
               key: "trid"
            },
            {
               title: "Статус",
               slot: "status",
               // width: 150,
               key: "state",
               sortable: true,
               filters: [],
               filterMultiple: true,
               filterMethod(value, row) {
                  return row.state == value;
               }
            },
            {
               title: "Изменение статуса",
               slot: "date_update",
               width: 200,
               key: "date_update",
               sortable: true
            }
         ]
      };
   },

   watch: {
      value: function(id) {
         if (id !== null) this.load(id);
      },
      show: function(val) {
         if (!val) this.$emit("input", null);
      }
   },

   methods: {
      async load(id) {
         // let response = await this.$axios.$get("/clients/info/" + id, {
         // 	progress: false
         // });
         // this.client = response.data;
         // this.title = "История сообщений. " + this.client.fio;

         let deposits = await this.$axios.$get("/clients/deposits/" + id, {
            progress: false
         });
         this.deposits = deposits.data;

         this.deposits_columns[3].filters = this.$table_filters(
            this.deposits,
            "state",
            "status"
         );

         this.show = true;
      }
   }
};
</script>


<style lang="scss" scoped>
.aboutcompens {
   color: $gray-600;
   font-size: 0.8rem;
   margin: 0 5px;
}

// .sended,
// .opened,
// .manager {
//    display: inline-block;
// }

// .manager {
//    @include font-medium();
// }
</style>
