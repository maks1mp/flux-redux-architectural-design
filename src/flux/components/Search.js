import React from 'react';

const Search = ({onSearch, handleInput, value = ''}) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch();
        }}>
            <label>
                Search:
                <input type='text'
                    onChange={handleInput}
                    value={value}/>
            </label>
            <button type='submit'>
                FETCH WEATHER
            </button>
        </form>
    )
};

export default Search;