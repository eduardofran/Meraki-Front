<template>
  <v-app>
    <!-- <Navbar/> -->
    <component :is='layout'>
    </component>

     <v-content>
    <router-view></router-view>

    </v-content>
<v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Meraki</strong>
      </v-card-text>
    </v-card>
  </v-footer>
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
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
