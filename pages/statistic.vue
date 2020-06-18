<template>
  <div>
    <PageHeader title="Статистика" icon="fad fa-chart-pie" />
  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'Статистика / VORON BLACK'
  },
}
</script>
