import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginLeft: '15px', padding: 0}} onClick={()=>onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} style={{marginRight: '20px'}} alt="thumbnail"/>
                
            </Paper>
        </Grid>
    )
}

export default VideoItem;