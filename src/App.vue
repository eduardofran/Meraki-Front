<template>
  <v-app>
    <!-- <Navbar/> -->
    <component :is='layout'>
    </component>

     <v-content>
    <router-view></router-view>

    </v-content>

  </v-app>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
const defaultLayout = 'default'
export default {
  name: 'App',

  components: {
    // Navbar

  },
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },

  data: () => ({
    //
  })
}
</script>
