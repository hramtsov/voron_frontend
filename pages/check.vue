<template>
   <div>
      <PageHeader title="ЗП" icon="fad fa-money-check-alt" />
   </div>
</template>


<script>
export default {
   middleware: ["auth", "page"],
   head: {
      title: "ЗП / VORON BLACK",
   },
};
</script>
