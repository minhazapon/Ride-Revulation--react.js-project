
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




const Footer = () => {


    return (


        <div className=" mt-20 bg-black p-10 text-white ">
        <div className=" ml-20 mr-20 ">
        <div className="  ">
        <div className=" flex justify-between">  
        <div>
        <div>
        <a className=" text-xl deep text-w ">Work<span className=" text-c ">Connect</span></a>
        <p className=" text-there deep ">There are many variations of passages of<br></br> Lorem Ipsum , but the majority have<br></br> suffered alteration in some form.</p>
        </div>
        <div className=" mt-4 flex items-center gap-3 ">
        <p><IoLogoFacebook className=" icon-F h-[30px] w-[30px] "></IoLogoFacebook></p>
        <p><FaTwitter className=" icon-t h-[30px] w-[30px] "></FaTwitter></p>
        <p><FaInstagramSquare className=" icon-I h-[30px] w-[30px] "></FaInstagramSquare></p>
        </div>
        </div>
        <div>
        <p className=" deep text-xl ">Company</p>
        <p className=" deep cursor-pointer text-ab ">About Us</p>
        <p className=" deep cursor-pointer text-ab ">Work</p>
        <p className=" deep cursor-pointer text-ab ">Latest News</p>
        <p className=" deep cursor-pointer text-ab ">Careers</p>
        </div>
        <div>
        <p className=" deep text-xl ">Product</p>
        <p className=" deep cursor-pointer text-ab ">Prototype</p>
        <p className=" deep cursor-pointer text-ab ">Plans & Pricing</p>
        <p className=" deep cursor-pointer text-ab ">Customers</p>
        <p className=" deep cursor-pointer text-ab ">Integrations</p>
        </div>
        <div>
        <p className=" deep text-xl ">Support</p>
        <p className=" deep cursor-pointer text-ab ">Help Desk</p>
        <p className=" deep cursor-pointer text-ab ">Sales</p>
        <p className=" deep cursor-pointer text-ab ">Become a Partner</p>
        <p className=" deep cursor-pointer text-ab ">Developers</p>
        </div>
        <div>
        <p className=" deep text-xl ">Contact</p>
        <p className=" deep cursor-pointer text-ab ">524 Broadway , NYC</p>
        <p className=" deep cursor-pointer text-ab ">+1 777 - 978 - 5570</p>
        </div>
        </div>  
        <div className=" hr ">
        <hr></hr>
        </div>
        <div className=" flex justify-between ">
        <p className=" deep ar-text ">@2023 CareerHub. All Rights Reserved</p>
        <p className=" deep ar-text ">Powered by CareerHub</p>
        </div>
        </div>    
        </div>
        </div>


    );
};

export default Footer;