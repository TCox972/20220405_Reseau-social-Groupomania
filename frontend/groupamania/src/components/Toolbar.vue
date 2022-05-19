<template>
  <v-card class="overflow-hidden">
    <v-app-bar height="60px" color="white" elevate-on-scroll>
      <router-link class="link" to="/mur">
        <v-img
          max-height="60"
          max-width="160"
          class="ml-10"
          src="../../public/images/icon-left-font-monochrome-black.png"
        ></v-img>
      </router-link>

      <v-spacer></v-spacer>

      <div class="nav">
        <router-link class="link" to="/mur">
          <v-btn icon>
            <v-icon x-large color="#fd2d01">mdi-home</v-icon>
          </v-btn>
        </router-link>
        <router-link class="link" to="/account">
          <v-btn icon>
            <v-icon x-large color="#fd2d01">mdi-account-circle</v-icon>
          </v-btn>
        </router-link>
        <router-link class="link" to="/">
          <v-btn icon>
            <v-icon @click="disconnect" x-large color="#fd2d01"
              >mdi-logout</v-icon
            >
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "ToolbarComp",

  methods: {
    disconnect() {
      this.$store.commit("LOGOUT");
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-around;
  margin-right: 3%;
  width: 200px;
}
</style>