<template>
  <v-app>
    <v-toolbar app class="warning">
      <v-toolbar-side-icon @click="showdrawer = !showdrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline"> <!-- text-uppercase -->
        <span>YoLoSe</span>
        <span class="font-weight-light">App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success">
        <span>Ingresar</span>
      </v-btn>
      <v-btn class="error">
        <span>Salir</span>
      </v-btn>
      <!--
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
      -->
    </v-toolbar>

    <v-navigation-drawer app v-model="showdrawer" temporary dark>
      <v-toolbar-side-icon @click="showdrawer = !showdrawer"></v-toolbar-side-icon>
        <v-list class="pa-1">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider light></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.path"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer class="pa-3" dark>
      <v-spacer></v-spacer>
      <v-layout align-center>
        <v-flex>
          YoLoSe &copy; {{ new Date().getFullYear() }}
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
      showdrawer: false,
      items: [
        { title: 'Inicio', icon: 'dashboard', path: '/' },
        { title: 'Publicaciones', icon: 'dashboard', path: '/publicaciones' },
        { title: 'Cotizaciones', icon: 'dashboard', path: '/cotizaciones' },
        { title: 'Pendientes', icon: 'dashboard', path: '/pendientes' },
        { title: 'Facturas', icon: 'dashboard', path: '/faturas' },
        { title: 'Acerca de', icon: 'question_answer', path: '/about' }
      ]
    }
  }
}
</script>
