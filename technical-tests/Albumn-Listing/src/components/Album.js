import React from 'react';

// presentational component simple logic to render, no state
function Album(props) {
    const { songs } = props;
    return (
        <ul>
            {songs && songs.map((song, index) => 
                <li key={index}>{song}</li>
            )}
        </ul>
    );
}

export default Album;
