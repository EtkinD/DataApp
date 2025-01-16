-- Switch to the data_app database
\c data_app

-- Initialize the db schema
\ir schemas.sql

-- Initialize the userdata tables & types
-- Types
\ir schemas/userdata/user_roles.sql
\ir schemas/userdata/user_status.sql
-- Tables
\ir schemas/userdata/users.sql
\ir schemas/userdata/userprofiles.sql
\ir schemas/userdata/userpersonals.sql
