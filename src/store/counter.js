import create from "zustand";

const useCounterStore = create((set) => ({
  num: 0,
  increaseNum: () =>
    set((state) => ({
      num: state.num + 1,
    })),
  decreaseNum: () =>
    set((state) => ({
      num: state.num > 0 ? state.num - 1 : 0,
    })),
  resetNum: () =>
    set((state) => ({
      num: 0,
    })),
}));

export default useCounterStore;
