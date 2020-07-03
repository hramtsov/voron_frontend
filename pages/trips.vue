<template>
  <div>
    <PageHeader title="Поездки" icon="fad fa-pennant" />

  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'Поездки / VORON BLACK'
  },
}
</script>
