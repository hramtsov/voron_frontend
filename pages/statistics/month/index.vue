<template>
   <div>
      <PageHeader title="Статистика общих показателей" icon="fad fa-chart-pie" />

      <!-- <StatisticMenu /> -->

      <DatePicker
         format="dd.MM.yyyy"
         v-model="daterange"
         type="daterange"
         placeholder="Выберите интервал"
         split-panels___
         @on-change="changeDate"
      ></DatePicker>

      <Row :gutter="40" class="my-5">
         <Col :lg="24">
            <div class="card-box p-4">
               <TableCustom
                  :columns="columns"
                  :data="data"
                  height="500"
                  show-summary
                  :summary-method="totalSummary"
               >
                  <template slot-scope="{ row }" slot="month_name">
                     <b>{{ row.month_name }}</b>
                  </template>

                  <template
                     slot-scope="{ row }"
                     slot="count_sess"
                     v-if="row.count_sess"
                  >{{ row.count_sess | number }}</template>

                  <template
                     slot-scope="{ row }"
                     slot="count_rents"
                     v-if="row.count_rents"
                  >{{ row.count_rents | number }}</template>
                  <template
                     slot-scope="{ row }"
                     slot="count_cars"
                     v-if="row.count_cars"
                  >{{ row.count_cars | number }}</template>
                  <template
                     slot-scope="{ row }"
                     slot="count_cars_effect"
                     v-if="row.count_cars_effect"
                  >{{ row.count_cars_effect | number }}</template>
                  <template
                     slot-scope="{ row }"
                     slot="count_clients"
                     v-if="row.count_clients"
                  >{{ row.count_clients | number }}</template>
                  <template
                     slot-scope="{ row }"
                     slot="count_new_clients"
                     v-if="row.count_new_clients"
                  >{{ row.count_new_clients | number }}</template>

                  <template
                     slot-scope="{ row }"
                     slot="count_rents_client"
                     v-if="row.count_rents_client"
                  >{{ row.count_rents_client | round(2) | number }}</template>

                  <template
                     slot-scope="{ row }"
                     slot="delivery"
                     v-if="row.count_delivery || row.proc_delivery"
                  >{{ row.count_delivery | number }} / {{ row.proc_delivery | round(2) | number }} %</template>

                  <template slot-scope="{ row }" slot="time_motion" v-if="row.time_motion">
                     <b>{{ $moment.duration(row.time_motion, "seconds").asHours() | floor }}</b> ч
                     <b>{{ $moment.duration(row.time_motion, "seconds").minutes() }}</b> м
                  </template>

                  <template slot-scope="{ row }" slot="time_parking" v-if="row.time_parking">
                     <b>{{ $moment.duration(row.time_parking, "seconds").asHours() | floor }}</b> ч
                     <b>{{ $moment.duration(row.time_parking, "seconds").minutes() }}</b> м
                  </template>

                  <template slot-scope="{ row }" slot="time_common" v-if="row.time_common">
                     <b>{{ $moment.duration(row.time_common, "seconds").asHours() | floor }}</b> ч
                     <b>{{ $moment.duration(row.time_common, "seconds").minutes() }}</b> м
                  </template>

                  <template
                     slot-scope="{ row }"
                     slot="mileage_common"
                     v-if="row.mileage_common"
                  >{{ row.mileage_common | round | number }} км</template>

                  <template slot-scope="{ row }" slot="time_auto_month" v-if="row.time_auto_month">
                     <b>{{ $moment.duration(row.time_auto_month, "seconds").asHours() | floor }}</b> ч
                     <b>{{ $moment.duration(row.time_auto_month, "seconds").minutes() }}</b> м
                  </template>

                  <template
                     slot-scope="{ row }"
                     slot="mileage_auto"
                     v-if="row.mileage_auto"
                  >{{ row.mileage_auto | round | number }} км</template>

                  <template
                     slot-scope="{ row }"
                     slot="count_rent_auto_month"
                     v-if="row.count_rent_auto_month"
                  >{{ row.count_rent_auto_month | round | number }}</template>

                  <template
                     slot-scope="{ row }"
                     slot="count_delivery_auto_month"
                     v-if="row.count_delivery_auto_month"
                  >{{ row.count_delivery_auto_month | round | number }}</template>

                  <template slot-scope="{ row }" slot="sum_auto_month" v-if="row.sum_auto_month">
                     <span class="number">{{ row.sum_auto_month | number }}</span>
                     <span class="unit">₽</span>

                     <!-- number-hl -->

                     <!-- {{ row.count_delivery_auto_month | round | number }} -->
                  </template>

                  <template
                     slot-scope="{ row }"
                     slot="costs_auto_month"
                     v-if="row.costs_auto_month"
                  >
                     <span class="number">{{ row.costs_auto_month | number }}</span>
                     <span class="unit">₽</span>
                  </template>

                  <template slot-scope="{ row }" slot="profit_auto" v-if="row.profit_auto">
                     <span class="number">{{ row.profit_auto | number }}</span>
                     <span class="unit">₽</span>
                  </template>

                  <template slot-scope="{ row }" slot="sum_rents" v-if="row.sum_rents">
                     <span class="number-hl">{{ row.sum_rents | number }}</span>
                     <span class="unit">₽</span>
                  </template>

                  <template slot-scope="{ row }" slot="sum_costs" v-if="row.sum_costs">
                     <span class="number">{{ row.sum_costs | number }}</span>
                     <span class="unit">₽</span>
                  </template>

                  <template
                     slot-scope="{ row }"
                     slot="profit_statistic"
                     v-if="row.profit_statistic"
                  >
                     <span class="number">{{ row.profit_statistic | number }}</span>
                     <span class="unit">₽</span>
                  </template>

                  <template slot-scope="{ total }" slot="count_rents_client_summary">
                     <b>{{ total | floor(2) | number }}</b>
                  </template>

                  <template slot-scope="{ total }" slot="time_motion_summary">
                     <b>{{ $moment.duration(total, "seconds").asHours() | floor }}</b> ч
                     <b>{{ $moment.duration(total, "seconds").minutes() }}</b> м
                  </template>

                  <template slot-scope="{ total }" slot="time_parking_summary">
                     <b>{{ $moment.duration(total, "seconds").asHours() | floor }}</b> ч
                     <b>{{ $moment.duration(total, "seconds").minutes() }}</b> м
                  </template>

                  <template slot-scope="{ total }" slot="time_common_summary">
                     <b>{{ $moment.duration(total, "seconds").asHours() | floor }}</b> ч
                     <b>{{ $moment.duration(total, "seconds").minutes() }}</b> м
                  </template>

                  <template slot-scope="{ total }" slot="mileage_common_summary">
                     <b>{{ total | round | number }}</b> км
                  </template>

                  <!-- <template slot="count_rents_summary">test Result</template> -->
               </TableCustom>
            </div>
         </Col>
      </Row>
   </div>
</template>


<script>
import StatisticMenu from "@/components/StatisticMenu";

import TableCustom from "@/components/table";

export default {
   middleware: ["auth", "page"],
   head: {
      title: "Статистика общих показателей / VORON BLACK",
   },
   components: {
      StatisticMenu,
      TableCustom,
   },

   data() {
      return {
         daterange: [new Date(), new Date()],

         columns: [
            {
               title: " ",
               key: "year",
               width: 60,
               fixed: "left",
               align: "center",

               filters_all: true,
            },
            {
               title: " ",
               key: "month_name",
               slot: "month_name",
               width: 100,
               fixed: "left",
               align: "center",

               filters_all: true,
               filters_value: "month",
               filters_label: "month_name",
               filters_label_separator: " / ",
            },
            {
               title: "Сессии",
               key: "count_sess",
               slot: "count_sess",
               width: 90,
               align: "center",
               sortable: true,
            },
            {
               title: "Поездки",
               key: "count_rents",
               slot: "count_rents",
               width: 90,
               align: "center",
               help: "Сессии, в которых есть режим Поездка",
               sortable: true,
            },
            {
               title: "Автомобили всего",
               key: "count_cars",
               slot: "count_cars",
               width: 120,
               align: "center",
               sortable: true,
            },
            {
               title: "Автомобили эффективно",
               key: "count_cars_effect",
               slot: "count_cars_effect",
               width: 110,
               align: "center",
               sortable: true,
               help:
                  "Количество авто при учете, что каждый на линии 95% времени (сумма всех процентов на линии деленное на 95%)",
            },
            {
               title: "Клиенты",
               key: "count_clients",
               slot: "count_clients",
               width: 100,
               align: "center",
               sortable: true,
            },
            {
               title: "Новые клиенты",
               key: "count_new_clients",
               slot: "count_new_clients",
               width: 100,
               align: "center",
               sortable: true,
            },
            {
               title: "Поездки клиент",
               slot: "count_rents_client",
               key: "count_rents_client",
               width: 100,
               align: "center",
               sortable: true,
            },
            {
               title: "Доставки",
               slot: "delivery",
               width: 100,
               align: "center",
               sortable: true,
            },
            {
               title: "В движении",
               key: "time_motion",
               slot: "time_motion",
               width: 110,
               align: "center",
               sortable: true,
            },
            {
               title: "В парковке",
               key: "time_parking",
               slot: "time_parking",
               width: 110,
               align: "center",
               help: "Бронь + Ожидание + Платная парковка",
               sortable: true,
            },
            {
               title: "Время всего",
               key: "time_common",
               slot: "time_common",
               width: 110,
               align: "center",
               sortable: true,
            },
            {
               title: "Пробег всего",
               key: "mileage_common",
               slot: "mileage_common",
               width: 100,
               align: "center",
               sortable: true,
            },
            {
               title: "Время авто",
               key: "time_auto_month",
               slot: "time_auto_month",
               width: 110,
               align: "center",
               sortable: true,
            },
            {
               title: "Пробег авто",
               key: "mileage_auto",
               slot: "mileage_auto",
               width: 100,
               align: "center",
               sortable: true,
            },
            {
               title: "Поездки авто",
               key: "count_rent_auto_month",
               slot: "count_rent_auto_month",
               width: 100,
               align: "center",
               sortable: true,
            },
            {
               title: "Доставки авто",
               key: "count_delivery_auto_month",
               slot: "count_delivery_auto_month",
               width: 100,
               align: "center",
               sortable: true,
            },
            {
               title: "Выручка авто",
               key: "sum_auto_month",
               slot: "sum_auto_month",
               width: 110,
               align: "center",
               sortable: true,
            },
            {
               title: "Расход авто",
               key: "costs_auto_month",
               slot: "costs_auto_month",
               width: 110,
               align: "center",
               sortable: true,
            },
            {
               title: "Прибыль авто",
               key: "profit_auto",
               slot: "profit_auto",
               width: 110,
               align: "center",
               sortable: true,
            },
            {
               title: "Выручка",
               key: "sum_rents",
               slot: "sum_rents",
               width: 110,
               align: "center",
               sortable: true,
            },
            {
               title: "Расход",
               key: "sum_costs",
               slot: "sum_costs",
               width: 110,
               align: "center",
               sortable: true,
            },
            {
               title: "Прибыль",
               key: "profit_statistic",
               slot: "profit_statistic",
               width: 110,
               align: "center",
               sortable: true,
            },
         ],
         data: [],
      };
   },

   async asyncData({ $axios, error }) {
      let response = await $axios.$get("/statistics/test");
      return { data: response.data };
   },

   methods: {
      changeDate(t) {},

      totalSummary({ columns, data }) {
         const sums = {};
         columns.forEach((column, index) => {
            // console.log(column);

            const key = column.key;

            if (["year", "month_name"].includes(key)) {
               sums[key] = {
                  key,
                  value: "",
               };
               return;
            }

            /// Сумма / количество месяцев
            if (["count_rents_client"].includes(key)) {
               const values = data.map((item) => Number(item[key]));

               // if (isNaN(n)) {
               // 	alert('не число');
               // 	}
               // if (values.every((value) => isNaN(value))) {
               //    v = values.reduce((prev, curr) => {
               //       const value = Number(curr);
               //       if (!isNaN(value)) {
               //          return prev + curr;
               //       } else {
               //          return prev;
               //       }
               //    }, 0);
               // }

               let v = 0;
               for (let i = 0; i < values.length; i++) {
                  if (isNaN(values[i])) {
                     values[i] = 0;
                  }

                  v = v + values[i];
               }

               sums[key] = {
                  key,
                  value: v / values.length,
               };
               return;
            }

            /// Сумма
            if (
               [
                  "count_sess",
                  "count_rents",
                  "time_motion",
                  "time_parking",
                  "time_common",
                  "mileage_common",
               ].includes(key)
            ) {
               const values = data.map((item) => Number(item[key]));

               let v = 0;
               for (let i = 0; i < values.length; i++) {
                  if (isNaN(values[i])) {
                     values[i] = 0;
                  }

                  v = v + values[i];
               }

               sums[key] = {
                  key,
                  value: v,
               };
               return;
            }

            sums[key] = {
               key,
               value: "-",
            };
         });

         return sums;
      },
   },
};
</script>


