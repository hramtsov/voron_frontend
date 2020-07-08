<template>
   <div>
      <PageHeader title="Карта" icon="fad fa-map-marked-alt" />

      <div class="card-box p-1">
         <yandex-map class="map-container" :coords="coords" :zoom="10" @click="onClick">
            <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
         </yandex-map>
      </div>
   </div>
</template>


<script>
export default {
   middleware: ["auth"], // , 'page'
   head: {
      title: "Трек поездки / VORON BLACK"
   },
   data() {
      return {
         coords: [54.82896654088406, 39.831893822753904]
      };
   },
   methods: {
      onClick(e) {
         this.coords = e.get("coords");
      }
   }
};
</script>

<style lang="scss" scoped>
.map-container {
   // min-height: 500px;
   // height: 100vh;
   height: 600px;
   overflow: auto;
   border-radius: 4px;
}
</style>