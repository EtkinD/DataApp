-- Switch to the data_app database
\c data_app

-- Initialize the db schema
\ir schemas.sql

-- Initialize the types & tables etc. for the schemas
\ir schemas/index.sql
