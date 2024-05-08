import React from 'react'
import Button from '../Buttun'
import { nanoid } from 'nanoid'
import './modal.scss'

const Modal = ({ children, addCard, setOpenModal }) => {
    const [countCard, setCountCard] = React.useState(1)
    const countAdd = (count) => {
        if (countCard === count) count
        else setCountCard(prev => prev + 1)
    }
    const countDelete = () => {
        setCountCard(prev => prev - 1)
    }

    return (
        <section className='modal'>
            <div className="modal-header">
                <h2 className='modal-title'>Shopping Cards</h2>
                <Button key={nanoid()} onClick={() => setOpenModal(false)} className="modal-close">x</Button>
            </div>
            {children}
            <div className="modal-cards">
                {addCard?.map(product => (
                    <div key={product.id} className='modal-card'>
                        <img className='modal-card__url' src={product.img} alt="" />
                        <div className="modal-card__title">
                            <h3>{product.name}</h3>
                            <div className="modal-card__sent">
                                <p>Price: {product.price}</p>
                                <h5>Count: {product.count}</h5>
                            </div>
                            <div className="modal-card__btn">
                                <Button onClick={countDelete(product.count)} key={product.id} className='modal-card__del-btn'>Del</Button>
                                <h2 className='count'>{countCard}</h2>
                                <Button onClick={countAdd} key={product.id} className='modal-card__add-btn'>Add</Button>
                            </div>
                            <a href='#' className='modal-card__btn2'>Learn more</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Modal