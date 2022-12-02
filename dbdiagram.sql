CREATE TABLE "user" (
  "id" serial PRIMARY KEY,
  "username" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "products" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "price" varchar NOT NULL,
  "available_qty" integer NOT NULL,
  "status" boolean NOT NULL,
  "created_by" int NOT NULL,
  "image_url" varchar NOT NULL
);

CREATE TABLE "cart" (
  "id" serial PRIMARY KEY,
  "user_id" int NOT NULL,
  "orders_id" int NOT NULL,
  "total_price" varchar NOT NULL
);

CREATE TABLE "productInCart" (
  "id" serial PRIMARY KEY,
  "cart_id" int NOT NULL,
  "product_id" int NOT NULL,
  "quantity" int NOT NULL,
  "price" varchar NOT NULL,
  "status" boolean NOT NULL
);

CREATE TABLE "orders" (
  "id" serial PRIMARY KEY,
  "user_id" int NOT NULL,
  "total_price" varchar NOT NULL,
  "status" boolean NOT NULL
);

CREATE TABLE "productInOrder" (
  "id" serial PRIMARY KEY,
  "order_id" int NOT NULL,
  "product_id" int NOT NULL,
  "quantity" int NOT NULL,
  "price" varchar NOT NULL,
  "status" boolean NOT NULL
);

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "cart" ADD FOREIGN KEY ("orders_id") REFERENCES "orders" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("created_by") REFERENCES "user" ("id");

ALTER TABLE "cart" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "productInCart" ADD FOREIGN KEY ("cart_id") REFERENCES "cart" ("id");

ALTER TABLE "productInCart" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "productInOrder" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "productInOrder" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
