<template>
<div>
  <router-link :to="`/event/${favInfo._id}`">
    <v-card class="mx-2 my-2" max-width="280" outlined color="#FFFFFF">
      <v-row>
        <v-col>
          <v-img height="180px" min-width="200px"  :src="favInfo.mainPhoto"></v-img>
        </v-col>
        <v-col>
          <div v-if="existsToken">
          <v-btn absolute right top rounded color="#298b7f" icon x-large @click.prevent="deleteFavorite">
            <v-icon v-if="isFav">mdi-heart</v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
          </v-btn>
          </div>
          <v-card-subtitle class="mt-3 ml-3">{{favInfo.country}}, {{favInfo.city}}</v-card-subtitle>
          <v-card-title class="mt-1 ml-3">{{favInfo.title}}</v-card-title>
        </v-col>
      </v-row>
    </v-card>

  </router-link>
  </div>
</template>

<script>
import APIServices from '../services/Api'

export default {
  name: 'FavEvent',
  data () {
    return {
      isFav: true
    }
  },
  props: {
    favInfo: Object
  },
  computed: {
    existsToken () {
      return localStorage.getItem('token')
    }
  },
  methods: {
    async deleteFavorite () {
      const eventId = this.favInfo._id
      await APIServices.deleteFavorite(eventId).then(response => console.log(response)).catch(error => console.log(error))
      this.$emit('updateFavs')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__text, .v-card__title {
  word-break: normal;
}
*{
  margin: 0px !important;
  padding: 0px !important;
  text-decoration-line: none;
}
</style>
