
import Banner from '../Components/Banner';
import Categories from '../Components/Categories';
import FoodMenu from '../Components/FoodMenu';
import NoteSection from '../Components/NoteSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <NoteSection></NoteSection>
            <FoodMenu></FoodMenu>
        </div>
    );
};

export default Home;