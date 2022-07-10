<template>
  <div class="home">
    <SingleUser />
  </div>
</template>

<script>
// @ is an alias to /src
import SingleUser from '@/components/SingleUser.vue'

export default {
  name: 'HomeView',
  components: {
    SingleUser
  }
}
</script>
