import { create } from 'zustand'

const useProjectStore = create((set) => ({
    activityName: '',
    projectName: '',
    newProjectName: '',
    projectId:'',


    //Setters
    setActivityName: (name) => set({ activityName: name }),
    setProjectName: (name) => set({ projectName: name }),
    setNewProjectName: (name) => set({ newProjectName: name }),
    setProjectId: (name) => set({ projectId: name }),




}))

export default useProjectStore