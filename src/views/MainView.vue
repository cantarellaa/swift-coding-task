<template>
  <div>
    <user-create></user-create>

    <button @click="visible = !visible">Show Table</button>
    <user-list v-if="visible"></user-list>
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
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>

</style>
