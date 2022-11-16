import React from 'react'

//This component takes a color as props and renders the color name in the color field

function ColorBlock(props) {
    return (
        <div className='colorBlock' style={{ 'backgroundColor': props.color }}>

            <p> props.color</p>


        </div>
    )
}

export default ColorBlock