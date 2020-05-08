<template>
  <div>
    <v-container class="mt-12">
      <!-- Sección de información -->
      <goBack class="ml-4"></goBack>
      <v-row>
        <v-col>
          <v-card class outlined color="#FFFFFF">
            <v-row>
              <v-col cols md="7">
                <span class="d-flex">
                  <v-card-subtitle class="pb-0 mb-0">
                    <h3>{{event.country}}, {{event.city}}</h3>
                  </v-card-subtitle>
                  <v-rating
                    v-model="rating"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                    class="mt-2"
                  ></v-rating>
                </span>
                <v-card-title class="pb-7">
                  <h2>{{event.title}}</h2>
                </v-card-title>
                <v-card-text class="text--primary">{{event.description}}</v-card-text>
              </v-col>
              <v-col cols md="5" class="text-right">
                <v-btn to="/signup" large outlined rounded color="#298B7F" class="mb-5">
                  Contactar
                  <v-icon class="ml-2">mdi-email</v-icon>
                </v-btn>
                <span v-if="existsToken">
                <v-btn rounded outlined icon large color="#298b7f" class="mb-5 ml-4" @click="Fav(event._id)">
                  <v-icon v-if="arrFav">mdi-heart</v-icon>
                  <v-icon v-else>mdi-heart-outline</v-icon>
                </v-btn>
                </span>
                <v-img min-height="300px" min-width="300px" :src="event.mainPhoto"></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <!-- Sección de qué necesita  -->
      <v-row>
        <v-col>
          <v-card class outlined color="#FFFFFF">
            <v-row>
              <v-col>
                <v-card-title>
                  <h2>Qué necesita</h2>
                </v-card-title>
                <v-row class="d-flex">
                  <span class="text-center mx-12 my-10 max size">
                    <h1>{{event.workHours}}h</h1>
                    <h3>Horas por semana</h3>
                  </span>
                  <h3
                    v-for="(skill,idx) in event.skillsRequired"
                    :key="idx"
                    class="text-center mx-12 my-10 max"
                  >
                    <v-icon size="60px" color="#298B7F">{{skill.icon}}</v-icon>
                    <div>{{skill.name}}</div>
                  </h3>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <!-- Sección de qué ofrece  -->
      <v-row>
        <v-col>
          <v-card class outlined color="#FFFFFF">
            <v-row>
              <v-col>
                <v-card-title>
                  <h2>Qué ofrece</h2>
                </v-card-title>
                <v-row class="d-flex">
                  <h3
                    v-for="(offer,idx) in event.offers"
                    :key="idx"
                    class="text-center mx-12 my-10 max"
                  >
                    <v-icon size="60px" color="#298B7F">{{offer.icon}}</v-icon>
                    <div>{{offer.name}}</div>
                  </h3>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <!-- Sección de disponibilidad  -->
      <v-row>
        <v-col>
          <v-card class outlined color="#FFFFFF">
            <v-row>
              <v-col>
                <v-card-title>
                  <h2>Disponibilidad</h2>
                </v-card-title>
                <v-row>
                  <v-col cols="12" lg="8" class="mt-5 ml-3">
                    <v-chip-group multiple column>
                      <v-col
                        v-for="(month,idx) in event.available"
                        :key="idx"
                        cols="4"
                        sm="2"
                        lg="2"
                        class="px-1 py-1"
                      >
                        <v-chip
                          disabled
                          v-model="month.mod"
                          active-class="teal--text"
                          class="monthChip"
                          @click="filtered"
                        >
                          <p>{{month}}</p>
                        </v-chip>
                      </v-col>
                    </v-chip-group>
                  </v-col>
                  <v-col cols="12" lg="3" class="mt-5 ml-6">
                    <h3 class="mt-3">Estancia mínima {{event.minStay}} semanas</h3>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <!-- Gallery img  -->
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" class="grey lighten-5 py-10" style="height: auto;">
            <v-card v-for="(n,idx) in 12" :key="idx" class="ma-3" outlined tile>
              <v-img
                :src="event.gallery[n-1]"
                v-if="event.gallery[n-1]"
                height="150px"
                width="150px"
                @click="overlay = !overlay"
              ></v-img>
              <v-img
                src="https://st4.cannypic.com/thumbs/41/412903_632_canny_pic.jpg"
                v-else
                outlined
                height="150px"
                width="150px"
              ></v-img>
            </v-card>
            <!-- GALLERY OVERLAY -->
            <v-overlay :value="overlay">
              <v-btn icon @click="overlay = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
                <v-carousel >
                  <v-carousel-item
                    v-for="(photo,idx) in event.gallery"
                    :key="idx"
                    :src="photo"
                    class="maxGallery"
                  ></v-carousel-item>
                </v-carousel>
            </v-overlay>
          </v-row>
        </v-col>
      </v-row>
       <VueElevator class='elevator' :word='word' :duration='duration' :mainAudio='mainAudio' :endAudio='endAudio' ></VueElevator>
    </v-container>
  </div>
</template>
<script>
import APIServices from '../services/Api'
import goBack from '../components/Back.vue'
import { VueElevator } from 'vue-elevator'

export default {
  data () {
    return {
      event: '',
      isFav: false,
      favEvents: [],
      // ----------- RATING ---------
      emptyIcon: 'mdi-star-outline',
      fullIcon: 'mdi-star',
      halfIcon: 'mdi-star-half-full',
      halfIncrements: true,
      length: 5,
      rating: 2.5,
      readonly: true,
      size: 28,
      dense: true,
      color: 'yellow',
      bgColor: 'black',
      // ---------- GALLERY OVERLAY ---------
      overlay: false,
      word: '',
      duration: 10000,
      mainAudio: 'http://tholman.com/elevator.js/music/elevator.mp3',
      endAudio: 'http://tholman.com/elevator.js/music/ding.mp3'
    }
  },
  components: {
    goBack,
    VueElevator

  },
  computed: {
    existsToken () {
      return localStorage.getItem('token')
    },
    arrFav () {
      if (this.favEvents.length !== 0) { return this.favEvents.map(e => e._id).includes(this.event._id) }
      return false
    }
  },
  methods: {
    async getFavEvents () {
      this.favEvents = await APIServices.getFavorites()
    },
    async Fav (id) {
      const favObj = {
        favorite: id
      }
      if (this.arrFav) {
        await APIServices.deleteFavorite(id).then(response => console.log(response)).catch(error => console.log(error))
        console.log('DELETE')
        this.getFavEvents()
      } else {
        await APIServices.addFavorites(favObj).then(response => console.log(response)).catch(error => console.log(error))
        console.log('ADD')
        this.getFavEvents()
      }
    }

  },
  created () {
    this.getFavEvents()
    APIServices.getEvent(this.$route.params.id)
      .then(result => {
        this.event = result
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style lang="scss" scoped>
.v-card__text,
.v-card__title {
  word-break: normal;
}
h1,
h2,
h3 {
  font-family: Quicksand, sans-serif;
}
.max {
  width: 150px;
}
.maxGallery{
  width: 90vw;
  max-width: 1000px;
  height: auto;
  object-fit: cover;
}
.v-chip--disabled {
  opacity: 1;
}
.monthChip {
  height: 40px;
  width: 100%;
  background: rgba(41, 139, 127, 0.2) !important;
  color: #298B7F;
  p {
    margin: auto;
    text-align: center;
  }
}
.size {
  h1 {
    font-size: 41px;
    margin: 0px;
    padding: 0px;
  }
}
.elevator{
//   position: absolute;
//   right:0;
  margin: 50px 0;
}
</style>
