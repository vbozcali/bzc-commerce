import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/category.context";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles';
import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            
            <CategoryContainer>
                {products
                    && products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;