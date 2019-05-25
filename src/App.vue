<template>
  <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/publicaciones'>Register</router-link>
        <router-link to='/login'>Login</router-link>
    </nav>
    <router-view/>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
