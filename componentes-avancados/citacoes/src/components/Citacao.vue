<template>
  <div class="citacao">
    <template v-slot:teste></template>
    <slot name="autor">Autor não informado</slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
</template>

<script>
export default {
  props: {
    citacao: {
      type: String
    },
    titulo: {
      type: String
    }
  }
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}

h1 {
  color: red;
}
</style>
