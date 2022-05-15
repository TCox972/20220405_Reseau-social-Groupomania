<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      height="60px"
      color="white"
      elevate-on-scroll
    >
      <router-link to="/mur">
        <v-img
          max-height="60"
          max-width="160"
          class="ml-10"
          src="../../public/images/icon-left-font-monochrome-black.png"
        ></v-img>
      </router-link>

      <v-spacer></v-spacer>

      <div class="nav">
        <v-btn icon>
          <v-icon x-large color="#fd2d01">mdi-home</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon x-large color="#fd2d01">mdi-account-circle</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon x-large color="#fd2d01">mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "ToolbarComp",
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  margin-right: 3%;
  width: 200px;
}
</style>