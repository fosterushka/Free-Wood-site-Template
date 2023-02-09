<template>
  <button class="btn btn-primary" data-bs-target="{{selector}}" data-bs-toggle="modal" type="button">{{ title }}
  </button>
</template>

<script>
export default {
  name: "ButtonPopUp",
  props: {
    title: {
      type: String,
      required: false,
      default: "Узнать цену"
    },
    selector: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>