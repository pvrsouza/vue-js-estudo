<template>
  <div class="citacao">{{citacao}}</div>
</template>

<script>
export default {
  props: {
    citacao: {
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
</style>
