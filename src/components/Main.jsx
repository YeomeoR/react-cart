import React from 'react'
import Product from './Product'

export default function Main({products, onAdd}) {
 
    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="row">
                {products.map((product) => 
                    <Product key={product.id} product={product} onAdd={onAdd} />
                )}
            </div>
        </main>
    )
}

