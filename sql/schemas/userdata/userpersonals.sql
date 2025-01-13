CREATE TABLE IF NOT EXISTS userdata.userpersonals
(
    id              SERIAL PRIMARY KEY NOT NULL,
    user_id         INTEGER            NOT NULL UNIQUE,

    phone           VARCHAR(20),
    address         VARCHAR(255),
    city            VARCHAR(100),
    country         VARCHAR(100),
    postal_code     VARCHAR(20),
    birth_date      TIMESTAMP,

    last_updated_at TIMESTAMP          NOT NULL DEFAULT NOW(),

    FOREIGN KEY (user_id) REFERENCES userdata.users (id)
);

ALTER TABLE userdata.users
    ADD CONSTRAINT fk_userpersonals
        FOREIGN KEY (personal_id) REFERENCES userdata.userpersonals (id);
