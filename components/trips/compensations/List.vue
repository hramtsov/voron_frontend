<template>
   <Modal v-model="show" :title="title" width="900" :footer-hide="true">
      <Table stripe :columns="compensations_columns" :data="compensations">
         <template slot-scope="{ row }" slot="reason">
            <b>{{ row.reason_text }}</b>
         </template>

         <template
            slot-scope="{ row }"
            slot="date"
         >{{ row.date_start | date_d }} {{ row.date_start | date_t }}</template>

         <template slot-scope="{ row }" slot="manager">
            <Tooltip
               content="Оплачено безналом"
               placement="top"
               :transfer="true"
               v-if="row.cashless"
            >
               <i class="fad fa-crow"></i>
            </Tooltip>
            <span v-else class="manager gray-color">{{ row.manager_fullname }}</span>
         </template>

         <template slot-scope="{ row }" slot="amount">
            {{ row.amount | number }}
            <span class="unit">₽</span>
         </template>

         <template slot-scope="{ row }" slot="about">
            <span class="less-important">{{ row.about }}</span>
         </template>
      </Table>
   </Modal>
</template>


<script>
export default {
   props: ["value"],
   data() {
      return {
         show: false,
         title: "Компенсации",
         // client: [],
         compensations: [],

         compensations_columns: [
            {
               title: "Тип",
               slot: "reason",
               width: 150,
               key: "reason_type",
               sortable: true
            },

            {
               title: "Дата",
               slot: "date",
               width: 160,
               key: "date_start",
               sortable: true
            },

            {
               title: "Сумма",
               slot: "amount",
               key: "amount",
               width: 120,
               sortable: true
               // filters: [
               //    {
               //       label: "До 200 000",
               //       value: "sum"
               //    },
               //    {
               //       label: "Безлимит",
               //       value: "unlimited"
               //    }
               // ],
               // filterMultiple: false,
               // filterMethod(value, row) {
               //    if (value === "sum") {
               //       return row.sum < 200000;
               //    } else if (value === "unlimited") {
               //       return row.sum >= 200000;
               //    }
               // }
            },

            {
               title: "Описание",
               slot: "about"
            },

            {
               title: "Описание",
               slot: "about"
            },

            {
               title: "Менеджер",
               slot: "manager",
               width: 170,
               key: "manager_id",
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
         let compensations = await this.$axios.$get(
            "/trips/compensations/" + id,
            {
               progress: false
            }
         );
         this.compensations = compensations.data;

         // this.deposits_columns[3].filters = this.$table_filters(
         //    this.deposits,
         //    "state",
         //    "status"
         // );

         this.show = true;
      }
   }
};
</script>


<style lang="scss" scoped>
</style>
