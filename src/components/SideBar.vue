<template>
  <aside class="sidebar">
    <h2>Selected square:</h2>
    <p>{{ store.selectedSquare.file }}{{ store.selectedSquare.rank }}</p>

    <h2>Selected history:</h2>
    <ul>
      <li v-for="item in store.history" :key="item.file + item.rank">
        {{ item.file }}{{ item.rank }}
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useSelectedSquareStore } from "@/stores/selectedSquare";

const store = useSelectedSquareStore();
</script>

<style lang="scss" scoped></style>
