<template>
  <div class="single-user">
    <div> {{ user.id }}</div>
    <div> {{ user.name }}</div>
    <div> {{ user.company }}</div>
    <div> {{ user.email }}</div>
    <div> {{ user.quantity }}</div>
    <div> {{ user.price }}</div>
  </div>
</template>

<script>
export default {
  name: 'SingleUser',
  data() {
    return {
      user: {
        id: 1,
        name: 'John Doe',
        company: 'Company Name',
        email: 'john@company.com',
        quantity: '5',
        price: '49.90'
      }
    }
  }
  // props: {
  //   msg: String
  // }

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
