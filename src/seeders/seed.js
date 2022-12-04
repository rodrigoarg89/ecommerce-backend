const db = require("../utils/database");
const { Users, Orders, Products } = require("../models");
const initModels = require("../models/initModels");

initModels();

const users = [
  {
    username: "robert24",
    email: "rob@gmail.com",
    password: "1234",
  },
  {
    username: "Peter200",
    email: "pet@hotmail.com",
    password: "123456",
  },
  {
    username: "Pancho32",
    email: "francisco@email.com",
    password: "1234",
  },
];

const products = [
  { 
    nameProduct: "Audifonos Auriculares Dj Tipo Diadema Plata Pioneer Hdj-x5-s" , 
    price: "9,99", 
    availableQty: 15,
    status: true,
    createdBy: 1,
    imageURL: {
      1: "https://http2.mlstatic.com/D_NQ_NP_889843-MLM29497793224_022019-O.webp", 
      2: "https://http2.mlstatic.com/D_NQ_NP_778605-MLM29497777437_022019-O.webp",
      3: "https://http2.mlstatic.com/D_NQ_NP_757168-MLM29497768493_022019-O.webp"
      },
  } ,
  { 
    nameProduct: "Audífonos Shure SRH840 negro" , 
    price: "14,99", 
    availableQty: 15,
    status: true,
    createdBy: 1,
    imageURL: {
      1: "https://http2.mlstatic.com/D_NQ_NP_722025-MLA41179628436_032020-O.webp", 
      2: "https://http2.mlstatic.com/D_NQ_NP_804946-MLA41179103981_032020-O.webp",
      3: "https://http2.mlstatic.com/D_NQ_NP_807962-MLA41179103982_032020-O.webp"
      },
  } ,

  { 
    nameProduct: "Audífonos inalámbricos Sony 1000X Series WH-1000XM4 black" , 
    price: "24,99", 
    availableQty: 15,
    status: true,
    createdBy: 1,
    imageURL: {
      1: "https://http2.mlstatic.com/D_NQ_NP_918604-MLA44483909501_012021-O.webp", 
      2: "https://http2.mlstatic.com/D_NQ_NP_880985-MLA44483791963_012021-O.webp",
      3: "https://http2.mlstatic.com/D_NQ_NP_651398-MLA44559891015_012021-O.webp"
      },
  },
  { 
    nameProduct: "Audífonos Pioneer HDJ-X10 negro" , 
    price: "29,99", 
    availableQty: 15,
    status: true,
    createdBy: 2,
    imageURL: {
      1: "https://http2.mlstatic.com/D_NQ_NP_833219-MLA41266101460_032020-O.webp", 
      2: "https://http2.mlstatic.com/D_NQ_NP_849979-MLA41266101462_032020-O.webp",
      3: "https://http2.mlstatic.com/D_NQ_NP_772639-MLA41266287254_032020-O.webp"
      },
  },
  { 
    nameProduct: "Audífonos inalámbricos Sony 1000X Series WH-1000XM5 negro" , 
    price: "44,99", 
    availableQty: 15,
    status: true,
    createdBy: 2,
    imageURL: {
      1: "https://http2.mlstatic.com/D_NQ_NP_942427-MLA50436038781_062022-O.webp", 
      2: "https://http2.mlstatic.com/D_NQ_NP_794797-MLA50436072460_062022-O.webp",
      3: "https://http2.mlstatic.com/D_NQ_NP_702651-MLA50436164034_062022-O.webp"
      },
  }
];

db.sync({ force: true }).then(() => {
  console.log("");
  users.forEach(async (user) => await Users.create(user));

  setTimeout(() => {
    products.forEach(async (product) => await Products.create(product));
  }, 300);
});
