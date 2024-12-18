import { describe, expect, test, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useChessboardStore } from "@/stores/chessboardStore";

describe("useChessboardStore tests", () => {
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

  test("updates selectedSquare and history when selectSquare is called", () => {
    store.selectSquare("a", "1");

    expect(store.selectedSquare.file).toBe("a");
    expect(store.selectedSquare.rank).toBe("1");

    expect(store.history).toHaveLength(1);
    expect(store.history[0].file).toBe("a");
    expect(store.history[0].rank).toBe("1");
  });

  test("resets selectedSquare and history when reset is called", () => {
    store.selectSquare("a", "1");
    store.reset();

    expect(store.selectedSquare.file).toBeNull();
    expect(store.selectedSquare.rank).toBeNull();
    expect(store.history).toHaveLength(0);
  });
});
