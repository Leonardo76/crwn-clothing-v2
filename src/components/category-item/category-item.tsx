import './category-item.scss'
import {type CategoryType} from "../../types/types.ts";

type CategoryItemProps = {
    categoryItem: CategoryType
}

const CategoryItem = (category: CategoryItemProps) => {

    return (
        <div className='category-container'>
            <div className="background-image"
                 style={{backgroundImage: `url(${category.categoryItem.imageUrl})`}}>
            </div>
            <div className='category-body-container'>
                <h2>{category.categoryItem.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
};

export default CategoryItem;