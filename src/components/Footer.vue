<template>
  <footer class="container">
    <a class="text-dark m-1" href="https://t.me/idevmans" target="_blank">
      Разработал Aidiev Mansur &copy;
      <span>{{ startYear }} - {{ currentYear }}</span>
    </a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      startYear: 2019
    }
  }

}
</script>

<style scoped>

</style>