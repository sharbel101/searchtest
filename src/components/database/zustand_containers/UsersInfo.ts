import { create } from 'zustand';

interface FlowState {
  user_id: string;
  setCurrentUserId: (id: string | undefined) => void;
}

export const useUserInfo = create<FlowState>((set) => ({
  user_id: '',
  setCurrentUserId: (id) => set({ user_id: id }),
}));
