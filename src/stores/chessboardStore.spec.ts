import { describe, expect, test, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useChessboardStore } from "@/stores/chessboardStore";

describe("useChessboardStore", () => {
  let store: ReturnType<typeof useChessboardStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useChessboardStore();
  });

  test("initializes selectedSquare with null values", () => {
    expect(store.selectedSquare.file).toBeNull();
    expect(store.selectedSquare.rank).toBeNull();
  });

  test("initializes history as an empty array", () => {
    expect(store.history).toHaveLength(0);
  });

  test("updates selectedSquare and history on selectSquare action", () => {
    store.selectSquare("a", "1");

    expect(store.selectedSquare.file).toBe("a");
    expect(store.selectedSquare.rank).toBe("1");

    expect(store.history).toHaveLength(1);
    expect(store.history[0].file).toBe("a");
    expect(store.history[0].rank).toBe("1");
  });
});
