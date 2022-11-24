import {useDispatch} from "react-redux";
import {remFav} from "../../strore";

const FavElementCard = ({card}) => {
    const dispatch = useDispatch()
    return (
        <section onClick={() => dispatch(remFav(card))} id={card.id}>
            <img src={card.thumbnailUrl} alt="card img"/>
            <div className="title-wrapper">
                <p>{`${card.title} #${card.id}`}</p>
            </div>
        </section>
    );
}
export default FavElementCard;
