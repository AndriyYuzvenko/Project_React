import React from 'react';

const Actors = (props) => {
    const {actor: {name}} = props
    console.log(props)
    return (
        <p>{name},</p>
    );
};

export default Actors;