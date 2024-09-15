const Product = require("../../models/Product");

const getFilteredProducts = async (req, res) => {
  try {
    const { category = [], brand = [], sortBy = "price-lowtohigh" } = req.query;

    const filter = {};

    if (category.length) {
      filter.category = { $in: category.split(",") };
    }
    if (brand.length) {
      filter.brand = { $in: brand.split(",") };
    }

    const sort = {};
    switch (sortBy) {
      case "price-lowtohigh":
        sort.price = 1;
        break;
      case "price-hightolow":
        sort.price = -1;
        break;
      case "title-atoz":
        sort.title = 1;
        break;
      case "title-ztoa":
        sort.title = -1;
        break;

      default:
        sort.price = -1;
        break;
    }

    const product = await Product.find(filter).sort(sort);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).res.json({
      success: false,
      message: "Some error when to get filtered product",
    });
  }
};

module.exports = { getFilteredProducts };
