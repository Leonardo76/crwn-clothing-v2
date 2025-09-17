import './directory.scss'
import {type CategoryType} from "../../types/types.ts";
import CategoryItem from "../category-item/category-item.tsx";

type DirectoryProps = {
    directoryItems: CategoryType[]
}

const Directory = ({directoryItems}: DirectoryProps) => {
    return (
        <div className='directory-container'>
            {directoryItems.map((category: CategoryType) => (
                <CategoryItem key={`${category.id}-${category.title}`}
                              categoryItem={category}/>
            ))}
        </div>
    );
};

export default Directory;