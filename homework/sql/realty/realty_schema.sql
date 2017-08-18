DROP TABLE if EXISTS apartments;
DROP TABLE if EXISTS offices;
DROP TABLE if EXISTS storefronts;

CREATE TABLE apartments(
  id SERIAL PRIMARY KEY,
  apt_num INTEGER,
  bedrooms INTEGER,
  bathrooms INTEGER,
  address VARCHAR NOT NULL,
  tenant VARCHAR,
  occupied BOOLEAN,
  sqft INTEGER,
  price INTEGER
);

CREATE TABLE offices (
  id SERIAL PRIMARY KEY,
  office_num NUMERIC,
  floors INTEGER,
  sqft INTEGER,
  cubicles INTEGER,
  bathrooms INTEGER,
  address VARCHAR NOT NULL,
  name VARCHAR,
  occupied BOOLEAN,
  price INTEGER
);

CREATE TABLE storefronts (
  id SERIAL PRIMARY KEY,
  address VARCHAR NOT NULL,
  occupied BOOLEAN,
  price INTEGER,
  kitchen BOOLEAN,
  sq_ft INTEGER,
  owner VARCHAR,
  outdoor_seating BOOLEAN DEFAULT FALSE
);