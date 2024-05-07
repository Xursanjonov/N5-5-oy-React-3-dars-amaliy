import React from 'react'
import Button from '../../Buttun'
import './header.scss'

const Header = ({ setOpenModal }) => {
    return (
        <header className='header'>
            <a href='/' className="logo">Shop</a>
            <Button onClick={() => setOpenModal(true)} className='shopping-card'>
                Shopping Cards
            </Button>
        </header>
    )
}

export default Header