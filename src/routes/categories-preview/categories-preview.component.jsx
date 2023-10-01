import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview-component';
import Spinner from '../../components/spinner/spinner';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/category/category.selector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
        <div>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];

                        return <CategoryPreview key={title} products={products} title={title} />
                    })
                )
            }
        </div>
    )
}

export default CategoriesPreview;