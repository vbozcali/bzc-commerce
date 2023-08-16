import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/product.content";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);

    useEffect(() => {
        console.log(products);
    }, []);

    return (
        <div className="products-container">
            {
                products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default Shop;