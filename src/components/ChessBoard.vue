<template>
  <div class="chessboard">
    <!-- Render ranks (rows) -->
    <div v-for="rank in ranks" :key="rank" class="rank">
      <!-- Render files (cols) inside the ranks -->
      <div
        v-for="file in files"
        :key="file"
        :class="getSquareClass(file, rank)"
        @click="selectSquare(file, rank)"
      ></div>
    </div>
  </div>
  <!-- ./chessboard -->
</template>

<script setup lang="ts">
import { useSelectedSquareStore } from "@/stores/selectedSquare";

const store = useSelectedSquareStore();

// Our chessboard
const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"].reverse();

const selectSquare = (file: string, rank: string): void => {
  // When a user clicks on the square, this calls the selectSquare action in the Pinia store to update the selected square state
  store.selectSquare(file, rank);
};

const getSquareClass = (file: string, rank: string): string => {
  // Determine if the square is a light square based on its position on the board
  const isDarkSquare = (files.indexOf(file) + 1 + ranks.indexOf(rank)) % 2 === 0;

  // Check if the square is the currently selected square from the store
  const isSelectedSquare = file === store.selectedSquare.file && rank === store.selectedSquare.rank;

  // Generate the appropriate CSS class for the square
  return isDarkSquare
    ? "square dark" + (isSelectedSquare ? " highlighted" : "")
    : "square light" + (isSelectedSquare ? " highlighted" : "");
};
</script>

<style lang="scss" scoped>
@import "@/assets/abstracts/vars";
.chessboard {
  width: 100%;

  .rank {
    display: flex;
  }

  .square {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .dark {
    background-color: $mushroom;
  }

  .light {
    background-color: $almond;
  }

  .highlighted {
    background-color: $yellow;
  }
}
</style>
