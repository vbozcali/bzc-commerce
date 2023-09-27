import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles';
import { CategoryContainer, Title } from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

const Category = () => {
    const { category } = useParams();
    console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('effect fired calling setProducts');

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