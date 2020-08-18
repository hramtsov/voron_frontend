<template>
   <transition name="fade">
      <div class="tags_list">
         <VTag
            v-for="(car, key) in $store.getters['cars/get']"
            :key="key"
            :car="car"
            icon="fad fa-car"
         >
            <CarNumber :number="car.number" />
         </VTag>
      </div>
   </transition>
</template>

<script>
import VTag from "@/components/tags/VTag";
import CarNumber from "@/components/cars/Number";
export default {
   components: {
      CarNumber,
      VTag
      // Search
   },
   methods: {
      // profileMenu(item) {
      //    if (item == "logout") {
      //       this.$auth.logout();
      //    }
      // }
   }
};
</script>

<style lang="scss" scoped>
.tags_list {
   // display: block;
}
</style>