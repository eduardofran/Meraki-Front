<template>
  <div>
    <v-card class="mx-auto my-2" max-width="800" min-width="300" outlined color="#FFFFFF">
      <v-row>
        <v-col cols md="5">
          <v-img min-height="300px" min-width="300px"  :src="eventsInfo.mainPhoto"></v-img>
        </v-col>
        <v-col cols md="7">
          <div v-if="existsToken">
          <v-btn absolute right top color="#298b7f" rounded icon x-large @click="Fav(eventsInfo._id)">
            <v-icon v-if="arrFav">mdi-heart</v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
          </v-btn>
          </div>
          <v-card-subtitle class="pb-0 mb-0 mt-4">{{eventsInfo.country}}, {{eventsInfo.city}}</v-card-subtitle>
          <v-card-title class="pb-0">{{eventsInfo.title}}</v-card-title>
          <div class="ml-3">
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
            ></v-rating>
          </div>
          <v-card-text class="text--primary">
            <div>
              <v-icon>mdi-arrow-right</v-icon>
              {{eventsInfo.workHours}} h/sem | <span v-for="(skill,idx) in eventsInfo.skillsRequired" :key="idx">{{skill.name}} | </span>
            </div>
            <div>
              <v-icon>mdi-arrow-left</v-icon>
              Al menos {{eventsInfo.minStay}} semanas | <span v-for="(offer,idx) in eventsInfo.offers" :key="idx">{{offer.name}} | </span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn  v-if="!existsToken" to="/signup" small outlined rounded color="#298B7F">
Contactar
              <v-icon class="ml-2">mdi-email</v-icon>
            </v-btn>
               <v-btn  v-else small outlined rounded color="#298B7F">Contactar
              <v-icon class="ml-2">mdi-email</v-icon>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn rounded color="black" dark small :to ="`event/${eventsInfo._id}`">Saber más</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import APIServices from '../services/Api'

export default {
  name: 'Event',
  data () {
    return {
      // PROPS RATING
      emptyIcon: 'mdi-star-outline',
      fullIcon: 'mdi-star',
      halfIcon: 'mdi-star-half-full',
      halfIncrements: true,
      length: 5,
      rating: 3.5,
      readonly: true,
      size: 28,
      dense: true,
      color: 'yellow',
      bgColor: 'black'
    }
  },
  props: {
    eventsInfo: Object,
    favList: Array
  },
  computed: {
    singleSkills: function () {
      return this.eventsInfo.skillsRequired.toString().replace(/,/g, ' | ')
    },
    existsToken () {
      return localStorage.getItem('token')
    },
    singleOffers: function () {
      return this.eventsInfo.offers.toString().replace(/,/g, ' | ')
    },
    arrFav () {
      return this.favList.map(e => e._id).includes(this.eventsInfo._id)
    }
  },
  methods: {
    async Fav (id) {
      const favObj = {
        favorite: id
      }
      if (this.arrFav) {
        await APIServices.deleteFavorite(id).then(response => console.log(response)).catch(error => console.log(error))
        console.log('DELETE')
        this.$emit('updateFavs')
      } else {
        await APIServices.addFavorites(favObj).then(response => console.log(response)).catch(error => console.log(error))
        console.log('ADD')
        this.$emit('updateFavs')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__text, .v-card__title {
  word-break: normal;

}

* {
  text-decoration-line: none;
  router-link{
    color: black !important;
  }
}
</style>
