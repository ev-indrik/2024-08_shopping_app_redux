import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item-component.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p className="text_to_shop">Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
