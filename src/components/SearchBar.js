import React, { useState } from "react";

const SearchBar = () => {
    const [user, searchUser] = useState('Mitch4sho');

    const search = () => {
        console.log('searching')
        fetch(`https://api.github.com/users/${user}`, {
           "method" : "GET",
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => {console.log(err)})
    }

    return (
        <div>
            <input type="text" />
            <button onClick={() => search()}>Search</button>
        </div>
    );
};

export default SearchBar;