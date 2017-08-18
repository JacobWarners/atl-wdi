SELECT name FROM teams;

SELECT stadium, head_coach FROM teams;

SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';

SELECT COUNT(*) FROM players;

SELECT name, head_coach FROM teams WHERE conference = 'AFC' OR conference = 'NFC' AND division = 'North' OR division = 'East';

SELECT * FROM players ORDER BY salary DESC LIMIT 50;

SELECT AVG(salary) FROM players;

SELECT name, position FROM players WHERE salary > 10000000;

SELECT * FROM players ORDER BY salary DESC LIMIT 1;

SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;

SELECT AVG(salary) FROM players WHERE position = 'DE';

SELECT * FROM players WHERE team_id = '1';

SELECT SUM(salary) FROM players WHERE team_id = '18';

SELECT name FROM players WHERE team_id = '23' ORDER BY salary ASC LIMIT 1;
