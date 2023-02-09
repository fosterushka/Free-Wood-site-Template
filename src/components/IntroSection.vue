<template>
  <section class="section-one">
    <div class="container d-flex justify-content-center flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-white">
          <h1>ПРОДАЖА ДРОВ С ДОСТАВКОЙ</h1>
          <h2>В ГОРОДЕ {{ cityName }}</h2>
          <a href="#section3">
            <button class="btn btn-light btn-lg" type="button">НАШ АССОРТИМЕНТ</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroSection",
  props: {
    cityName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>