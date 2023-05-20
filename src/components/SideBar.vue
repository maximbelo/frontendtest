<template>
  <aside class="sidebar">
    <button class="reset-button" @click="reset">Reset</button>
    <h2>Selected square:</h2>
    <p>{{ store.selectedSquare.file }}{{ store.selectedSquare.rank }}</p>

    <h2>Selected history:</h2>
    <ul>
      <li v-for="(item, index) in store.history" :key="index">
        {{ index + 1 }}. {{ item.file }}{{ item.rank }}
      </li>
    </ul>
  </aside>
  <!-- ./sidebar -->
</template>

<script setup lang="ts">
import { useChessboardStore } from "@/stores/chessboardStore";

// Reset the selected square and history
const reset = (): void => {
  store.reset();
};

const store = useChessboardStore();
</script>

<style lang="scss" scoped>
@import "@/assets/abstracts/vars";
.sidebar {
  text-align: center;
  border: 1px solid $white;
  border-radius: 6px;
  margin-left: 16px;
  padding: 18px;
  overflow-y: auto;
  max-height: min(74vw, 900px);
  min-width: 200px;

  @media (max-width: 768px) {
    max-height: 515px;
    min-width: 88%;
    margin-left: 0;
    margin-top: 16px;
  }

  h2 {
    margin-bottom: 16px;
  }

  ul {
    display: grid;
    grid-template-columns: 80px 80px;
    justify-content: center;

    li {
      margin-bottom: 1px;
    }
  }

  .reset-button {
    margin-bottom: 16px;
    padding: 8px 50px;
    background-color: $cucumber;
    box-shadow: 0px 5px 0px 0px $muddyGreen;
    color: $white;
    border: none;
    border-radius: 7px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: $peaGreen;
    }
  }

  h2:nth-of-type(2) {
    margin-top: 20px;
  }
}
</style>
