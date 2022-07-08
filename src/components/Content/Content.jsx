import React from 'react'
import { useEffect } from 'react'
import './Content.css'
import Services from './Services/Services'
import {useDispatch, useSelector} from 'react-redux'
import { orderFetch } from '../../store/reducer/order.reducer'

function Content() {
    const {services} = useSelector(state => state.services)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(orderFetch())
    },[dispatch])
  return (
    <div className="content">
        <div className="container">
            <h1 className="title">3 направление обслуживания компьютеров в Челябинске AksiPro</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid magni, minus fugit optio eligendi sequi distinctio dolore ratione animi. Ipsa.</p>
            <div className="services">
                {
                    services.map(service => {
                        return<Services
                            key={service.id}
                            name={service.name}
                            price={service.price}
                            description={service.description}
                        />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Content