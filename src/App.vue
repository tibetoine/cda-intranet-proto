<template>
  <div id="app">
    <v-app id="inspire">
      <v-dialog v-model="showUpdateUI" max-width="290">
        <v-card>
          <v-card-title class="headline">Mise à jour détectée</v-card-title>

          <v-card-text>Une mise à jour de l'application a été détectée, nous vous invitons à la mettre à jour.</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn small color="error" @click="dialog = false">Annuler</v-btn>

            <v-btn small color="success" @click="update">Mettre à jour</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <template v-for="item in menuItems">
            <v-list-item link v-bind:key="item.path" :to="item.path">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app dark color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Intranet - Chantier de l'atlantique - v0.1.8</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
      <!-- <v-footer color="indigo" app>
        <span class="white--text">&copy; Chantiers de l'atlantique - {{ new Date().getFullYear() }}</span>
      </v-footer> -->
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    showUpdateUI: false,
    menuItems: [
      { icon: "mdi-home", path: "/home", text: "home" },
      { icon: "mdi-view-grid", path: "/cards", text: "Cartes" },
    ],
  }),
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        // console.log(' workbox waiting reach. Je showUpdateUI = true')
        this.showUpdateUI = true
        // console.log('je devrais voir la console')

      })
    }
  },
  methods: {
    async update() {
      this.showUpdateUI = false
      await this.$workbox.messageSW({ type: "SKIP_WAITING" })
    },
  },
};
</script>

