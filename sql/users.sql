CREATE TABLE IF NOT EXISTS users
(
    id            SERIAL PRIMARY KEY NOT NULL,
    username      TEXT               NOT NULL UNIQUE,
    name          TEXT               NOT NULL,
    last_name     TEXT               NOT NULL,
    email         TEXT               NOT NULL UNIQUE,
    password      TEXT               NOT NULL,
    join_date     TIMESTAMP          NOT NULL DEFAULT NOW(),
    last_login    TIMESTAMP          NOT NULL DEFAULT NOW(),
    last_activity TIMESTAMP          NOT NULL DEFAULT NOW(),
    personal_id   INTEGER,
    profile_id    INTEGER
);

