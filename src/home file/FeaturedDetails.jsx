
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeaturedDetails = ({jobs}) => {
    

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements , experiences , contact_information  }  = jobs

    return (
        <div>

            <div className=" border-[1px] border-gray-400 rounded-xl p-6 ">
             <img className=" h-[50px]  mt-3 " src={logo} alt="" /> 
             <p className=" job_t deep ">{job_title}</p>
             <p className=" cn font-sans mt-3 ">{company_name}</p>
             <div className=" mt-4 flex items-center gap-3">
             <button className=" btn border-[1] border-purple-600 rf  ">Remote</button>
             <button className=" btn border-[1] border-purple-600 rf  ">Full Time</button>
             </div>
             <div className=" mt-5 flex-col md:flex-row lg:flex-row flex justify-between gap-5 ">
              <div className=" flex items-center gap-1">
              <p><CiLocationOn className=" text-gray-400 h-[20px] w-[20px] "></CiLocationOn></p>
              <p className=" text-gray-400 ">Dhaka, Bangladesh</p>
              </div>
              <div className=" flex items-center gap-1">
              <p><CiDollar className=" text-gray-400 h-[20px] w-[20px] "></CiDollar></p>
              <p className=" text-gray-400 ">Salary : 100K - 150K</p>
              </div>
             </div>
             <div>
             <Link to={`/job/${id}`}>
             <button className=" mt-5 bg-violet-600 btn text-white deep ">View Details</button>
             </Link>  
             </div>



            </div>
            
        </div>
    );
};

export default FeaturedDetails;