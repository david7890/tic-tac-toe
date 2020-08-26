import React from 'react'

export const Square = ({value, onClick}) => {
    //si style es null es igual a squares
    const style = value ? `squares ${value}` : `squares`

    return (
        <button className={style} onClick= {onClick}>
            {value}
        </button>
    )
}

export default Square
