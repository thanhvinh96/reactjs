import { useEffect,useState } from "react"
import axios from "axios"

const ListPicture = ()=>{
    const [photos,setPhoto] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const responese = await axios.get('https://api.unsplash.com/search/photos',
                {
                    params:{
                        query:"beautiful girl",
                        per_page:10,
                        client_id:'bnjx7Df_sbxj3fR1lTqC4_V5pD7TfwLaihJ_2A9UjXE'
                    },
                }
            )
        setPhoto(responese.data.results)
        console.log('photo',photos);
        }
        fetchData();
    },[])
    return(
        <>
            <div>
                <h1>List photos</h1>
                {photos.map((photo)=>(<img key = {photo.id} src={photo.urls.small}/>))}
            </div>
        </>
    )
}

export default ListPicture;