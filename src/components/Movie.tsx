import React,{useState,useEffect} from 'react';
import {API_KEY,YOUTUBE_URL} from './Strings';

const Movie = () => {

    const [videoId,setVideoID] = useState("");
    const [keyword,setKeyword] = useState("");

    const handleChenge = (event:any) =>{
        setKeyword(event.target.value);
        console.log(keyword);
    }

    const getYoutubeMovie = (event:any) => {
        event.preventDefault();
        const param = {
            key:API_KEY,
            q:keyword,
            type:"video",
            maxResults:"10",
            order:"viewCount",
        };
        const qs = new URLSearchParams(param);
    
        fetch(YOUTUBE_URL+qs)
        .then((res)=>res.json())
        .then(
            (data)=>{
                console.log("get success!");
                setVideoID(data.items[0].id.videoId);
                console.log(videoId);
            },
            (error)=>{
                console.error(error);
            }
        )
    }

    return (
        <div>
            <form className="card m-4">
                <label>
                    <input className="input is-midium is-rounded is-link" type="text" onChange={handleChenge} placeholder="動画を検索"/>
                </label>
                <input className="button is-link" type="submit" value="検索" onClick={getYoutubeMovie} />
            </form>
            <div className="columns m-3">

                <div className="column is-four-fifths is-offset-1">
                    <div className="card">
                        <figure className="card-image image is-16by9">
                            <iframe 
                                    id="player"
                                    src={"https://www.youtube.com/embed/"+videoId}
                                    className="has-ratio"
                                    frameBorder="0"
                                    allowFullScreen>
                            </iframe>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Movie;
