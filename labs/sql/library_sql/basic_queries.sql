-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns


-- Get all information about all authors
SELECT * FROM authors;

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;

-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year >= '1900';
-- Get all authors born in the 20th century or later

-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality = 'United States of America';

-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = '1985';
-- Get all books published in 1985

-- Get all books published before 1989
SELECT * FROM books WHERE publication_date < '1989';

-- Get just the title of all books.
SELECT title FROM books;

-- Get just the year that 'A Dance with Dragons' was published
SELECT publication_date FROM books WHERE title='A Dance with Dragons';

  -- Cry when you realize how long it's been
--Insert sadface emoji

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title LIKE UPPER'%the%';

-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES ('William Huizenga', 'United States of America', 1989);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title, publication_date, author_id) VALUES ('Where are all the sane people?', 2017, 10);
INSERT INTO books (title, publication_date, author_id) VALUES (E'How I survived the America\'s communist uprising', 2022, 10);

-- Update one of your books to have a new title
UPDATE books SET title='Da fuck is happenin' WHERE title='Where are all the sane people?';

-- Delete your books
DELETE FROM books WHERE author_id = '10';

-- Delete your author entry
DELETE FROM authors WHERE name='William Huizenga';
