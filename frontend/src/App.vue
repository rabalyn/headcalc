<template>
  <div>
    <b-container id="app">
      <b-navbar
        id="nav"
        toggleable="lg"
        type="dark"
        variant="dark"
      >
        <b-navbar-brand
          to="/"
          exact
        >Kopfrechner</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse-routes"></b-navbar-toggle>

      </b-navbar>
      <router-view />

      <hr />

      <Footer />
    </b-container>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
