import { create } from 'zustand';

// const userBearStore = create((set) => ({
//     isUserValid: false,
//     setIsUserValid: (args) => set({ isUserValid: args })
// }))

 export const userStore = create((set) => ({
    isUserValid: false,
    setIsUserValid: (args) => set({ isUserValid: args }),
    user: null,
    setUser: (args) => set({ user: args }),
    token: null,
    setToken: (args) => set({ token: args }),
}))
