import { useContext } from "react";
import Video from "./video";
import { VideoContext } from "./videoContext";

export default function ListVideo(){
    const db = useContext(VideoContext);

    return(
        <div>
            <h1>Total de {db.length} videos</h1>
            {db.map((video) => <Video video={video}/>)}
        </div>
    );
}