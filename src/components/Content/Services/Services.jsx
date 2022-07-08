import React from 'react'
import './Services.css'
function Services({name, price, description}) {
  return (
    <div className="block-bg">
      <div className="info">
        <h3 className="name">{name}</h3>
        <span className="cost">{price}</span>
        <p className="description">{description}</p>
        <button className="block-btn">Заказать</button>
      </div>
    </div>
  )
}

export default Services