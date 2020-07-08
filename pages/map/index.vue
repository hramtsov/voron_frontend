<template>
  <div>
    <PageHeader title="Карта" icon="fad fa-map-marked-alt" />
  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'Карта / VORON BLACK'
  },
}
</script>
