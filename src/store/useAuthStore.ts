import { create } from 'zustand';

interface AuthState {
  user: {
    name: string;
    role: string;
    avatar: string;
  } | null;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: {
    name: 'Chief Operator',
    role: 'Shift Lead',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBthY8wRsB0knUA_oE4Jn36WTHMfwpbOlJ8b8v9TaNu7la5GZsc-NQFGqYvbUiTkCxApMvz8sDGTym7QUQaOMiWkeyaSRUf2J9l_xxeQJG8r9K3kjs96jyNJ247yNxRupU8D0hZisZRrNa0B5NmIll92yY8rft7awlYnI2TMzZxlABY6ZE0uOcgprDTTS59wDNmZSIU_q-ZO_49cvG0lPiLf6FHfBW7FEWH4-_3iD_rnDAd_QP1CtuKeVBrK3UAgZ3J7OF-tq4PCw',
  },
  login: () => set({ user: { name: 'Chief Operator', role: 'Shift Lead', avatar: '...' } }),
  logout: () => set({ user: null }),
}));
