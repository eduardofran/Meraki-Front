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
const default_layout= 'default'
export default {
  name: 'App',

  components: {
    // Navbar
    
  },
  computed: {
    layout(){
     return (this.$route.meta.layout || default_layout) + '-layout'
    }
  },

  data: () => ({
    //
  }),
};
</script>
