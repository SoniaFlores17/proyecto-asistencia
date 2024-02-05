import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (userData) => {
    const { username, password } = userData;
    console.log('Username:', username);
    console.log('Password:', password);


    if (username === 'docente' && password === '123') {
        set({ user: { username, role: 'docente' }, isAuthenticated: true });
      return true; 
    } else {
      
      return false;
    }
  },

  //Cerrar sesión
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
