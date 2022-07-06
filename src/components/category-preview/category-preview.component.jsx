import {
  CategoryPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./category-preview.styles";
import ProductCard from "../../components/product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleContainer to={title}>{title.toUpperCase()}</TitleContainer>
      </h2>

      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
