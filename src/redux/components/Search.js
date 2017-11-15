import React from 'react';
import {fetchData, updateSearch} from '../actions/actions';
import {connect} from 'react-redux';

class Search extends React.Component {
    onSearch = e => {
        e.preventDefault();

        const {dispatch, city} = this.props;

        if (city) {
            dispatch(fetchData(city));
        }
    }

    handleInput = e => {
        const {value} = e.target,
            {dispatch} = this.props;

        dispatch(updateSearch(value));
    }

    render() {
        const {city} = this.props;

        return (
            <form onSubmit={this.onSearch}>
                <label>
                    Search:
                    <input type='text'
                           onChange={this.handleInput}
                           value={city}/>
                </label>
                <button type='submit'>
                    FETCH WEATHER
                </button>
            </form>
        )
    }
};

const mapStateToProps = store => {
    const {search} = store;

    return {
        city: search.searchValue
    }
};

export default connect(mapStateToProps)(Search);