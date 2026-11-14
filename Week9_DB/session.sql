-- 1. List the names and phones of all users.
SELECT name, phone FROM user;

-- 2. List all users, ordering them alphabetically by name.
SELECT *  FROM user ORDER BY name ASC;

-- 3. Find the name of the user with id = 10.
SELECT name FROM user WHERE id = 10;

-- 4. Find the 3 oldest tasks based on creation date.
SELECT * FROM task ORDER BY created ASC LIMIT 3;

-- 5. Find all tasks that have no description.
SELECT * FROM task WHERE description IS NULL OR description = '';

-- 6. Find all users whose email ends with .com.
SELECT * FROM user WHERE email LIKE '%.com';

-- 7. List the titles of all tasks that are not started.
SELECT t.title FROM task t JOIN status s ON t.status_id = s.id WHERE s.name = 'Not started';

-- 8. Find the tasks assigned to user 1 that are in progress.
SELECT t.* FROM task t JOIN status s ON t.status_id = s.id WHERE t.user_id = 1 AND s.name = 'In progress';

-- 9. Find tasks whose title contains database.
SELECT * FROM task WHERE LOWER(title) LIKE '%database%';

-- 10. List the names of users who have no phone number.
SELECT name FROM user WHERE phone IS NULL OR phone = '';

-- 11. Show the five newest tasks by creation date, including their titles and creation dates.
SELECT title, created FROM task ORDER BY created DESC LIMIT 5;

-- 12. List tasks that are either not started or in progress, ordered by title.
SELECT t.* 
FROM task t 
JOIN status s ON t.status_id = s.id 
WHERE s.name IN ('Not started', 'In progress') 
ORDER BY t.title ASC;

-- 1. Change the status of task 1 to Done.
UPDATE task 
SET status_id = (SELECT id FROM status WHERE name = 'Done'), 
    updated = CURRENT_TIMESTAMP 
WHERE id = 1;

-- 2. Change the description of task 2 to Write and test SELECT queries.
UPDATE task 
SET description = 'Write and test SELECT queries', 
    updated = CURRENT_TIMESTAMP 
WHERE id = 2;

-- 3. Change the title of task 3 to Practice: Review query results.
UPDATE task 
SET title = 'Practice: Review query results', 
    updated = CURRENT_TIMESTAMP 
WHERE id = 3;

-- 4. Change the due date of task 4 to 2031-01-15.
UPDATE task 
SET due_date = '2031-01-15', 
    updated = CURRENT_TIMESTAMP 
WHERE id = 4;

-- 5. Change the phone number of user 1 to 12345678.
UPDATE user 
SET phone = '12345678' 
WHERE id = 1;

-- 6. Change the name of tag 1 to Practice.
UPDATE tag 
SET name = 'Practice' 
WHERE id = 1;

-- 1. Add a task titled Practice 1: Read SQL, with status Not started and assigned to user 1.
INSERT INTO task (title, created, updated, status_id, user_id) 
VALUES ('Practice 1: Read SQL', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, (SELECT id FROM status WHERE name = 'Not started'), 1);

-- 2. Add Practice 2: Write queries, with status Not started and a description of your choice.
INSERT INTO task (title, description, created, updated, status_id) 
VALUES ('Practice 2: Write queries', 'Practice writing basic and intermediate SELECT statements.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, (SELECT id FROM status WHERE name = 'Not started'));

-- 3. Add Practice 3: Review results, with status In progress and assigned to user 1.
INSERT INTO task (title, created, updated, status_id, user_id) 
VALUES ('Practice 3: Review results', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, (SELECT id FROM status WHERE name = 'In progress'), 1);

-- 4. Add Practice 4: Plan a project, with status Not started and a due date of 2030-12-31.
INSERT INTO task (title, created, updated, due_date, status_id) 
VALUES ('Practice 4: Plan a project', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2030-12-31', (SELECT id FROM status WHERE name = 'Not started'));

-- 5. Add a user with a distinctive name and email address of your choice. Leave the optional phone number empty, and do not assign this user to any tasks.
INSERT INTO user (name, email) VALUES ('Jane Doe', 'jane.doe@example.com');

-- 6. Add a tag with a distinctive name of your choice.
INSERT INTO tag (name) VALUES ('Database');

-- 1. Delete the task you added for INSERT exercise 1.
DELETE FROM task WHERE title = 'Practice 1: Read SQL';

-- 2. Delete the user you added for INSERT exercise 5.
DELETE FROM user WHERE name = 'Jane Doe';

-- 3. Delete the tag you added for INSERT exercise 6.
DELETE FROM tag WHERE name = 'Database';

-- 1. Add yourself as a new user in the user table. Remember that name and email are required.
INSERT INTO user (name, email) VALUES ('Alex Smith', 'alex.smith@example.com');

-- 3. Find your new user's id.
SELECT id, name, email FROM user WHERE email = 'alex.smith@example.com';

-- 4. Create 2 or more tasks assigned to yourself (use your id as the user_id).
INSERT INTO task (title, description, created, updated, status_id, user_id) 
VALUES 
('Learn Advanced SQL', 'Study window functions and CTEs.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, (SELECT id FROM status WHERE name = 'Not started'), (SELECT id FROM user WHERE email = 'alex.smith@example.com')),
('Build Database Schema', 'Design tables for the practice project.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, (SELECT id FROM status WHERE name = 'Not started'), (SELECT id FROM user WHERE email = 'alex.smith@example.com'));

-- 5. Update one of the tasks you created so its status is In Progress.
UPDATE task 
SET status_id = (SELECT id FROM status WHERE name = 'In progress'), 
    updated = CURRENT_TIMESTAMP 
WHERE title = 'Learn Advanced SQL' 
  AND user_id = (SELECT id FROM user WHERE email = 'alex.smith@example.com');

-- 6. Retrieve only the title and description of all tasks assigned to you.
SELECT title, description 
FROM task 
WHERE user_id = (SELECT id FROM user WHERE email = 'alex.smith@example.com');

-- 7. Delete a task that you no longer need.
DELETE FROM task 
WHERE title = 'Build Database Schema' 
  AND user_id = (SELECT id FROM user WHERE email = 'alex.smith@example.com');

-- 8. Create a new table named practice_book with an INTEGER PRIMARY KEY called id, a required TEXT column called title, and an optional TEXT column called author.
CREATE TABLE practice_book (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT
);

-- 9. Insert a book into your new table, then use SELECT to check its id, title, and author.
INSERT INTO practice_book (title, author) VALUES ('SQL for Beginners', 'Jane Doe');
SELECT id, title, author FROM practice_book;

-- 1. Count the tasks: Return the total number of rows in task.
SELECT COUNT(*) FROM task;

-- 2. Count tasks without valid due dates: Count tasks with a missing or unparseable due date.
SELECT COUNT(*) FROM task WHERE due_date IS NULL;

-- 3. Done tasks: Return all columns of tasks marked Done.
SELECT t.* 
FROM task t 
JOIN status s ON t.status_id = s.id 
WHERE s.name = 'Done';

-- 4. Tasks not done: Return all columns of tasks not marked Done.
SELECT t.* 
FROM task t 
JOIN status s ON t.status_id = s.id 
WHERE s.name != 'Done';

-- 5. Tasks by creation date: Return all columns of every task, ordered by creation date from newest to oldest.
SELECT * FROM task ORDER BY created DESC;

-- 6. Most recently created task: Return all columns of the single most recently created task.
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- 7. Tasks mentioning database: Return title and due_date for tasks whose title or description contains database, ignoring case.
SELECT title, due_date 
FROM task 
WHERE LOWER(title) LIKE '%database%' OR LOWER(description) LIKE '%database%';

-- 8. Task titles and IDs: Return id and title for every task, ordered by ID ascending.
SELECT id, title FROM task ORDER BY id ASC;

-- 9. Tasks in progress: Return id and title for tasks with status_id 2, ordered by ID ascending.
SELECT id, title FROM task WHERE status_id = 2 ORDER BY id ASC;

-- 10. Tasks without due dates: Return id and title for tasks whose due_date is NULL, ordered by ID ascending.
SELECT id, title FROM task WHERE due_date IS NULL ORDER BY id ASC;

-- 11. Tasks alphabetically: Return id and title, ordered by title from A to Z.
SELECT id, title FROM task ORDER BY title ASC;

-- 12. Five highest task IDs: Return id and title for the five tasks with the highest IDs, highest first.
SELECT id, title FROM task ORDER BY id DESC LIMIT 5;

-- 13. Unassigned tasks: Return id and title for tasks with no assigned user, ordered by ID ascending.
SELECT id, title FROM task WHERE user_id IS NULL ORDER BY id ASC;

-- 14. Rename a task: Change task 1's title to Wash the laundry, without changing anything else.
UPDATE task 
SET title = 'Wash the laundry', 
    updated = CURRENT_TIMESTAMP 
WHERE id = 1;

-- 15. Mark a task done: Set status_id to 3 for task 22 only.
UPDATE task 
SET status_id = 3, 
    updated = CURRENT_TIMESTAMP 
WHERE id = 22;

-- 16. Assign an unassigned task: Set task 23's user_id to 11, without changing anything else.
UPDATE task 
SET user_id = 11, 
    updated = CURRENT_TIMESTAMP 
WHERE id = 23;

-- 17. Set unassigned task status: Set status_id to 1 for tasks with no assigned user: tasks 23 and 35. Do not change other rows or columns.
UPDATE task 
SET status_id = 1, 
    updated = CURRENT_TIMESTAMP 
WHERE id IN (23, 35);

-- 18. Delete one task: Delete task 35 only, without changing other rows.
DELETE FROM task WHERE id = 35;

-- 19. Remove one task tag: Remove the Personal tag association (tag_id 2) from task 1 only. Do not delete the task or other associations.
DELETE FROM task_tag 
WHERE task_id = 1 AND tag_id = 2;

-- 20. Create task notes table: Create task_note with id INTEGER PRIMARY KEY, task_id INTEGER NOT NULL, and note TEXT NOT NULL, in that order. Add a foreign key from task_id to task(id).
CREATE TABLE task_note (
    id INTEGER PRIMARY KEY,
    task_id INTEGER NOT NULL,
    note TEXT NOT NULL,
    FOREIGN KEY (task_id) REFERENCES task(id)
);