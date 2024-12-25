
//https://raw.githubusercontent.com/ProgrammingHero1/career-hub/refs/heads/main/data/categories.json

import Banner from "./home file/Banner";
import Featured from "./home file/Featured";
import List from "./home file/List";

//https://raw.githubusercontent.com/ProgrammingHero1/career-hub/refs/heads/main/data/jobs.json

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <List></List>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;