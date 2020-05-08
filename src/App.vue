<template>
  <v-app>
    <!-- <Navbar/> -->
    <component :is='layout'>
    </component>

     <v-content>
    <router-view></router-view>
    <!-- <VueElevator class='elevator' :word='word' :duration='duration' :mainAudio='mainAudio' :endAudio='endAudio' ></VueElevator> -->
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
import { VueElevator } from 'vue-elevator'
const defaultLayout = 'default'

export default {
  name: 'App',

  components: {
    // Navbar
    VueElevator
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },

  data: () => ({
    // word: '',
    // duration: 10000,
    // mainAudio: 'http://tholman.com/elevator.js/music/elevator.mp3',
    // endAudio: 'http://tholman.com/elevator.js/music/ding.mp3'
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
.elevator{
//   position: absolute;
//   right:0;
  margin: 50px 0;
}
</style>
