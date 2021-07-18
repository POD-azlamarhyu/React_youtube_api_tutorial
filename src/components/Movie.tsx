import React,{useState,useEffect} from 'react';
import {API_KEY,YOUTUBE_URL} from './Strings';

const Movie = () => {

    const [videoId,setVideoID] = useState("");

    useEffect(() => {
        const param = {
            key:API_KEY,
            q:"スーツ 最長往復切符",
            type:"video",
            maxResults:"1",
            order:"viewCount",
        };
        const qs = new URLSearchParams(param);
    
        fetch(YOUTUBE_URL+qs)
        .then((res)=>res.json())
        .then(
            (data)=>{
                console.log("get success!");
                console.log(data);

                setVideoID(data.items[0].id.videoId);
            },
            (error)=>{
                console.error(error);
            }
        )
    }, []);

    return (
        <div className="columns">
            <div className="column is-four-fifths is-offset-1">
                <div className="card">
                    <figure className="card-image image is-16by9">
                        <iframe 
                                id="player"
                                src={"https://www.youtube.com/embed/"+videoId}
                                className="has-ratio"
                                frameBorder="0"
                                allowFullScreen
                        >
                        </iframe>
                    </figure>
                </div>
            </div>
        </div>
    )
};

export default Movie;
