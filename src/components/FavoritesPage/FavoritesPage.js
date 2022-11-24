import FavElementCard from "../FavElement/FavElementCard";
import {useSelector} from "react-redux";
import {useMemo} from "react";

const FavoritesPage = () => {
    const favList = useSelector(state => state.fav);
    const favs = useMemo(() => {
        favList.map((element) => <FavElementCard key={element.id} card={element}/>)
    }, [favList])
    return (
        <div>
            <h1>Your favourite elements</h1>
            {favs.length !== 0
                ? favs
                : <p>No elements to show</p>}
        </div>
    );
}
export default FavoritesPage;