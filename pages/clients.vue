<template>
  <div>
    <PageHeader title="Клиенты" icon="fad fa-users-crown" />

  </div>
</template>


<script>
export default {
  middleware: ['auth', 'page'],
  head: {
    title: 'Клиенты / VORON BLACK'
  },
}
</script>
