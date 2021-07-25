import React from 'react';
interface Props{
    id:string
}

const VideoPlay:React.FC<Props> = ({id}) => {
    return (
        <div>
            <div>
                <div className="card m-3">
                    <p>{}</p>
                </div>
                <figure className="card-image image is-16by9">
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
}

export default VideoPlay;
