import CategoryItem from "../category-item/Category-item.component";
import "./directory.component.styles.scss";

const Directory = ({ data }) => {
  return (
    <div className="directory-container">
      {data.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
