import React from 'react'
import { productsData } from '../../static/productsData'
import ProductsCard from '../cards/ProductsCard';
import Modal from '../modal/Modal';
import { nanoid } from 'nanoid';
import './hero.scss'

const Hero = ({ openModal, setOpenModal }) => {
    const [addCard, setAddCard] = React.useState([]);
    // console.log(addCard);

    return (
        <>
            <section className="products container">
                <h1 className="products__title">Products</h1>
                <div className="products-box">
                    {productsData?.map((product) => (
                        <ProductsCard key={product.id} addCard={addCard} setAddCard={setAddCard} product={product}/>
                    ))}
                </div>
            </section>
            {
                openModal ? (
                    <Modal addCard={addCard} key={nanoid()} setOpenModal={setOpenModal} >
                        <h1>Modal</h1>
                    </Modal>
                ) : ''
            }
        </>
    )
}

export default Hero