import { defineStore } from "pinia";
import type { SelectedSquare, HistoryItem } from "@/interfaces";

export const useSelectedSquareStore = defineStore("selectedSquare", {
  state: () => ({
    // Initialize the selectedSquare state with null values for file and rank
    selectedSquare: {
      file: null,
      rank: null,
    } as SelectedSquare,
    // Initialize the history state as an empty array
    history: [] as HistoryItem[],
  }),

  actions: {
    // This is responsible for updating the selected square and the history.
    selectSquare(file: string, rank: string): void {
      this.selectedSquare = { file, rank };
      this.history.push({ file, rank });

      console.log(`Selected square: ${file}${rank}`);
      console.log(this.history);
    },
  },
});
