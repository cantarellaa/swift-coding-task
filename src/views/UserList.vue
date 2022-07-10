<template>
  <div>
    <user-create></user-create>

    <button @click="visible = !visible">Show Table</button>

    <div v-if="visible" class="users">
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
        </thead>
        <SingleUser v-for="user in sortedUsers" :key="user.id" :user="user" />

      </table>


      <div class="pagination-container">
        <div class="pagination-sign" @click="prevPage"> &#8810; Previous Page</div>
        <div class="pagination-sign" @click="nextPage">Next Page &#8811;</div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleUser from '@/components/SingleUser.vue'
import UserCreate from "@/components/UserCreate"

export default {
  name: 'UserList',
  components: {
    SingleUser,
    UserCreate
  },
  data() {
    return {
      currentSort:'id',
      currentSortDir:'asc',
      visible: false,
      pageSize:20,
      currentPage:1
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
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
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
    nextPage:function() {
      if((this.currentPage*this.pageSize) < this.users.length) this.currentPage++;
    },
    prevPage:function() {
      if(this.currentPage > 1) this.currentPage--;
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
  .pagination-container {
    margin: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .pagination-sign:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
