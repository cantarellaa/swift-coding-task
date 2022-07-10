<!-- A form to create new users, with validation. -->
<template>
  <div class="form-container">

    <form class="user-form" @submit.prevent="onSubmit">

      <div>
        <label>Name *</label>
        <input
            v-model="user.name"
            type="text"
            placeholder="John Doe"
        >
        <div class="error" v-if="v$.user.name.$error">Name field is required.</div>
      </div>

      <div>
        <label>Company *</label>
        <input
            v-model="user.company"
            type="text"
            placeholder="Company Name"
        />
        <div class="error" v-if="v$.user.company.$error">Company field is required.</div>
      </div>

      <div>
        <label>E-mail *</label>
        <input
            v-model="user.email"
            type="text"
            placeholder="john@company.com"
        />
        <div class="error" v-if="v$.user.email.$error">Email field has an error.</div>
      </div>

      <div>
        <label>Quantity *</label>
        <input
            v-model="user.quantity"
            type="number"
            placeholder="1"
        />
        <div class="error" v-if="v$.user.quantity.$error">Quantity field has an error.</div>
      </div>

      <div>
        <label>Price *</label>
        <input
            v-model="user.price"
            type="number"
            placeholder="100"
        />
        <div class="error" v-if="v$.user.price.$error">Price field has an error.</div>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid'
  import useValidate from '@vuelidate/core'
  import { required, email, integer, decimal, minValue } from '@vuelidate/validators'

  export default {
    data () {
      return {
        v$: useValidate(),
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
    validations() {
      return {
        user: {
          name: { required },
          company: { required },
          email: { required, email },
          quantity: {
            required,
            integer,
            notNegative: minValue(1) },
          price: {
            required,
            decimal,
            notNegative: minValue(1) },
        }
      }
    },
    methods: {
      onSubmit() {
          const user = {
          ...this.user,
          id: uuidv4()
        }
        this.v$.$validate()
        if (!this.v$.$error) {
          this.$store.dispatch('createUser', user)
              .then(() => {
                alert("User created successfully!")
              })
              .catch(error => {
                alert(error)
              })
        }
        else {
          alert('Form failed validation')
        }
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
  }
  .error {
    color: red;
  }
</style>
