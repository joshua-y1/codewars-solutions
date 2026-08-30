-- Is it a palindrom
-- 8 Kyu
-- https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/sql

SELECT str, LOWER(str) = REVERSE(LOWER(str)) AS res
FROM ispalindrome;