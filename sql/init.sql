-- Switch to the data_app database
\c data_app

-- Initialize the db schema
\i /docker-entrypoint-initdb.d/schemas.sql

-- Initialize the userdata tables & types
-- Types
\i /docker-entrypoint-initdb.d/schemas/userdata/user_roles.sql
\i /docker-entrypoint-initdb.d/schemas/userdata/user_status.sql
-- Tables
\i /docker-entrypoint-initdb.d/schemas/userdata/users.sql
\i /docker-entrypoint-initdb.d/schemas/userdata/userprofiles.sql
\i /docker-entrypoint-initdb.d/schemas/userdata/userpersonals.sql
