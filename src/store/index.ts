import { create } from "zustand";

type State = {
  humbarger: boolean;
  humbargerToggle: (payload: boolean) => void;
};

const useStore = create<State>((set) => ({
  humbarger: false,
  humbargerToggle: (payload) =>
    set({
      humbarger: payload,
    }),
}));

export default useStore;
