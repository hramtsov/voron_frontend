<template>
   <div>
      <PageHeader title="Статистика расходов средней поездки" icon="fad fa-chart-pie" />

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
         <Col :lg="24">
            <div class="card-box p-4"></div>
         </Col>
      </Row>
   </div>
</template>


<script>
import StatisticMenu from "@/components/StatisticMenu";

export default {
   middleware: ["auth", "page"],
   head: {
      title: "Статистика расходов средней поездки / VORON BLACK",
   },
   components: {
      StatisticMenu,
   },

   data() {
      return {
         daterange: [new Date(), new Date()],
      };
   },

   methods: {
      changeDate(t) {},
   },
};
</script>


