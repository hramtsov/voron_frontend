<template>
   <transition name="fade">
      <div class="tag-item">
         <i v-if="icon" :class="[icon, 'tag-icon-type']"></i>
         <div>
            <slot></slot>
         </div>
         <!-- @click -->
         <i
            class="fal fa-times tag-icon-close pointer"
            @click="$store.dispatch('cars/changeSelected', {id: car.id, active: false})"
         ></i>
      </div>
   </transition>
</template>

<script>
export default {
   props: ["car", "icon"]
};
</script>


<style lang="scss" scoped>
.tag-item {
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   align-content: space-between;

   // display: inline-block;
   margin-right: 15px;
   margin-bottom: 15px;
   padding: 7px 15px;
   background: $gray-200;
   color: $gray-500;
   line-height: 35px;
   border-radius: 5px;

   i.tag-icon-type {
      flex: 0 1 auto;

      // display: inline-block;
      // float: left;
      line-height: 35px;
      font-size: 20px;
      color: $gray-400;
      margin-right: 10px;
   }

   i.tag-icon-close {
      flex: 0 1 auto;

      // display: inline-block;
      line-height: 35px;
      font-size: 20px;
      color: $gray-400;
      margin-left: 10px;

      transition: all 0.3s ease;
   }

   i.tag-icon-close:hover {
      color: $gray-600;
   }
}
</style>