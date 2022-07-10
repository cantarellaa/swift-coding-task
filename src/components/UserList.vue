<template>
  <div class="users">
    <table id="users-table">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Company</th>
        <th>E-mail</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>

      <SingleUser v-for="user in users" :key="user.id" :user="user" />

      </thead>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleUser from '@/components/SingleUser.vue'

export default {
  name: 'UserList',
  components: {
    SingleUser
  },
  created() {
    this.$store.dispatch('fetchUsers')
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
}
</script>

<style scoped>
  .users {
  display: flex;
  flex-direction: column;
  align-items: center;
    margin-top: 5rem;
  }

  #users-table {
    font-family: Arial, Helvetica, sans-serif;
  }

  #users-table td, #users-table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #users-table tr:nth-child(even){background-color: #f2f2f2;}
  #users-table tr:hover {background-color: #ddd;}

  #users-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #8904aa;
    color: white;
  }
</style>
