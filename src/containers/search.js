import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import SearchLayout from '../components/search-layout';
import { searchAlbums } from '../actions/index';



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
        console.log("valor",e.target.value)
        this.setState({
            searchInput: e.target.value
        }) 
    }

    handleSearch = () => {
        const { searchInput } = this.state;

        if(!this.state.searchInput) {
            toast.warn("you must enter an album");
        } else {
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