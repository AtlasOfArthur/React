import React from 'react'

export default function Vitsi(props) {
    return (<div>
        <h3>{props.kysymys}</h3>
        <p>{props.vastaus}</p>
    </div>)
}