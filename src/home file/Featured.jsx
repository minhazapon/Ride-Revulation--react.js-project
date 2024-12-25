import { useEffect } from "react";
import { useState } from "react";
import FeaturedDetails from "./FeaturedDetails";



const Featured = () => {

    const [jobs, setJobs] = useState([])

    useEffect( () => {
    fetch('jobs.json')
    .then( res => res.json())
    .then( data => setJobs(data) )
    }
    , [])
 


    return (
        <div className=" ml-20 mb-20 mt-20 mr-20 ">


            <div className=" p-10 ">
            <div>
            <p className=" text-center deep FJ  ">Featured Jobs</p>
            <p className=" deep ex ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" mt-16 ">
            <div className=" grid  md:grid-cols-2 gap-5 ">
            {
            jobs.map( jobs => <FeaturedDetails jobs={jobs}></FeaturedDetails>  )
            }
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Featured;