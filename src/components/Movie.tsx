import React,{useState} from 'react';
import {API_KEY} from './Strings';
import {fetchVideos} from './API';
import Load from './Load';
import VideoPlay from './VideoPlay';
import VideoList from './VideoList';



const Movie = () => {

    const [datas,setDatas] = useState<any[]>([]);
    const [videos,setVideos] = useState<string[]>([]);
    const [keyword,setKeyword] = useState("");
    const [loding,setLoding] = useState(true);
    let x1:number = 1,y1:number=20;

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
            maxResults:"40",
            order:"viewCount",
        };
        const qs = new URLSearchParams(param);

        fetchVideos(qs).then(data　=>{
            setLoding(false);
            setDatas(data.items);
        })

        datas.map(data　=>　{
            // console.log(data);
            setVideos([...videos,data.id.videoId]);
            console.log(videos);
        })
    }

    // useEffect(() => {
    //     datas.map(data　=>　{
    //         // console.log(data);
    //         setVideos([...videos,data.id.videoId]);
    //         console.log(videos);
    //     })
    // }, )


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
                        {loding ? (
                                    <Load />
                                ):(
                                    <VideoPlay id={videos[0]}/>
                                )
                        }
                    </div>
                </div>
                {videos.map((id)=>{
                    <VideoList id={id} x={x1} y={y1} />
                })}
            </div>
        </div>
    )
};

export default Movie;
