import {useEffect, useState} from "react";
import {getAlbumByID} from "../../Service/albumsService";

const HomePage = () => {
    const [albumId, setAlbumId] = useState(1)
    const [album, setAlbum] = useState([])
    useEffect(() => {
        getAlbumByID(albumId).then((albumFromDB) => setAlbum(Array.from(albumFromDB)))
    }, [albumId])
    return (
        <div>

            <h1>Welcome from home page</h1>
        </div>
    );
};
export default HomePage;