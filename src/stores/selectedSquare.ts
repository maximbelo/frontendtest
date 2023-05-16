import { defineStore } from "pinia";
import type { SelectedSquare, HistoryItem } from "@/types";

export const useSelectedSquareStore = defineStore("selectedSquare", {
  state: () => ({
    selectedSquare: {
      file: null,
      rank: null,
    } as SelectedSquare,
    history: [] as HistoryItem[],
  }),
  actions: {
    selectSquare(file: string, rank: string): void {
      this.selectedSquare = { file, rank };
      this.history.push({ file, rank });
      console.log(`Selected square: ${file}${rank}`);
      console.log(this.history);
    },
  },
});
