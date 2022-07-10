<template>
  <div class="users">
    <table id="users-table">
      <thead>
      <tr>
        <th @click="sort('id')">#</th>
        <th @click="sort('name')">Name</th>
        <th @click="sort('company')">Company</th>
        <th @click="sort('email')">E-mail</th>
        <th @click="sort('quantity')">Quantity</th>
        <th @click="sort('price')">Price</th>
      </tr>

      <SingleUser v-for="user in sortedUsers" :key="user.id" :user="user" />

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
  data() {
    return {
      currentSort:'id',
      currentSortDir:'asc',
    }
  },
  created() {
    this.$store.dispatch('fetchUsers')
      .catch(error => {
        alert(error)
      })
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    sortedUsers:function() {
      return this.users.slice(0).sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      })
    }
  },
  methods: {
    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
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
