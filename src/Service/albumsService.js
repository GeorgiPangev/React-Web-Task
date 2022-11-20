import soursURLs from "./ServiceURLs";

const getAlbumByID = (id)=>{
    return fetch(soursURLs.albumByIDURL + id)
        .then(response=> response.json())
        .catch(err=>console.log(err))
}

export {getAlbumByID};