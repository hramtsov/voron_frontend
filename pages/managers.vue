<template>
  <div>
    <PageHeader title="Менеджеры" icon="fad fa-user-friends" />

  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'Менеджеры / VORON BLACK'
  },
}
</script>
