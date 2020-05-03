<template>
  <div>
    <v-container>

      <!-- Seccion de informacion -->
        <goBack></goBack>
      <v-row>
        <v-col>
          <v-card class outlined color="#FFFFFF">
            <v-row>
              <v-col cols md="7">
                <span class="d-flex">
                  <v-card-subtitle class="pb-0 mb-0"><h3>{{event.country}}, {{event.city}}</h3></v-card-subtitle>
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
                <v-card-title class="pb-7"><h2>
                  {{event.title}}
                  </h2> </v-card-title>

                <v-card-text class="text--primary">
                     {{event.description}}
                </v-card-text>
              </v-col>
              <v-col cols md="5" class="text-right">
                <v-btn small outlined rounded color="#298B7F" class="mb-5">
                  Contactar
                  <v-icon class="ml-1">mdi-phone</v-icon>
                </v-btn>
                <v-img min-height="300px" min-width="300px" :src="event.mainPhoto">
                  <v-btn absolute right top rounded icon x-large @click="isFav=!isFav">
                    <v-icon v-if="isFav">mdi-heart</v-icon>
                    <v-icon v-else>mdi-heart-outline</v-icon>
                  </v-btn>
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
<!-- Seccion de que necesita  -->
  <v-row>
<v-col>
  <v-card class outlined color="#FFFFFF">
    <v-row>
      <v-col>
<v-card-title>
<h2 >Qué necesita</h2>
</v-card-title>
<row class="d-flex">
<h3 v-for="(skill,idx) in event.skillsRequired" :key="idx" class="text-center mx-12 my-10"> 
  <v-icon size="60px" color="#298B7F">{{skill.icon}}</v-icon>
  <div>
  {{skill.title}}
  </div>
</h3>
</row>
      </v-col>
    </v-row>
</v-card>
</v-col>
  </v-row>
  <v-divider/>
    <v-row>
<v-col>
  <v-card class outlined color="#FFFFFF">
    <v-row>
      <v-col>
<v-card-title>
<h2 >Qué ofrece</h2>
</v-card-title>
<row class="d-flex">
<h3 v-for="(offer,idx) in event.offers" :key="idx" class="text-center mx-12 my-10"> 
  <v-icon size="60px" color="#298B7F">{{offer.icon}}</v-icon>
  <div>
  {{offer.title}}
  </div>
</h3>
</row>
      </v-col>
    </v-row>
</v-card>
</v-col>
  </v-row>

    </v-container>
  </div>
</template>

<script>
import APIServices from "../services/Api";
import goBack from "../components/Back.vue";

export default {
  data() {
    return {
      event: "",
      isFav: false,
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
    };
  },
  components: {
    goBack
  },
  created() {
    APIServices.getEvent(this.$route.params.id)
      .then(result => {
        this.event = result;
      })
      .catch(error => {
        console.log(error);
      });
  },
  
};
</script>

<style lang="scss" scoped>
.v-card__text, .v-card__title {
  word-break: normal;
}
h1, h2, h3 {
font-family: Quicksand, sans-serif;

}
</style>