<template>
  <div>
    <v-card class="mx-auto my-5" max-width="800" outlined color="#FFFFFF">
      <v-row>
        <v-col cols="5">
          <v-img class height="300px" width="300px" :src="eventsInfo.mainPhoto"></v-img>
        </v-col>
        <v-col cols="7">
          <v-btn absolute right top rounded icon x-large @click="isFav=!isFav">
            <v-icon v-if="isFav">mdi-heart</v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
          </v-btn>
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
              :hover="hover"
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
              {{eventsInfo.workHours}} h/sem | {{singleSkills}}
            </div>
            <div>
              <v-icon>mdi-arrow-left</v-icon>
              Al menos {{eventsInfo.minStay}} semanas | {{singleOffers}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="Contac" small outlined rounded color="#298B7F">
              Contactar
              <v-icon class="ml-1">mdi-phone</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded color="black" dark small>Saber más</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      isFav: false,
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
      bgColor: 'black',
    };
  },
  props: {
    eventsInfo: Object
  },
  computed: {
    singleSkills: function() {
      return this.eventsInfo.skillsRequired.toString().replace(/,/g, " | ");
    },
    singleOffers: function() {
      return this.eventsInfo.offers.toString().replace(/,/g, " | ");
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card__text, .v-card__title {
  word-break: normal;
}
</style>