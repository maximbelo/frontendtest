<template>
  <div class="chessboard">
    <div v-for="rank in ranks" :key="rank" class="rank">
      <div
        v-for="file in files"
        :key="file"
        :class="getSquareClass(file, rank)"
        @click="selectSquare(file, rank)"
      >
        <p v-if="rank === '1'" class="ranks-display">
          {{ file }}
        </p>
        <!-- Display the ranks on the bottom squares -->
        <p v-if="file === 'a'" class="files-display">
          {{ rank }}
        </p>
        <!-- Display the files on the far left squares -->
      </div>
      <!-- Render files (cols) inside the ranks -->
    </div>
    <!-- Render ranks (rows) -->
  </div>
  <!-- ./chessboard -->
</template>

<script setup lang="ts">
import { useChessboardStore } from "@/stores/chessboardStore";

const store = useChessboardStore();

// Our chessboard
const files: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"].reverse();

const selectSquare = (file: string, rank: string): void => {
  // When a user clicks on the square, this calls the selectSquare action in the Pinia store to update the selected square state
  store.selectSquare(file, rank);
};

const getSquareClass = (file: string, rank: string): string => {
  // Determine if the square is a light square based on its position on the board
  const isDarkSquare = (files.indexOf(file) + 1 + ranks.indexOf(rank)) % 2 === 0;

  // Check if the square is the selected square
  const isSelectedSquare = file === store.selectedSquare.file && rank === store.selectedSquare.rank;

  // Generate the appropriate CSS class for the square
  const squareClass = isDarkSquare ? "square dark" : "square light";

  // Add the "highlighted" class if the square is selected
  return isSelectedSquare ? `${squareClass} highlighted` : squareClass;
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
    position: relative;
    width: calc(100% / 8);
    padding-bottom: calc(100% / 8);
    cursor: pointer;
  }

  .dark {
    background-color: $tan;

    .files-display,
    .ranks-display {
      color: $wheat;
    }
  }

  .light {
    background-color: $wheat;

    .files-display,
    .ranks-display {
      color: $tan;
    }
  }

  .ranks-display {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }

  .files-display {
    position: absolute;
    top: 4px;
    left: 4px;
  }

  .highlighted {
    background-color: $yellow;
  }
}
</style>
