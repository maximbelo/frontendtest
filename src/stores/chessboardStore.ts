import { defineStore } from "pinia";
import type { SelectedSquare, HistoryItem } from "@/interfaces";
import { ref } from "vue";

export const useChessboardStore = defineStore("chessboard", () => {
  // Initialize the selectedSquare state with null values for file and rank
  const selectedSquare = ref<SelectedSquare>({
    file: null,
    rank: null,
  });

  // Initialize the history state as an empty array
  const history = ref<HistoryItem[]>([]);

  // This is responsible for updating the selected square and the history
  const selectSquare = (file: string, rank: string): void => {
    selectedSquare.value = { file, rank };
    history.value.push({ file, rank });
  };

  // Reset the states
  const reset = (): void => {
    selectedSquare.value = { file: null, rank: null };
    history.value = [];
  };

  return { selectedSquare, history, selectSquare, reset };
});
