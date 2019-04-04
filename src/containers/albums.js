import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AlbumLayout } from '../components/albums-layout';
import { Album } from '../components/album';


class Albums extends Component {
    render() {
        const { albums, status } = this.props;
        let notMatchedResults =  false;

        if(status === "ok" && albums.length === 0) notMatchedResults = true;
        console.log(status, albums.length )

        return (
           <AlbumLayout
                resultsMatched={notMatchedResults}
           >
                {
                    albums.map( album => <Album 
                        key={album.id_spotify}
                        releaseDate={album.release_date}
                        name={album.name}
                        image={album.cover.url}
                        artist={album.artist}
                        /> )
                }

           </AlbumLayout>

        );
    }
}

function mapStateToProps(state) {
    return({
        albums: state.albums,
        status: state.status
    })
}

export default connect(mapStateToProps)(Albums);