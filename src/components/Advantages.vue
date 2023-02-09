<template>
  <section id="section2">
    <div class="container d-flex justify-content-between align-items-center mb-4 mt-4">
      <div class="d-flex flex-column align-items-center text-dark justify-content-center">
        <div class="section-two-item-img d-flex align-items-center justify-content-center"><img
            alt="" src="assets/img/w1.png"></div>
        <div class="text-dark mt-2">Качество древесины,<br> и честный объем</div>
      </div>
    </div>
    <div class="container">
      <hr>
    </div>
  </section>
</template>

<script>
export default {
  name: "Advantages",
  props: {
    advantages: {
      type: Array | Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>