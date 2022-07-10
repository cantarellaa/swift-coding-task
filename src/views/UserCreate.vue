<template>
  <div class="form-container">

    <form @submit.prevent="onSubmit">

      <label>Name</label>
      <input
          v-model="user.name"
          type="text"
          placeholder="John Doe"
      >

      <label>Company</label>
      <input
          v-model="user.company"
          type="text"
          placeholder="Company Name"
      />

      <label>E-mail</label>
      <input
          v-model="user.email"
          type="text"
          placeholder="john@company.com"
      />

      <label>Quantity</label>
      <input
          v-model="user.quantity"
          type="number"
          placeholder="1"
      />

      <label>Price</label>
      <input
          v-model="user.price"
          type="number"
          placeholder="100"
      />

      <button type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        id: 0,
        name: '',
        company: '',
        email: '',
        quantity: 0,
        price: 0
      }
    }
  },
  methods: {
    onSubmit() {
      console.log("User:", this.user)
    }
  }
}
</script>
