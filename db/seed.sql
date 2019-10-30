CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(200),
    password VARCHAR(300),
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    collection VARCHAR(50),
    size VARCHAR(50),
    price FLOAT,
    scent VARCHAR(50),
    description VARCHAR(500),
    img TEXT
);
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    order_total FLOAT,
    order_date VARCHAR(50),
    user_id INT REFERENCES users(user_id)
);
CREATE TABLE order_products(
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    product_quantity INT
);


SELECT *
FROM users
JOIN orders ON users.user_id = orders.user_id
JOIN order_products ON orders.order_id = order_products.order_id
WHERE users.user_id = 1