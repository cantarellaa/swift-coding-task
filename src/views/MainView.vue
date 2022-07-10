<template>
  <div>
    <user-create></user-create>
    <user-list></user-list>
  </div>
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'MainView',
  components: {
    UserCreate,
    UserList,

  }
}
</script>

<style scoped>

</style>
