import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner";
import './category.styles';
import { CategoryContainer, Title } from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/category/category.selector";

const Category = () => {
    const { category } = useParams();
    const isLoading = useSelector(selectCategoriesIsLoading);
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>

            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products
                        && products.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                </CategoryContainer>
            )}
        </Fragment>
    )
}

export default Category;