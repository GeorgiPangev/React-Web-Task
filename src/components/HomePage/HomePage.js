import {useCallback, useEffect, useMemo, useState} from "react";
import {getAlbumByID} from "../../Service/albumsService";
import ALBUMS from "./albumsList";
import {useDispatch} from "react-redux";
import ElementCard from "../ElementCard/ElementCard";
import {addFav} from "../../strore";

const HomePage = () => {
    const [albumId, setAlbumId] = useState(1)
    const [album, setAlbum] = useState([])
    const dispatch = useDispatch()
    const options = useMemo(() => ALBUMS.map(a => <option key={a.value} value={a.value}>{a.label}</option>), []);
    const onSelectChange = useCallback((e) => setAlbumId(Number(e.target.value)), []);
    function onLikeClick(element) {dispatch(addFav(element))}
    const cards = useMemo(() => album.map((element) =>
        <ElementCard
            className="element-card"
            key={element.id}
            card={{element}}
            onLikeClick={onLikeClick}
        />), [album, dispatch])
    useEffect(() => {
        getAlbumByID(albumId).then((albumFromDB) => setAlbum(Array.from(albumFromDB)))
    }, [albumId])
    return (
        <div>
            <section className="selector-box">
                <label htmlFor="album-Num-Selector">Select album</label>
                <select className="selector" id="album-Num-Selector" onChange={onSelectChange}>
                    {options}
                </select>
            </section>
            <section className="elements">
                <div className="element-wrapper">
                    {cards}
                </div>
            </section>
        </div>
    );
};
export default HomePage;