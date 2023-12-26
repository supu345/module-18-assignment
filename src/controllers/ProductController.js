const {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategorService,
  ListBySimilarService,
  ListByKeywordService,
  ListByRemarkService,
  DetailsService,
  ReviewListService,
} = require("../services/ProductServices");

exports.ProductBrandList = async (req, res) => {
  let result = await BrandListService();
  return res.status(200).json(result);
};

exports.ProductCategoryList = async (req, res) => {
  let result = await CategoryListService();
  return res.status(200).json(result);
};

exports.ProductSliderList = async (req, res) => {
  let result = await SliderListService();
  return res.status(200).json(result);
};

exports.ProductListByBrand = async (req, res) => {
  let result = await ListByBrandService(req);
  return res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result = await ListByCategorService(req);
  return res.status(200).json(result);
};

exports.ProductListByRemark = async (req, res) => {
  let result = await ListByRemarkService(req);
  return res.status(200).json(result);
};
exports.ProductListBySimilar = async (req, res) => {
  let result = await ListBySimilarService(req);
  return res.status(200).json(result);
};

exports.ProductDetails = async (req, res) => {
  let result = await DetailsService(req);
  return res.status(200).json(result);
};

exports.ProductListByKeyword = async (req, res) => {
  let result = await ListByKeywordService(req);
  return res.status(200).json(result);
};
exports.ProductReviewList = async (req, res) => {
  let result = await ReviewListService(req);
  return res.status(200).json(result);
};

exports.ProductCreateProductReview = async (req, res) => {};
