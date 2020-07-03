<template>
  <div>
    <PageHeader title="График" icon="fad fa-calendar-alt" />
  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'График / VORON BLACK'
  },
}
</script>
