import React from 'react'
import Button from '../Buttun'
import './modal.scss'

const Modal = ({ children, addCard, setOpenModal }) => {

    return (
        <section className='modal'>
            <div className="modal-header">
                <h2 className='modal-title'>Shopping Cards</h2>
                <Button onClick={() => setOpenModal(false)} className="modal-close">x</Button>
            </div>
                {children}
            <div className="modal-cards">
                {addCard?.map(product => (
                    <div className='modal-card'>
                        <img className='modal-card__url' src={product.img} alt="" />
                        <div className="modal-card__title">
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <div className="card-btn">
                                <Button className='modal-card__btn'>Add</Button>
                                <a href='#' className='modal-card__btn2'>Learn more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Modal