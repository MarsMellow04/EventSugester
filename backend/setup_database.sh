#! /bin/bash

# Example users
sqlite3 instance/project.db "DELETE FROM users;"
sqlite3 instance/project.db "INSERT INTO users VALUES ('coolemail@example.org', 'Ben Ben', 'MQ');"
sqlite3 instance/project.db "INSERT INTO users VALUES ('wowemail@example.org', 'John Johnson', 'Cloud');"
sqlite3 instance/project.db "INSERT INTO users VALUES ('epicemail2@example.org', 'Stan Stanson', 'ACE');"

# Example events
sqlite3 instance/project.db "DELETE FROM events;"
sqlite3 instance/project.db "INSERT INTO events VALUES (0, 'FED', 'This is a FED event. We will be doing front-end development for Hursley. There will be free food. Beginners welcome', 'epicemail2@example.org', 100, 1, 100, 1, 1);"
sqlite3 instance/project.db "INSERT INTO events VALUES (1, 'Christmas Dinner', 'Get into the seasonal mood with a dinner! Afterwards, we will do a quiz', 'coolemail@example.org', 300, 100, 450, 15, 32);"
sqlite3 instance/project.db "INSERT INTO events VALUES (2, 'Arvind Office Hours', 'Arvind will take office hours and discuss mentoring, watsonx and IBM Cloud. Beginners welcome', 'coolemail@example.org', 1000, 970, 999, 200, 600);"

# Example tags
sqlite3 instance/project.db "DELETE FROM tags;"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('FED');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('front-end');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('hursley');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('free-food');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('beginners');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('christmas');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('seasonal');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('dinner');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('quiz');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('Arvind');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('mentoring');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('watsonx');"
sqlite3 instance/project.db "INSERT INTO tags VALUES ('IBM Cloud');"

# Example user tags
sqlite3 instance/project.db "DELETE FROM usertags;"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (0, 0.45, 'FED', 'coolemail@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (1, 0.65, 'dinner', 'coolemail@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (2, 0.6, 'IBM Cloud', 'coolemail@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (3, 0.7, 'free-food', 'coolemail@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (4, 0.1, 'hursley', 'wowemail@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (5, 0.35, 'IBM Cloud', 'wowemail@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (6, 0.8, 'quiz', 'wowemail@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (7, 1.0, 'Arvind', 'epicemail2@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (8, 0.7, 'christmas', 'epicemail2@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (9, 0.4, 'beginners', 'epicemail2@example.org');"
sqlite3 instance/project.db "INSERT INTO usertags VALUES (10, 0.35, 'free-food', 'epicemail2@example.org');"


# Example event signup
sqlite3 instance/project.db "DELETE FROM eventsignup;"
sqlite3 instance/project.db "INSERT INTO eventsignup VALUES ('coolemail@example.org', 0);"
sqlite3 instance/project.db "INSERT INTO eventsignup VALUES ('coolemail@example.org', 1);"
sqlite3 instance/project.db "INSERT INTO eventsignup VALUES ('wowemail@example.org', 1);"
sqlite3 instance/project.db "INSERT INTO eventsignup VALUES ('wowemail@example.org', 2);"
sqlite3 instance/project.db "INSERT INTO eventsignup VALUES ('epicemail2@example.org', 3);"
sqlite3 instance/project.db "INSERT INTO eventsignup VALUES ('epicemail2@example.org', 2);"

# Example tag lookup
sqlite3 instance/project.db "DELETE FROM taglookup;"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (0, 'FED');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (0, 'front-end');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (0, 'hursley');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (0, 'free-food');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (0, 'beginners');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (1, 'christmas');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (1, 'seasonal');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (1, 'dinner');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (1, 'quiz');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (2, 'Arvind');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (2, 'mentoring');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (2, 'watsonx');"
sqlite3 instance/project.db "INSERT INTO taglookup VALUES (2, 'IBM Cloud');"