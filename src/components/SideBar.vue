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
</template>

<script setup lang="ts">
import { useChessboardStore } from "@/stores/chessboardStore";

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
  max-height: 917px;
  overflow-y: auto;

  @media (max-width: 1200px) {
    max-height: 724px;
  }
  @media (max-width: 992px) {
    max-height: 515px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 16px;
  }

  .reset-button {
    margin-bottom: 16px;
    padding: 8px 50px;
    background-color: #7fa650;
    box-shadow: 0px 5px 0px 0px #537133;
    color: $white;
    border: none;
    border-radius: 7px;
    font-weight: 700;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #95bb4a;
    }
  }

  h2:nth-of-type(2) {
    margin-top: 20px;
  }
}
</style>
