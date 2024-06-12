import "./category-item-component.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p className="text_to_shop">Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
