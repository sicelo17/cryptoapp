import React from 'react'

function Coin({name, image, symbol, price, volume}) {
    return (
        <div className="coin__container">
            <div className="coin__row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin__symbol">{symbol }</p>
                </div>

                <div className="coin__data">
                    <p className="coin__price">$ {price}</p>
                    <p className="coin__volume">$ {volume.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
