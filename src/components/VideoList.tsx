import React from 'react';
interface Props{
    id:string,
    x:number,
    y:number,
}

const VideoList:React.FC<Props> = ({id,x,y}) => {
    
    return (
        <div className="column is-two-thirds is-offset-fifth">
            <div className="">
                <figure className="card-image image is-4by3">
                    <iframe 
                        id="player"
                        src={`https://www.youtube.com/embed/${id}`}
                        className="has-ratio"
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>
                </figure>
            </div>
        </div>
    )
};

export default VideoList;
