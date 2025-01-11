CREATE TABLE IF NOT EXISTS userprofiles
(
    id              SERIAL PRIMARY KEY NOT NULL,
    user_id         INTEGER            NOT NULL,
    profile_picture INTEGER[],
    cover_picture   INTEGER[],
    bio             TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    UNIQUE (user_id)
);
