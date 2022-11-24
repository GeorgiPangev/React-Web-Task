import {useSelector} from "react-redux";

const ElementCard = ({card, onLikeClick}) => {
    const favEl = useSelector(state => state.fav)
    const element = card.element

    function showBtn() {
        const length = favEl.filter(e => e.id === element.id)
        return length >= 0;
    }
    console.log(showBtn())
    return (
        <section id={element.id}>
            <img src={element.url} alt="card img"/>
            <div>
                <p>{element.title}</p>
            </div>
            {showBtn() && <button
                className="like-btn"
                id={element.id}
                data-index={index}
                onClick={onLikeClick}>Like
            </button>}

        </section>
    );
}
export default ElementCard;
