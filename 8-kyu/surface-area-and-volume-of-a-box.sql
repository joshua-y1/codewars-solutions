-- Surface Area and Volume of a Box
-- 8 Kyu
-- https://www.codewars.com/kata/565f5825379664a26b00007c/train/sql

-- # write your SQL statement here: 
-- you are given a table 'box' with columns: width (int), height (int), depth (int)
-- return a query with columns: width, height, depth, area (int), volume (int)
-- sort results by area ascending, then volume ascending, then width ascending, then height ascending

SELECT *, 2*(width*depth + width*height + depth*height) AS area, width * height * depth AS volume 
FROM box
ORDER BY area, volume, width, height ASC
