
import a1 from '../image/accounts.png'
import a2 from '../image/calendar.png'
import a3 from '../image/chip.png'
import a4 from '../image/creative.png'

const List = () => {


    return (


    <div className=" mt-20 mb-20 ml-20 mr-20 ">
    <div>
    <div>
    <p className=" text-center deep FJ ">Job Category List</p>
    <p className=" deep ex ">Explore thousands of job opportunities with all the information you need. Its your future</p>
    </div>
    <div className=' flex justify-center mt-10 '>
    <div className=' grid  md:grid-cols-4 gap-10  '>
    <div className=' border-[1px]  h-[170px] w-[250px] p-3 rounded-xl '>
    <img className=' ' src={a1} alt="" />
    <p className=' ac '>Account & Finance</p>
    <p className=' job '>300 Jobs Available</p>
    </div>
    <div className=' border-[1px] h-[170px] w-[250px] p-3 rounded-xl '>
    <img src={a2} alt="" />
    <p className=' ac '>Creative Design</p>
    <p className=' job '>100+ Jobs Available</p>
    </div>
    <div className=' border-[1px] h-[170px] w-[250px] p-3 rounded-xl '>
    <img src={a3} alt="" />
    <p className=' ac '>Marketing & Sales</p>
    <p className=' job '>150 Jobs Available</p>
    </div>
    <div className=' border-[1px] h-[170px] w-[250px] p-3 rounded-xl '>
    <img src={a4} alt="" />
    <p className=' ac '>Engineering Job</p>
    <p className=' job '>224 Jobs Available</p>
    </div>
    </div>
    </div>
    </div>
    </div>


    );
};

export default List;