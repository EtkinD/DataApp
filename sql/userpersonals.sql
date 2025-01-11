CREATE TABLE IF NOT EXISTS userpersonals
(
    id          SERIAL PRIMARY KEY NOT NULL,
    user_id     INTEGER            NOT NULL,
    phone       VARCHAR(20),
    address     VARCHAR(255),
    city        VARCHAR(100),
    country     VARCHAR(100),
    postal_code VARCHAR(20),
    birth_date  TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    UNIQUE (user_id)
);
