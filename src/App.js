import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youtube';

class App extends React.Component{
    state = {
        videos: [],
        selectedVideos: null,

    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideos: video})
    }


    handleSubmit = async (searchTerm) => {
         const respose = await youtube.get('search', { 
            params:{
                part:'snippet',
                maxResults:2,
                key: 'AIzaSyADh3eyzM3Wr803_mbuuM61oT6kYZSrWyM',
                q: searchTerm,
            }});
        
            this.setState({ videos: respose.data.items, selectedVideos: respose.data.items[0] });
    }
    render(){
        const { selectedVideos, videos } = this.state;
        return(
         <Grid justiify="center" container spacing={10}> 
            <Grid item xs={12}>
                <Grid container spacing={16}>
                    <Grid item xs={12}> 
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideos}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList onVideoSelect={this.onVideoSelect} videos={videos}/>
                    </Grid>
                </Grid>
            </Grid>
         
         </Grid>
        )
    }
}

export default App;