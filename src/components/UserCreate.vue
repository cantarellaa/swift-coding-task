<template>
  <div class="form-container">

    <form class="user-form" @submit.prevent="onSubmit">

      <div>
        <label>Name</label>
        <input
            v-model="user.name"
            type="text"
            placeholder="John Doe"
        >
      </div>

      <div>
        <label>Company</label>
        <input
            v-model="user.company"
            type="text"
            placeholder="Company Name"
        />
      </div>

      <div>
        <label>E-mail</label>
        <input
            v-model="user.email"
            type="text"
            placeholder="john@company.com"
        />
      </div>

      <div>
        <label>Quantity</label>
        <input
            v-model="user.quantity"
            type="number"
            placeholder="1"
        />
      </div>

      <div>
        <label>Price</label>
        <input
            v-model="user.price"
            type="number"
            placeholder="100"
        />
      </div>

      <button type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid'

  export default {
    data () {
      return {
        user: {
          id: '',
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
        const user = {
          ...this.user,
          id: uuidv4()
        }
        this.$store.dispatch('createUser', user)
          .then(() => {
            alert("User created successfully!")
          })
        .catch(error => {
          alert(error)
        })
      }
    }
  }
</script>

<style scoped>
.user-form {
  display: grid;
  /*grid-template-columns: [labels] auto [controls] 1fr;*/
  grid-auto-flow: row;
  grid-gap: .8em;
  padding: 1.2em;
}
.user-form > label  {
  grid-column: labels;
  grid-row: auto;
}
.user-form > input,
.user-form > button {
  grid-column: controls;
  grid-row: auto;
  border: none;
  padding: 1em;
}
input[type=text], input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 50%;
  background-color: #8904aa;
  color: white;
  padding: 14px 20px;
  margin: 8px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #5f0275;
}
</style>
