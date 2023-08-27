import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/category.context";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h1 className="title">{category.toUpperCase()}</h1>
            <div className="category-container">
                {products
                    && products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </div>
        </Fragment>
    )
}

export default Category;