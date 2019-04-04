import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import SearchLayout from '../components/search-layout';
import { searchAlbums, charging } from '../actions/index';



class Search extends Component {

    state = {
        searchInput: '',
    }

    componentDidMount() {
        toast.configure({
            autoClose: 3000,
            draggable: false,
          });
    }

    handleChangeInput = (e) => {
        this.setState({
            searchInput: e.target.value
        }) 
    }

    handleSearch = () => {
        const { searchInput } = this.state;

        if(!this.state.searchInput) {
            toast.warn("you must enter an album");
        } else {
            this.props.dispatch(charging());
            this.props.dispatch(searchAlbums(searchInput, 0));
        }
    }

    render() {
        const { searchInput } = this.state;
        return (
            <SearchLayout
                handleChange={this.handleChangeInput}
                handleSearch={this.handleSearch}
                searchInput={searchInput}
            />

        );
    }
}

export default connect()(Search);