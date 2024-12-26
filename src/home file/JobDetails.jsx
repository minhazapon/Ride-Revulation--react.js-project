import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";


import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { IoCalendar } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


import { ToastContainer, toast } from 'react-toastify';
import { SaveJobApplication } from "../local/LocalStorage";

const JobDetails = () => {

    const AllJob = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = AllJob.find( job => job.id === idInt ) ;
    console.log(job, id)


    const handleApply = () =>{
       
       SaveJobApplication(idInt);
       toast('Job applied Successfully')

    }



    return (
        <div>

            <DetailsBanner></DetailsBanner>


            <div className=" mt-10 mb-20 ml-28 mr-28 p-2 ">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10  ">
              
              

            <div>
            <p className=" font-sans "><span className=" font-semibold ">Job Description:</span><span className=" JD  "> {job.job_description}  </span></p>
            <p className=" font-sans mt-10 "><span className=" font-semibold ">Job responsibility:</span><span className=" JD  "> {job.job_responsibility}  </span></p>
            <p className=" font-sans mt-10 "> <span className=" font-semibold ">educational_requirements:</span><br></br><span className=" JD  mt-5 "> {job.job_responsibility}  </span></p>
            <p className=" font-sans mt-10 "><span className=" font-semibold ">experiences:</span><br></br><span className=" mt-5 JD  "> {job.job_responsibility}  </span></p>
            </div>



            <div className=" details-box  ">
            <p className=" j-title deep ">Job Details</p>
            <div>
            <p className=" h-[1px] w-[250px] bg-gray-300 hrd "></p>
            </div>
            <div className=" dollar-box ">
            <p><CiDollar className=" dollar "></CiDollar></p>
            <p className=" salary-text font-sans "><span className=" font-semibold text-black ">Salary:</span>  {job.salary} (Per Month) </p>
            </div>
            <div className=" dollar-box mt-5 ">
            <p><IoCalendar className=" dollar "></IoCalendar></p>
            <p className=" salary-text font-sans "> <span className=" font-semibold text-black ">Job Title:</span>  {job.job_title} </p>
            </div>
            <p className=" j-title deep mt-5 ">Contact Information</p>
            <div>
            <p className=" h-[1px] w-[250px] bg-gray-300 hrd "></p>
            </div>
            <div className=" dollar-box mt-5 ">
            <p><FaSquarePhone className=" dollar "></FaSquarePhone></p>
            <p className=" salary-text font-sans "> <span className=" font-semibold text-black ">Phone:</span> 01750-00 00 00 </p>
            </div>
            <div className=" dollar-box mt-5 ">
            <p><MdEmail className=" dollar "></MdEmail></p>
            <p className=" salary-text font-sans "> <span className=" font-semibold text-black ">Email:</span> info@gmail.com </p>
            </div>
            <div className=" dollar-box mt-5 ">
            <p><CiLocationOn className=" dollar "></CiLocationOn></p>
            <p className=" salary-text font-sans "> <span className=" font-semibold text-black ">Address:</span> Dhanmondi 32, Sukrabad
            Dhaka, Bangladesh </p>
            </div>
            <div className=" flex justify-center ">
            <button onClick={handleApply} className=" w-full mt-6 btn bg-gradient-to-r from-violet-600 to-blue-800 text-white ">Apply Now</button>
            <ToastContainer />
            </div>
            </div>







            </div>


            </div>



        </div>
    );
};

export default JobDetails;