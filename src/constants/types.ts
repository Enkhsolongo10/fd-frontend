export type CategoryType = {
  _id: string;
  name: string;
};

export type FoodType = {
  name: string;
  category: string;
  price: string;
  image: string;
  ingredients: string;
  _id: string;
};

export type FormType = {
  name: string;
  price: string;
  ingredients: string;
  image: string;
  category: string;
};
