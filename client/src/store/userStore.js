import { create } from 'zustand';



export const userStore = create((set) => ({
    isUserValid: false,
    setIsUserValid: (args) => set({ isUserValid: args }),

    user: null,
    setUser: (args) => set({ user: args }),

    token: null,
    setToken: (args) => set({ token: args }),

    projects: null,
    setFiveProject: (args) => set({ projects: args }),

    //clear
    clearUser: () => {
        set({ user: null })
        // clear localStorage token from here
    }

}))
