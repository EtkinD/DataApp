DO
$$
    BEGIN
        CREATE TYPE userdata.user_status AS ENUM (
            'active',
            'inactive',
            'suspended',
            'banned'
            );
    EXCEPTION
        WHEN duplicate_object THEN RAISE NOTICE 'user_status type already exists';
    END
$$;
