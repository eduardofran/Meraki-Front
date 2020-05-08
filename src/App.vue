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
      <v-card-text class="py-2 white--text text-center color">

        <h4>
          made with  <v-icon>mdi-heart</v-icon> by <a href="https://github.com/eduardofran">@eduardofran</a> & <a href="https://github.com/Ollebacx">@Ollebacx</a>
          <v-spacer></v-spacer>
        {{ new Date().getFullYear() }} — <strong>Meraki</strong><br>
          </h4>
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
<style lang="scss" scoped>
 h4{
   font-weight: 400;
 }
 h4 a{color: white;}

.color{
  background-color: #298b7f;
}
</style>
