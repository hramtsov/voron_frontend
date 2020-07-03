<template>
  <div>
    <PageHeader title="Категории" icon="fad fa-bars" />
  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'Категории / VORON BLACK'
  },
}
</script>
