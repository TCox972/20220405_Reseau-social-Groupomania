<template>
  <div>
    
    <h1 class="text-center pb-16">Rejoignez-nous sur notre plateforme</h1>

    <v-card class="mx-auto mb-16 pa-4" style="max-width: 500px">
      <h2 class="text-center pa-5">Inscrivez-vous</h2>
      <v-divider color="#fd2d01"></v-divider>
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          filled
          color="blue"
          label="Email"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="username"
          :rules="[
            rules.required,
            rules.minUsername,
            rules.maxUsername,
            rules.nospace,
          ]"
          filled
          hint="3-20 Caractères, Pas d'espace"
          color="blue"
          label="Nom d'utilisateur"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[
            rules.required,
            rules.minPassword,
            rules.maxPassword,
            rules.uppercase,
            rules.nospace,
          ]"
          filled
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          hint="4-80 Caractères, 1 Maj, Pas d'espace"
          color="blue"
          label="Mot de passe"
          style="min-height: 96px"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-textarea
          v-model="biography"
          auto-grow
          filled
          color="blue"
          label="Biographie"
          rows="6"
        ></v-textarea>
      </v-form>

      <v-divider color="#fd2d01"></v-divider>

      <v-card-actions class="d-flex justify-center">
        <router-link class="link" to="/">
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            class="ma-7 white--text"
            elevation="7"
            height="45px"
            width="200px"
            color="#fd2d01"
            @click="inscription"
          >
            S'INSCRIRE
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    <v-footer dark padless>
      <v-card
        flat
        tile
        color="#fd2d01"
        class="white--text text-center"
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Notre entreprise, spécialisée dans la grande distribution, est en
          pleine expansion. Nous avons actuellement plus de 600 collaborateurs
          et avons beaucoup recruté depuis quelques années. Nous étions
          uniquement 300 il y a 3 ans.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "SignupComp",
  data: () => ({
    biography: "",
    email: "",
    form: false,
    isLoading: false,
    password: "",
    show1: false,
    username: "",
    rules: {
      email: (v) =>
        !!(v || "").match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) || "Please enter a valid email",
      required: (value) => !!value || "Requis",
      minUsername: (v) => v.length >= 3 || "Min 3 caractères",
      maxUsername: (v) => v.length <= 20 || "Max 20 caractères",
      minPassword: (v) => v.length >= 4 || "Min 4 caractères",
      maxPassword: (v) => v.length <= 80 || "Max 80 caractères",
      uppercase: (v) => /[A-Z]/.test(v) || "Majuscule obligatoire",
      nospace: (v) => !/\s/g.test(v) || "Pas d'espace",
    },
    icons: ["mdi-linkedin", "mdi-instagram"],
  }),

  methods: {
    inscription() {
      fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          username: this.username,
          password: this.password,
          biography: this.biography,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.message);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.link{
  text-decoration: none;
}
</style>