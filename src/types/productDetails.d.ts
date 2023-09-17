
type ProductDetailsProps = {
  product: ProductItem
};

type ProductItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  type: ProductCategory;
  brand: string;
  productType: string;
  shade?: string;
  size: string;
  productCategoryDetails: ProductCategoryDetails;
}

type ProductCategoryDetails = {
  ingredients: string[];
}

type Makeup = ProductCategoryDetails & {
  skinType?: string;
}

type Skincare = ProductCategoryDetails & {
  targetedConcerns: string[];
  skinType?: string;
};

type Haircare = ProductCategoryDetails & {
  hairType: string;
  hairConcerns: string[];
};

type ProductCategory = "MakeUp" | "SkinCare" | "HairCare";