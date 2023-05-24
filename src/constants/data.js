import images from "./images";

const cuisines = [
  {
    title: "Abgoosht",
    price: "1$",
    tags: " Slow-Cooked meat water ",
  },
  {
    title: "Dizi",
    price: "5$",
    tags: "mixed of lamb, chickpeas, white beans, potatoes, tomatoes, and onions",
  },
  {
    title: "Chelo Kabab",
    price: "6$",
    tags: " lamb , Persian rice,grilled tomatoes, parsley and mint ",
  },
  {
    title: "Joojeh Kabob",
    price: "5$",
    tags: "marinated grilled chicken pieces , Persian rice , grilled tomatoes, and fresh herbs ",
  },
  {
    title: "Chelo Goosht",
    price: "6$",
    tags: "sautéed marinated  meat of lamb or beef,Persian rice , grilled tomatoes ,green pepper",
  },
];

const drinks = [
  {
    title: "ButtterMilk Gassy",
    price: "1$",
  },
  {
    title: "Soda",
    price: "1$",
  },
  {
    title: "Traditional ButterMilk",
    price: "2$",
  },
  {
    title: "Shirazi salad",
    price: "2$",
    tags: "chopped tomatoes, cucumbers, and onions, parsley and mint,olive oil, lemon juice, and salt ",
  },
  {
    title: "Torshi",
    price: "1$",
    tags: "cucumbers, eggplants, carrots, and cauliflower that mixtured to ferment for several weeks",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Positive cooking magazine",
    subtitle:
      "We are thrilled to announce that Dizi restaurant has been featured on the front page of Positive Cooking magazine! This prestigious publication is dedicated to showcasing chefs and restaurants that are making a positive impact in their communities through their food and service.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "The oldest traditional Iranian Daisy restaurant.",
  },
  {
    imgUrl: images.award05,
    title: "Just one choice but good choice",
    subtitle: "first choice of websites like tripadvisor , ...",
  },

];
const data = { cuisines, drinks, awards };
export default data;
