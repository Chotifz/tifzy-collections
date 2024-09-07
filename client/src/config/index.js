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
    placeholder: "Enter product description",
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
];
