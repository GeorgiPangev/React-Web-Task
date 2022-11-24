import {useCallback, useEffect, useMemo, useState} from "react";
import {getAlbumByID} from "../../Service/albumsService";
import ALBUMS from "./albumsList";

const HomePage = () => {
    const [albumId, setAlbumId] = useState(1)
    const [album, setAlbum] = useState([])
    const options = useMemo(()=>ALBUMS.map(a=><option key={a.value} value={a.value}>{a.label}</option>),[]);
    const onSelectChange = useCallback((e)=> setAlbumId(Number(e.target.value)),[]);
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
        </div>
    );
};
export default HomePage;