import React from 'react';

function MemeHeader() {
    const style = {
        marginLeft: "700px",
        fontSize: "20px"
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <p style={style} className="badge badge-pill badge-secondary m-">Meme Generator </p>
        </nav>
    )
}

export default MemeHeader