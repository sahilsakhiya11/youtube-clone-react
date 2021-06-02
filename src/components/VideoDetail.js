import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({video}) =>{
    if(!video) return <div style={{fontSize: '50px', position: 'absolute', top: '50%', left: '30%'}}> Search keyword and View video</div>
    console.log(video);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
       <React.Fragment>
           <Paper elevation={6} style={{ height: '80% '}}>
               <iframe src={videoSrc} frameBorder="0" width="100%" height="100%" title="video player" /> 
           </Paper>
           <Paper elevation={6} style={{ padding: '15px'}}>
                <Typography variant="h4">{video.snippet.title}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography> 
                <Typography variant="subtitle2">{video.snippet.description}</Typography>   
           </Paper>
       </React.Fragment> 
    )
}

export default VideoDetail;