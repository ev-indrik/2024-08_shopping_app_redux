import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.component.styles.scss";

const Directory = ({ data }) => {
  return (
    <div className="directory-container">
      {data.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
