<template>
   <Row :gutter="40" class="my-4">
      <Col :lg="24" :xxl="6">
         <div class="menu-block-title">
            <i class="fad fa-calendar"></i>По месяцам
         </div>
         <ul class="statistic-menu mt-2">
            <li>
               <nuxt-link to="/statistics/month" exact>Общие показатели</nuxt-link>
            </li>
            <li>
               <nuxt-link to="/statistics/month/costs">Расходы</nuxt-link>
            </li>
            <li>
               <nuxt-link to="/statistics/month/revenue">График выручки и прибыли</nuxt-link>
            </li>
            <li>
               <nuxt-link to="/statistics/month/fines">График штафов и ущербов</nuxt-link>
            </li>
            <li>
               <nuxt-link to="/statistics/month/models">Сравнение моделей</nuxt-link>
            </li>
         </ul>
      </Col>
      <Col :lg="24" :xxl="6">
         <div class="menu-block-title">
            <i class="fad fa-calendar-day"></i>За день
         </div>
         <ul class="statistic-menu mt-2">
            <li>
               <nuxt-link to="/statistics/day" exact>Показатели за день</nuxt-link>
            </li>
            <li>
               <nuxt-link to="/statistics/day/costs">Расходы за день</nuxt-link>
            </li>
         </ul>
      </Col>
      <Col :lg="24" :xxl="6">
         <div class="menu-block-title">
            <i class="fad fa-steering-wheel"></i>Средняя поездка
         </div>
         <ul class="statistic-menu mt-2">
            <li>
               <nuxt-link to="/statistics/trip" exact>Средняя поездка</nuxt-link>
            </li>
            <li>
               <nuxt-link to="/statistics/trip/costs">Расходы средней поездки</nuxt-link>
            </li>
         </ul>
      </Col>
      <Col :lg="24" :xxl="6">
         <div class="menu-block-title">
            <i class="fad fa-users-crown"></i>Клиенты
         </div>
         <ul class="statistic-menu mt-2">
            <li>
               <nuxt-link to="/statistics/client/pipeline">Воронка регистраций</nuxt-link>
            </li>
            <li>
               <nuxt-link to="/statistics/client/regular">Постоянные клиенты</nuxt-link>
            </li>
            <li>
               <nuxt-link to="/statistics/client" exact>Средний клиент</nuxt-link>
            </li>
         </ul>
      </Col>
   </Row>
</template>




<script>
export default {
   data() {
      return {};
   },
};
</script>


<style lang="scss" scoped>
.menu-block-title {
   @include font-medium();
   font-size: 1rem;

   i {
      font-size: 1.2rem;
      margin-right: 0.8rem;
      color: $gray-500;
   }
}
.statistic-menu {
   li {
      list-style-type: none;
      a {
         font-size: 0.9rem;
         color: $gray-500;
         transition: all 0.3s ease-in-out;
      }

      a:hover:not(.nuxt-link-active) {
         color: $gray-800;
      }

      .nuxt-link-active {
         color: $orange-800;
         @include font-medium();
      }
   }
}
</style>
