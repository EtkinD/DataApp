DO
$$
    BEGIN
        CREATE TYPE userdata.user_roles AS ENUM (
            'admin',
            'moderator',
            'editor',
            'author',
            'contributor',
            'user',
            'guest'
            );
    EXCEPTION
        WHEN duplicate_object THEN RAISE NOTICE 'user_roles type already exists';
    END
$$;
