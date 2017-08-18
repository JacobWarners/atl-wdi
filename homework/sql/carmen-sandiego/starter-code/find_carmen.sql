SELECT population, country, continent FROM country ORDER BY population ASC;

SELECT * FROM country WHERE population = 1000;

SELECT * FROM countrylanguage WHERE countrycode = 'VAT';

SELECT * FROM countrylanguage WHERE language = 'Italian';

SELECT * FROM city WHERE countrycode = 'SMR';

SELECT * FROM city WHERE name LIKE 'San %';

SELECT * FROM country WHERE name='Argentina';

SELECT * FROM city WHERE countrycode='ARG';

SELECT * FROM city WHERE population = 91084;

-- She is in Santa Monica, CA!
