<template>
   <Row class="mb-3" type="flex" justify="space-between" align="middle">
      <Col :xs="24" :sm="12">
         <Row type="flex" align="middle">
            <Col>
               <div class="pagetitle-icon">
                  <i :class="icon"></i>
               </div>
            </Col>
            <Col>
               <h1 class="pagetitle">{{ title }}</h1>
            </Col>
         </Row>
      </Col>
      <Col :xs="24" :sm="12" align="right">
         <slot name="buttons"></slot>
      </Col>
   </Row>
</template>

<script>
export default {
   props: ["title", "icon"],
   name: "PageHeader"
};
</script>

<style scoped lang="scss">
.pagetitle-icon {
   font-size: 22px;
   width: 48px;
   height: 48px;
   line-height: 46px;
   vertical-align: middle;
   text-align: center;
   border-radius: 5px;
   margin-right: 15px;
   background-color: $gray-200;
   color: $gray-700;

   i {
      vertical-align: middle;
   }
}

.pagetitle {
   color: $black;
}
</style>