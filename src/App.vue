<template>
  <div id="app" class="full-width">
    <page-header></page-header>
    <router-view/>
  </div>
</template>

<script>
import pageHeader from './components/page-header.vue'
export default {
  name: 'App',
  components: {
    pageHeader
  }
}
</script>

<style lang="scss">
@import "style/app.scss"
</style>
