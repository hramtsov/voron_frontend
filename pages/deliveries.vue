<template>
  <div>
    <PageHeader title="Заказы" icon="fad fa-map-marker-alt" />
  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'Заказы/ VORON BLACK'
  },
}
</script>
