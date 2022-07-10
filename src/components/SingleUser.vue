<!-- This file displays the single user table data. -->
<template>
  <tr class="single-user">
    <td> {{ user.id }}</td>
    <td> {{ user.name }}</td>
    <td> {{ user.company }}</td>
    <td> {{ user.email }}</td>
    <td> {{ user.quantity }}</td>
    <td> {{ user.price }}</td>
    <td @click="buttonDelete"> X </td>
  </tr>
</template>

<script>
export default {
  name: 'SingleUser',
  props: {
    user: Object
  },
  methods: {
    buttonDelete() {
      this.$emit('delete-user', this.user)
    }
  }

}
</script>

<style scoped>
  .single-user {
    padding: 20px;
    width: 250px;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
</style>
