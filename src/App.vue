<template>
  <router-view></router-view>
</template>

<script>
export default{
  watch: {
    $route (to, from) {
      this.$store.dispatch('alert/clear');
    }
  }
}
</script>
