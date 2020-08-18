<template>
   <div>
      <PageHeader title="Статистика" icon="fad fa-chart-pie" />

      <StatisticMenu />

      <DatePicker
         format="dd.MM.yyyy"
         v-model="daterange"
         type="daterange"
         placeholder="Выберите интервал"
         split-panels___
         @on-change="changeDate"
      ></DatePicker>

      <Row :gutter="40" class="my-5">
         <Col :lg="24" :xxl="(graphs.sizes.pie_revenues ? 24 : 14)">
            <div class="card-box p-4">
               <!-- <div @click="graphs.sizes.pie_revenues = !graphs.sizes.pie_revenues">
                  <span v-if="graphs.sizes.pie_revenues">Свернуть</span>
                  <span v-if="!graphs.sizes.pie_revenues">Развернуть</span>
               </div>-->

               <highcharts
                  v-if="graphs.loads.revenues && $can('statistics/pie_revenues')"
                  :options="graphs.pie_revenues"
               ></highcharts>
            </div>
         </Col>
         <Col :lg="24" :xxl="10">
            <div class="card-box p-4">
               <highcharts
                  v-if="graphs.loads.loaded && $can('statistics/pie_loaded')"
                  :options="graphs.pie_loaded"
               ></highcharts>
            </div>
         </Col>
      </Row>

      <Row :gutter="40">
         <Col :lg="24" :xxl="14">
            <div class="card-box p-4">
               <highcharts
                  v-if="graphs.loads.revenues && $can('statistics/graph_revenues')"
                  :options="graphs.graph_revenues"
               ></highcharts>
            </div>
         </Col>
         <Col :lg="24" :xxl="10">
            <div class="card-box p-4">
               <highcharts
                  v-if="graphs.loads.loaded && $can('statistics/graph_loaded')"
                  :options="graphs.graph_loaded"
               ></highcharts>
            </div>
         </Col>
      </Row>
   </div>
</template>


<script>
import Highcharts from "highcharts";

import StatisticMenu from "@/components/StatisticMenu";

export default {
   middleware: ["auth", "page"],
   head: {
      title: "Статистика / VORON BLACK",
   },
   components: {
      StatisticMenu,
   },

   data() {
      return {
         daterange: [new Date(), new Date()],

         graphs: {
            loads: {
               revenues: false,
               loaded: false,
            },
            sizes: {
               pie_revenues: false,
            },
            graph_loaded: {
               colors: Highcharts.map(
                  [
                     "#FF8000",
                     "#0b9f00",
                     "#0084ff",
                     "#0000ff",
                     "#ff2400",
                     "#808080",
                     "#000000",
                  ],
                  function (color) {
                     return {
                        radialGradient: {
                           cx: 0.5,
                           cy: 0.3,
                           r: 0.7,
                        },
                        stops: [
                           [
                              0,
                              Highcharts.color(color)
                                 .brighten(+0.3)
                                 .get("rgb"),
                           ],
                           [1, color],
                        ],
                     };
                  }
               ),
               yAxis: {
                  title: false,
                  min: 0,
               },
               xAxis: {
                  type: "datetime",
                  tickInterval: 1 * 24 * 3600 * 1000, // one week
                  tickWidth: 0,
                  // gridLineWidth: 1,

                  dateTimeLabelFormats: {
                     // millisecond: "%H:%M:%S.%L",
                     // second: "%H:%M:%S",
                     // minute: "%H:%M",
                     // hour: "%H:%M",
                     day: "%e %b",
                     // week: "%e. %b",
                     // month: "%b '%y",
                     // year: "%Y",
                  },
               },
               plotOptions: {
                  area: {
                     stacking: "percent",
                     lineColor: "#ffffff",
                     lineWidth: 1,
                     marker: {
                        symbol: "circle",
                        lineWidth: 1,
                        lineColor: "#ffffff",
                     },
                  },
               },
               tooltip: {
                  valueDecimals: 0,
                  pointFormat:
                     '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> мин<br/>',
               },
               chart: {
                  type: "area",
               },
               series: [],
               title: {
                  text: "Статистика загрузки",
               },
               subtitle: {
                  text: "",
               },
            },
            pie_loaded: {
               chart: {
                  type: "pie",
               },
               colors: Highcharts.map(
                  [
                     "#FF8000",
                     "#0b9f00",
                     "#0084ff",
                     "#0000ff",
                     "#ff2400",
                     "#fa6057",
                     "#808080",
                     "#000000",
                  ],
                  function (color) {
                     return {
                        radialGradient: {
                           cx: 0.5,
                           cy: 0.3,
                           r: 0.7,
                        },
                        stops: [
                           [
                              0,
                              Highcharts.color(color)
                                 .brighten(+0.3)
                                 .get("rgb"),
                           ],
                           [1, color],
                        ],
                     };
                  }
               ),
               tooltip: {
                  pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
                  crosshairs: true,
                  shared: true,
               },
               chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: "pie",
               },
               plotOptions: {
                  pie: {
                     allowPointSelect: true,
                     cursor: "pointer",
                     dataLabels: {
                        enabled: true,
                        format: "<b>{point.name}</b>",
                        style: {
                           color:
                              (Highcharts.theme &&
                                 Highcharts.theme.contrastTextColor) ||
                              "black",
                        },
                     },
                  },
               },
               series: [],
               title: {
                  text: "Загрузка",
               },
               subtitle: {
                  text: "",
               },
            },
            pie_revenues: {
               chart: {
                  type: "pie",
               },
               colors: Highcharts.map(
                  [
                     "#000000",
                     "#FF8000",
                     "#0b9f00",
                     "#0084ff",
                     "#f000ff",
                     "#6600ff",
                     "#12b7a6",
                     "#b74c12",
                  ],
                  function (color) {
                     return {
                        radialGradient: {
                           cx: 0.5,
                           cy: 0.3,
                           r: 0.7,
                        },
                        stops: [
                           [
                              0,
                              Highcharts.color(color)
                                 .brighten(+0.3)
                                 .get("rgb"),
                           ],
                           [1, color],
                        ],
                     };
                  }
               ),
               tooltip: {
                  pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
                  crosshairs: true,
                  shared: true,
               },
               chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: "pie",
               },
               plotOptions: {
                  pie: {
                     allowPointSelect: true,
                     cursor: "pointer",
                     dataLabels: {
                        enabled: true,
                        format: "<b>{point.name}</b>",
                        style: {
                           color:
                              (Highcharts.theme &&
                                 Highcharts.theme.contrastTextColor) ||
                              "black",
                        },
                     },
                  },
               },
               title: {
                  text: "Общая выручка",
               },
               subtitle: {
                  text: "",
               },
               series: [],
            },
            graph_revenues: {
               colors: Highcharts.map(
                  ["#cc0000", "#0b9f00", "#FF8000", "#000000"],
                  function (color) {
                     return {
                        radialGradient: {
                           cx: 0.5,
                           cy: 0.3,
                           r: 0.7,
                        },
                        stops: [
                           [
                              0,
                              Highcharts.color(color)
                                 .brighten(+0.3)
                                 .get("rgb"),
                           ],
                           [1, color],
                        ],
                     };
                  }
               ),
               yAxis: {
                  title: false,
                  min: 0,
               },
               xAxis: {
                  type: "datetime",
                  tickInterval: 1 * 24 * 3600 * 1000, // one week
                  tickWidth: 0,
                  // gridLineWidth: 1,

                  dateTimeLabelFormats: {
                     // millisecond: "%H:%M:%S.%L",
                     // second: "%H:%M:%S",
                     // minute: "%H:%M",
                     // hour: "%H:%M",
                     day: "%e %b",
                     // week: "%e. %b",
                     // month: "%b '%y",
                     // year: "%Y",
                  },
               },

               tooltip: {
                  valueDecimals: 0,
                  pointFormat:
                     '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> <span class="rub-icon">₽</span><br/>',
               },
               title: {
                  text: "Статистика выручки",
               },
               subtitle: {
                  text: "Тут",
               },
               series: [],
               legend: false,
            },
         },
      };
   },

   mounted() {
      this.load();
   },

   methods: {
      changeDate(t) {
         this.load();
      },
      load() {
         this.pie_revenues();
         this.pie_loaded();
      },

      async pie_revenues() {
         try {
            this.graphs.loads.revenues = false;

            let response = await this.$axios.$post(
               "/statistics/total_revenues/",
               {
                  daterange: this.daterange,
               },
               {
                  progress: false,
               }
            );

            this.graphs.graph_revenues.series = response.data.graph;
            this.graphs.graph_revenues.subtitle.text =
               "с " +
               this.$options.filters.date_d(response.data.date_start) +
               " по " +
               this.$options.filters.date_d(response.data.date_end);

            this.graphs.pie_revenues.series = response.data.pie;
            this.graphs.pie_revenues.subtitle.text =
               "с " +
               this.$options.filters.date_d(response.data.date_start) +
               " по " +
               this.$options.filters.date_d(response.data.date_end) +
               " – <span class='highcharts-subtitle-hl'>" +
               this.$options.filters.number(response.data.total) +
               " ₽</span>";

            this.graphs.loads.revenues = true;

            // console.log(response.data.graph);

            // let pie = this.$refs.pie_revenues;
            // pie.removeSeries();
            // for (var i = response.data.pie.length - 1; i >= 0; i--) {
            //    pie.addSeries(response.data.pie[i], true);
            // }

            // pie.delegateMethod("showLoading", "Загрузка...");
            // pie.hideLoading();

            // pie.chart.setTitle(null, {
            //    text:
            //       "с " +
            //       this.$options.filters.date_d(response.data.date_start) +
            //       " по " +
            //       this.$options.filters.date_d(response.data.date_end) +
            //       " – <b>" +
            //       this.$options.filters.number(response.data.total) +
            //       " ₽</b>",
            // });
         } catch (error) {
            this.$Notice.error({
               title: "Ошибка загрузки",
               desc: "Не удалось загрузить данные общей выручки",
            });
         }
      },

      async pie_loaded() {
         try {
            this.graphs.loads.loaded = false;

            let response = await this.$axios.$post(
               "/statistics/total_loaded/",
               {
                  daterange: this.daterange,
               },
               {
                  progress: false,
               }
            );

            this.graphs.pie_loaded.series = response.data.pie;
            this.graphs.pie_loaded.subtitle.text =
               "с " +
               this.$options.filters.date_d(response.data.date_start) +
               " по " +
               this.$options.filters.date_d(response.data.date_end) +
               " – <span class='highcharts-subtitle-hl'>" +
               this.$options.filters.number(response.data.total) +
               " минут</span>";

            console.log(response.data.graph);

            this.graphs.graph_loaded.series = response.data.graph;
            this.graphs.graph_loaded.subtitle.text =
               "с " +
               this.$options.filters.date_d(response.data.date_start) +
               " по " +
               this.$options.filters.date_d(response.data.date_end);

            this.graphs.loads.loaded = true;
         } catch (error) {
            this.$Notice.error({
               title: "Ошибка загрузки",
               desc: "Не удалось загрузить данные загрузки авто",
            });
         }
      },
   },
};
</script>


