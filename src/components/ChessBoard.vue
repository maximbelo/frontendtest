<template>
  <div class="chessboard">
    <div v-for="rank in ranks" :key="rank" class="rank">
      <div
        v-for="file in files"
        :key="file"
        :class="getSquareClass(file, rank)"
        @click="selectSquare(file, rank)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSelectedSquareStore } from "@/stores/selectedSquare";

const store = useSelectedSquareStore();

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"].reverse();

const selectSquare = (file: string, rank: string): void => {
  store.selectSquare(file, rank);
};

const getSquareClass = (file: string, rank: string): string => {
  const isLightSquare = (files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0;
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
