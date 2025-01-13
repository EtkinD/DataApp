CREATE TABLE IF NOT EXISTS userdata.users
(
    id               SERIAL PRIMARY KEY   NOT NULL,

    username         TEXT                 NOT NULL UNIQUE,
    email            TEXT                 NOT NULL UNIQUE,

    name             TEXT                 NOT NULL,
    last_name        TEXT                 NOT NULL,
    password         TEXT                 NOT NULL,

    role             userdata.user_roles  NOT NULL DEFAULT 'user',
    status           userdata.user_status NOT NULL DEFAULT 'active',

    joined_at        TIMESTAMP            NOT NULL DEFAULT NOW(),
    last_login_at    TIMESTAMP            NOT NULL DEFAULT NOW(),
    last_activity_at TIMESTAMP            NOT NULL DEFAULT NOW(),

    personal_id      INTEGER,
    profile_id       INTEGER
);
