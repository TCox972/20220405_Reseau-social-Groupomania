<template>
  <v-footer class="footer">
    <v-card
      flat
      tile
      color="transparent"
      class="white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 red--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="red--text">
        {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComp",
  data () {
      return {
           icons: ["mdi-linkedin", "mdi-instagram"],
      }
  }

};
</script>