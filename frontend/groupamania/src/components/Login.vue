<template>
  <div class="main">
    <v-toolbar
      dark
      prominent
      class="mb-16"
      src="../../public/images/icon-left-font.png"
    >
    </v-toolbar>
    <h1 class="text-center">Bienvenue sur notre réseau social</h1>
    <v-form class="login" v-model="valid">
      <v-sheet
        class="d-flex justify-center flex-column rounded-xl mt-16 mb-16 pa-8"
        elevation="7"
        width="400px"
      >
        <div>
          <h2 class="text-center mb-6">Connectez-vous</h2>
        </div>
        <v-row class="d-flex justify-center flex-column">
          <v-col>
            <v-text-field
              v-model="userName"
              :rules="userNameRules"
              label="Username"
              required
            ></v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="4-80 caractères, 1 Maj, 1 Min, pas d'espaces"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <p id="login_aide"></p>
          <v-btn @click="connection" type="submit" class="ma-7 white--text" elevation='7' height='45px' width='300px' color="#fd2d01"> CONNEXION </v-btn>
        </v-row>
      </v-sheet>
    </v-form>
    <p class="question text-center font-weight-medium">
      Vous n'êtes pas encore inscrit ?
    </p>
    <div class="text-center mb-16">
      <v-btn type="submit" class="ma-7 white--text" elevation='7' height='45px' width='300px' color="#fd2d01"> Créer un compte </v-btn>
    </div>
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      color='#fd2d01'
      class="white--text text-center"
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
        Notre entreprise, spécialisée dans la grande distribution, est en pleine expansion. Nous avons actuellement plus de 600 collaborateurs et avons beaucoup recruté depuis quelques années. Nous étions uniquement 300 il y a 3 ans.
 
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
  name: "LoginComp",

  data: () => ({
    valid: false,
    userName: "",
    userNameRules: [
      (v) => !!v || "Username requis",
    ],
    show1: false,
    password: "",
    rules: {
      required: (value) => !!value || "Requis.",
      min: (v) => v.length >= 4 || "Min 4 caractères",
      emailMatch: () => `The email and password you entered don't match`,
    },
    icons: [
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
  methods: {

    connection(e) {
      e.preventDefault()
      if (this.password === "" || this. userName === "") {
        return (document.querySelector("#login_aide").innerHTML = "Veuillez renseigner les champs")
      }
    }
  }
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
}
.title {
  color: rgb(22, 49, 107);
}

.question {
  font-size: 21px;
}

</style>