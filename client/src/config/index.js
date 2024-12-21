import {
  BabyIcon,
  BirdIcon,
  BugIcon,
  CatIcon,
  CloudLightningIcon,
  OrigamiIcon,
  RabbitIcon,
  ShirtIcon,
  SquirrelIcon,
  UmbrellaIcon,
  WatchIcon,
} from "lucide-react";

export const registerFormControls = [
  {
    name: "userName",
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "man", label: "Man" },
      { id: "woman", label: "Woman" },
      { id: "accessories", label: "Accessories" },
      { id: "kids", label: "Kids" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi's", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter product sale price",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shopViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "man",
    label: "Man",
    path: "/shop/listing",
  },
  {
    id: "woman",
    label: "Woman",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Footwear",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Kids",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
];

export const categoryOptionsMap = {
  man: "Man",
  woman: "Woman",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
};
export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi's",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  category: [
    { id: "man", label: "Man" },
    { id: "woman", label: "Woman" },
    { id: "kids", label: "Kids" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const categoriesWithIcon = [
  { id: "man", label: "Man", icon: ShirtIcon },
  { id: "woman", label: "Woman", icon: CloudLightningIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

export const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: OrigamiIcon },
  { id: "adidas", label: "Adidas", icon: SquirrelIcon },
  { id: "puma", label: "Puma", icon: CatIcon },
  { id: "levi", label: "Levi's", icon: RabbitIcon },
  { id: "zara", label: "Zara", icon: BirdIcon },
  { id: "h&m", label: "H&M", icon: BugIcon },
];
