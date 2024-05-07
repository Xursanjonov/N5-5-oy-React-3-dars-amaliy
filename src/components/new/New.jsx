import React from 'react'

const NewProduct = () => {
    return (
        <section className="new container">
            <h1 className="new-title">Products</h1>
            <div className="new-box"> {productMap} </div>
        </section>
    )
}

export default NewProduct