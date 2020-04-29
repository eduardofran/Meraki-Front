<template>
  <div>
<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src= eventsInfo.mainPhoto
    >
      <v-card-title>{{eventsInfo.title}}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">{{eventsInfo.country}}, {{eventsInfo.city}}</v-card-subtitle>
    <v-card-text class="text--primary">
     
      <div>{{eventsInfo.workHours}} h/sem | {{singleSkills}}</div>
      <div>Al menos {{eventsInfo.minStay}} semanas | {{singleOffers}}</div>

    </v-card-text>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>
      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
  export default {
    name: "Event",
    props:{
      eventsInfo: Object
    },
    computed: {
      singleSkills: function (){
        return this.eventsInfo.skillsRequired.toString().replace(/,/g, ' | ')
      },
      singleOffers: function (){
        return this.eventsInfo.offers.toString().replace(/,/g, ' | ')
      }
    }

  }

</script>

<style lang="scss" scoped>

</style>