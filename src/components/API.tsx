import {YOUTUBE_URL} from './Strings';

interface QS{
    key:string,
    q:string,
    type:string,
    maxResults:string,
    order:string
}

export const fetchVideos = async (qs:any) => {
    try{
        const response = await fetch(YOUTUBE_URL+qs);
        const data = await response.json();
        return data.items;
    }catch(e){
        throw(e);
    }
}
