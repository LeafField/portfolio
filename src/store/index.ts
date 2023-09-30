import { create } from "zustand";

export type Modal = {
  show: boolean;
  completed?: boolean;
  message?: string;
};

type State = {
  humbarger: boolean;
  humbargerToggle: (payload: boolean) => void;
  modal: Modal;
  showModal: (payload: Modal) => void;
};

const useStore = create<State>((set) => ({
  humbarger: false,
  humbargerToggle: (payload) =>
    set({
      humbarger: payload,
    }),
  modal: {
    show: false,
    completed: false,
    message: "",
  },
  showModal: (payload) =>
    set({
      modal: {
        show: payload.show,
        completed: payload.completed,
        message: payload.message,
      },
    }),
}));

export default useStore;
