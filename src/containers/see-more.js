import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeeMoreLayout from '../components/see-more';
import { addNewAlbums, charging } from '../actions/index';

class SeeMore extends Component {

    addAlbums = () => {
        const { currentSearch, offset } = this.props;
        this.props.dispatch(charging());
        this.props.dispatch(addNewAlbums(currentSearch, offset));

    }
    
    render() {
        const { offset } = this.props;
        
        return (
            <div>
                {   
                    offset && <SeeMoreLayout handleAddAlbums={this.addAlbums}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return({
        currentSearch : state.currentSearch,
        offset: state.nextOffset
    })
}

export default connect(mapStateToProps)(SeeMore);