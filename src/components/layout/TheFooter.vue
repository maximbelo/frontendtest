<template>
  <footer>
    <div class="container">
      <p>
        &copy;
        {{ copyright }}
        maxim.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const copyright = ref<number>(new Date().getFullYear());
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

p {
  text-align: center;
}
</style>
