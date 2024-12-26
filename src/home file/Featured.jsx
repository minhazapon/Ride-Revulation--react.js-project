import { useEffect } from "react";
import { useState } from "react";
import FeaturedDetails from "./FeaturedDetails";



const Featured = () => {

    const [jobs, setJobs] = useState([])

    const [DataLength, setLength] = useState(4)

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
            jobs.slice(0, DataLength).map( jobs => <FeaturedDetails key={jobs.id} jobs={jobs}></FeaturedDetails>  )
            }
            </div>
            <div className=" flex justify-center mt-10  ">
            <div className={ DataLength === jobs.length && 'hidden' }  >
            <button onClick={() => setLength(jobs.length) } className="btn bg-gradient-to-r from-violet-600 to-blue-800 text-white deep ">View All</button>
            </div>   
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Featured;