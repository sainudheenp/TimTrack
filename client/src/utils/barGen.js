const barGen = (data) => {
    const today = new Date();
    const result = [];
    const allProjects = new Set();
  
    // First pass to collect all unique project names
    data.forEach(entry => {
      entry.projects.forEach(p => {
        allProjects.add(p.ProjectName);
      });
    });
  
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
  
      const dayData = data.find(entry => entry._id === dateStr);
      const dayProjects = {};
  
      // initialize all project keys with 0
      allProjects.forEach(proj => {
        dayProjects[proj] = 0;
      });
  
      // Fill in durations if data exists
      if (dayData) {
        dayData.projects.forEach(p => {
          dayProjects[p.ProjectName] += p.duration;
        });
      }
  
      result.push({
        date: dateStr,
        ...dayProjects
      });
    }
  
    return result;
  };
  
  export default barGen;
  