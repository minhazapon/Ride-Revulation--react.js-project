import { useLoaderData } from "react-router-dom";
import ApplyBanner from "./ApplyBanner";
import { useEffect, useState } from "react";
import { getStoredJonApplication } from "../local/LocalStorage";




const Apply = () => {


    const jobApplied = useLoaderData();

    const [aplied, setApplied] = useState([])

    useEffect( () =>{
    
        const storedJobsId = getStoredJonApplication();
        if(jobApplied.length > 0 ){
          
        const applyed = []
        
        for(const id of storedJobsId){
         
            const job  = jobApplied.find( job => job.id === id );
            
            if(job){

                 jobApplied.push(job)

            }

        }

        setApplied(applyed)


        }



    } , [])


     
    return (
        <div>

            <ApplyBanner></ApplyBanner>


            <div className=" mt-20 mb-20 ml-20 mr-20 ">

            <div>


              <p> {aplied.length} </p>





            </div>


            </div>
            
        </div>
    );
};

export default Apply;