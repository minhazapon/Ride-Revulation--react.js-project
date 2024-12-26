
const getStoredJonApplication = () =>{

    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
    return JSON.parse(storedJobApplication);
    }
    return [];


}



const SaveJobApplication = () =>{
   

    const storedJobApplication = getStoredJonApplication();
    const exists = storedJobApplication.find(jobId => jobId === id)
   
    if(!exists){
       storedJobApplication.push(id);
       localStorage.setItem('job-application', JSON.stringify(storedJobApplication))
    }


}


export { getStoredJonApplication, SaveJobApplication }