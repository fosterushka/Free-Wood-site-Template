<template>
  <nav class="navbar sticky-top navbar-dark bg-dark">
    <div class="container">
      <p class="navbar-brand mb-0">Доставка дров в {{ cityName }}</p>
      <a :href="`tel:${phone}`">
        <button class="btn btn-light" type="button">Узнать информацию</button>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  props: {
    phone: {
      type: Number,
      required: true
    },
    cityName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>