import React, { Component } from 'react';

import SearchLayout from '../components/search-layout';



class Search extends Component {

    state = {
        searchInput: ''
    }

    handleChangeInput = (e) => {
        console.log("valor",e.target.value)
        this.setState({
            searchInput: e.target.value
        }) 
    }

    handleSearch = () => {
        console.log("me clikeaaan")
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

export default Search;