CREATE TABLE IF NOT EXISTS userdata.userprofiles
(
    id              SERIAL PRIMARY KEY NOT NULL,
    user_id         INTEGER            NOT NULL UNIQUE,

    profile_picture BYTEA,
    bio             TEXT,
    website         TEXT,

    location        TEXT,

    last_updated_at TIMESTAMP          NOT NULL DEFAULT NOW(),

    FOREIGN KEY (user_id) REFERENCES userdata.users (id)
);



ALTER TABLE userdata.users
    ADD CONSTRAINT fk_userprofiles
        FOREIGN KEY (profile_id) REFERENCES userdata.userprofiles (id);
