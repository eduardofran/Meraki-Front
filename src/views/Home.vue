<template>
  <div>
    <v-container class="mt-12">
      <v-row class="mt-6" align="end">
        <v-card color="#7FCBAF" class="rounded">
          <v-row class align="end">
            <v-col cols md="6" align-self="center">
              <v-card-title class="my-4 ml-12 py-4">
                <h2>Viaja. Explora. Ayuda.</h2>
              </v-card-title>
              <v-card-subtitle class="mt-4 ml-12 fcolor">
                <h2>
                  Meraki es hacer algo con amor y creatividad, poniendo toda tu alma en ello.
                  <br />
                  <br />Aquí encontrarás la posibilidad de dar y recibir ayuda de forma sencilla al mismo tiempo que descubres todos los rincones del planeta.
                </h2>
              </v-card-subtitle>
            </v-col>
            <v-col cols="6" md="6" class="margin ml-auto">
              <v-img class="logo" src="../assets/merakihome.png"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row class="mt-8">
        <v-col>
          <v-card class outlined color="#FFFFFF">
            <v-row>
              <v-col>
                <v-card-title>
                  <h1>
                    Busca quién necesita ayuda
                    <br />en tu próximo destino
                  </h1>
                </v-card-title>
                <v-toolbar dark color="white" class="roundedSearch mt-8">
                  <v-text-field
                    class="mx-4"
                    flat
                    :maxlength="max"
                    v-model="places"
                    label="Buscar por país o ciudad"
                    @keyup.enter="searchPlace"
                    hide-no-data
                    hide-details
                    solo
                    light
                  ></v-text-field>
                  <v-btn color="#298B7F" @click="searchPlace">Buscar</v-btn>
                </v-toolbar>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <v-row class="mt-8">
        <v-col>
          <v-card class="" outlined color="#FAFAFA">
            <v-row>
              <v-col>
                <v-card-title class="my-5 ml-5">
                  <h2>El camino más largo comienza con un paso...</h2>
                </v-card-title>
                <v-row class="px-8">
                  <v-col cols md="4">
                    <router-link to="/events?s=5eb33e20e5d0ba412e2034a7">
                      <v-card class="mx-2 my-2" color="#FFFFFF">
                        <v-row>
                          <v-col class="py-0">
                            <v-img
                              height="auto"
                              min-width="200px"
                              src="https://images.unsplash.com/photo-1583511666407-5f06533f2113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
                            ></v-img>
                          </v-col>
                          <v-col>
                            <v-card-title>
                              <h4>Para los amantes de los animales</h4>
                            </v-card-title>
                            <v-card-subtitle
                              class="color"
                            >Ayuda a cuidar, alimentar, pasear, bañar, sanar...¡Todo lo relacionado con la fauna!</v-card-subtitle>
                            <v-card-text class="text-right">
                              <strong>Ver todos&gt;</strong>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-card>
                    </router-link>
                  </v-col>
                  <v-col cols md="4">
                    <router-link to="/events?s=5eb33e20e5d0ba412e2034a3">
                      <v-card class="mx-2 my-2" color="#FFFFFF">
                        <v-row>
                          <v-col class="py-0">
                            <v-img
                              height="auto"
                              min-width="200px"
                              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                            ></v-img>
                          </v-col>
                          <v-col>
                            <v-card-title>
                              <h4>Para aventureros tecnólogicos</h4>
                            </v-card-title>
                            <v-card-subtitle
                              class="color"
                            >Intercambia tus habilidades de desarrollo y programación.</v-card-subtitle>
                            <v-card-text class="text-right">
                              <strong>Ver todos&gt;</strong>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-card>
                    </router-link>
                  </v-col>
                  <v-col cols md="4">
                    <router-link to="/events?s=5eb33e20e5d0ba412e2034a1">
                      <v-card class="mx-2 mt-2 mb-12" color="#FFFFFF">
                        <v-row>
                          <v-col class="py-0">
                            <v-img
                              height="auto"
                              min-width="200px"
                              src="https://images.unsplash.com/photo-1536584754829-12214d404f32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                            ></v-img>
                          </v-col>
                          <v-col>
                            <v-card-title>
                              <h4>
                                Para organizadores
                                <br />natos
                              </h4>
                            </v-card-title>
                            <v-card-subtitle
                              class="color"
                            >En estos lugares necesitan a alguien para poner orden con una sonrisa en la cara.</v-card-subtitle>
                            <v-card-text class="text-right">
                              <strong>Ver todos&gt;</strong>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-card>
                    </router-link>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-8 mb-6">
        <v-col>
          <v-card outlined color="#FFFFFF">
            <v-row>
              <v-col>
                <v-card-title class="mb-2 ml-5">
                  <h2>
                    Estos son los destinos mejor
                    <br />valorados por gente como tu
                  </h2>
                </v-card-title>
                <v-row class="px-8">
                  <v-col cols md="3">
                    <router-link :to="`/event/${card1._id}`">
                      <v-card class="mx-2 my-2" color="#FFFFFF">
                        <v-row>
                          <v-col class="py-0">
                            <v-img height="auto" min-width="200px" :src="card1.mainPhoto"></v-img>
                          </v-col>
                          <v-col>
                            <v-card-subtitle class="color py-0"><v-icon color= "yellow">mdi-star</v-icon>5 | {{card1.city}}, {{card1.country}}</v-card-subtitle>
                            <v-card-title class="py-0">
                              <h5>{{card1.title}}</h5>
                            </v-card-title>
                            <v-card-text class="text-right">
                              <strong>Ver todos&gt;</strong>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-card>
                    </router-link>
                  </v-col>
                  <v-col cols md="3">
                    <router-link :to="`/event/${card2._id}`">
                      <v-card class="mx-2 my-2" color="#FFFFFF">
                        <v-row>
                          <v-col class="py-0">
                            <v-img height="150px" min-width="200px" :src="card2.mainPhoto"></v-img>
                          </v-col>
                          <v-col>
                            <v-card-subtitle class="color py-0"><v-icon color= "yellow">mdi-star</v-icon>4.9 | {{card2.city}}, {{card2.country}}</v-card-subtitle>
                            <v-card-title class="py-0">
                              <h5>{{card2.title}}</h5>
                            </v-card-title>
                            <v-card-text class="text-right mt-9 ">
                              <strong>Ver todos&gt;</strong>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-card>
                    </router-link>
                  </v-col>
                  <v-col cols md="3">
                    <router-link :to="`/event/${card3._id}`">
                      <v-card class="mx-2 my-2" color="#FFFFFF">
                        <v-row>
                          <v-col class="py-0">
                            <v-img height="auto" min-width="200px" :src="card3.mainPhoto"></v-img>
                          </v-col>
                          <v-col>
                            <v-card-subtitle class="color py-0"><v-icon color= "yellow">mdi-star</v-icon>4.8 | {{card3.city}}, {{card3.country}}</v-card-subtitle>
                            <v-card-title class="py-0">
                              <h5>{{card3.title}}</h5>
                            </v-card-title>
                            <v-card-text class="text-right mt-9">
                              <strong>Ver todos&gt;</strong>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-card>
                    </router-link>
                  </v-col>
                  <v-col cols md="3">
                    <router-link :to="`/event/${card4._id}`">
                      <v-card class="mx-2 my-2" color="#FFFFFF">
                        <v-row>
                          <v-col class="py-0">
                            <v-img height="auto" min-width="200px" :src="card4.mainPhoto"></v-img>
                          </v-col>
                          <v-col>
                            <v-card-subtitle class="color py-0"><v-icon color= "yellow" >mdi-star</v-icon>4.5 | {{card4.city}}, {{card4.country}}</v-card-subtitle>
                            <v-card-title class="py-0">
                              <h5>{{card4.title}}</h5>
                            </v-card-title>
                            <v-card-text class="text-right mt-9">
                              <strong>Ver todos&gt;</strong>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-card>
                    </router-link>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
       <VueElevator class='elevator' :word='word' :duration='duration' :mainAudio='mainAudio' :endAudio='endAudio' ></VueElevator>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import APIServices from '../services/Api'
import { VueElevator } from 'vue-elevator'

export default {
  name: 'Home',
  data () {
    return {
      places: '',
      max: 20,
      card1: {},
      card2: {},
      card3: {},
      card4: {},
      word: '',
      duration: 10000,
      mainAudio: 'http://tholman.com/elevator.js/music/elevator.mp3',
      endAudio: 'http://tholman.com/elevator.js/music/ding.mp3'
    }
  },
  methods: {
    searchPlace () {
      this.$router.push(`/events?p=${this.places}`)
    }
  },
  async created () {
    this.card1 = await APIServices.getEvent('5eb33e20e5d0ba412e2034b5')
    this.card2 = await APIServices.getEvent('5eb33e20e5d0ba412e2034b3')
    this.card3 = await APIServices.getEvent('5eb33e21e5d0ba412e2034b9')
    this.card4 = await APIServices.getEvent('5eb33e21e5d0ba412e2034b8')
  },
  components: {
    VueElevator

  }
}

</script>
<style lang="scss" scoped>
* {
  font-family: "Quicksand", sans-serif;
  text-decoration-line: none;
}
.fcolor h2 {
  color: white;
}
.rounded {
  border-radius: 50px !important;
}
.logo {
  border-radius: 50px;
  bottom: 0px;
}
.margin {
  padding-bottom: 0px !important;
}
.roundedSearch {
  border-radius: 10px !important;
}
.v-card__text,
.v-card__title {
  word-break: normal;
}
h1 {
  line-height: 1.2;
}
.color {
  color: #298b7f !important;
}
h5{
  line-height: 1.2;

}
.elevator{
//   position: absolute;
//   right:0;
  margin: 50px 0;
}

</style>
