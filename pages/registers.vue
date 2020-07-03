<template>
  <div>
    <PageHeader title="Регистрации" icon="fad fa-address-card" />

  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'Регистрации / VORON BLACK'
  },
}
</script>
