<template>
  <div class="bg">
    <Navbar></Navbar>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="7" lg="5">
            <h1 class="mt-12">¡Bienvenido a Meraki!</h1>
            <br />
            <h2>Nos alegra que hayas llegado hasta aquí, ¡eso significa que estás a punto de comenzar una nueva aventura!</h2>
          </v-col>
          <v-col cols="12" sm="8" md="7" lg="5" >
            <v-card
              min-width="300px"
              class="mt-12 mx-auto pa-2 text-center"
              color="rgba(255, 255, 255, 0.75)"
            >
              <v-card-text class="py-0">
                <v-form>
                  <v-text-field
                    label="Nombre"
                    v-model="username"
                    :rules="userRules"
                    background-color="#FAFAFA"
                  ></v-text-field>

                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    background-color="#FAFAFA"
                  ></v-text-field>

                  <v-text-field
                    label="Contraseña"
                    v-model="userPassword"
                    :type="showPassword ? 'text' : 'password'"
                    :rules="passwordRule"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    background-color="#FAFAFA"
                  ></v-text-field>
                  <v-autocomplete
                    v-model="country"
                    :loading="loading"
                    :items="countriesValues"
                    :search-input.sync="search"
                    :rules="countryRules"
                    flat
                    label="País"
                    background-color="#FAFAFA"
                  ></v-autocomplete>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Fecha de nacimiento"
                        readonly
                        v-on="on"
                        background-color="#FAFAFA"
                        append-icon="mdi-calendar"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="date"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn class="button" color="#298B7F" dark block @click="signup">Registrarme</v-btn>
              </v-card-actions>
              <v-text class="caption">
                ¿Ya tienes cuenta?
                <router-link class="color" to="/login">Accede a tu perfil aquí</router-link>
              </v-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import APIServices from "../services/Api";
import Navbar from "../components/Navbar.vue";
import countries from "../assets/countries.json";

export default {
  data() {
    return {
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "La contraseña es obligatoria",
        v =>
          v.length >= 6 || "La contraseña debe contener al menos 6 caracteres"
      ],
      username: "",
      userRules: [v => !!v || "Es necesario el nombre"],
      email: "",
      emailRules: [
        v => !!v || "El email es necesario",
        v => /.+@.+\..+/.test(v) || "Formato de email incorrecto"
      ],
      countries,
      country: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      countryRules: [v => !!v || "Selecciona tu país de residencia"],
      date: null,
      menu: false
    };
  },
  components: {
    Navbar
  },
  computed: {
    countriesValues() {
      return Object.values(countries);
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    signup() {
      const newUser = {
        name: this.username,
        email: this.email,
        password: this.userPassword,
        country: this.country,
        birthday: this.date
      };
      APIServices.signup(newUser)
        .then(response => {
          localStorage.setItem("token", response.token);
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
}
.color {
  color: #298b7f;
}
</style>
