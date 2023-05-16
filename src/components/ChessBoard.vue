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

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"].reverse();

const selectSquare = (file: string, rank: string): void => {
  // When a user clicks on the square, this calls the selectSquare action in the Pinia store to update the selected square state.
  store.selectSquare(file, rank);
};

const getSquareClass = (file: string, rank: string): string => {
  // Determine if the square is a light square based on its position on the board.
  const isLightSquare = (files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0;

  // Return the appropriate class based on whether it's a light or dark square.
  return isLightSquare ? "square dark" : "square light";
};
</script>

<style lang="scss" scoped>
.chessboard {
  width: 100%;
}

.rank {
  display: flex;
}

.square {
  width: 70px;
  height: 70px;
}

.square.dark {
  background-color: #b58863;
}

.square.light {
  background-color: #f0d9b5;
}
</style>
