import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/product.content";

const Shop = () => {
    const { products } = useContext(ProductsContext);

    useEffect(() => {
        console.log(products);
    }, [])

    return (
        <div>
            {
                products.map(product => <h1>{product.name}</h1>)
            }
        </div>
    )
}

export default Shop;