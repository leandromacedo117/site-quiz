
-- database creation 
CREATE DATABASE appQuizDb
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- creating tables
CREATE TABLE quizInformation(
    id INTEGER PRIMARY KEY,
    quizName VARCHAR(16),
    numberQuestion INT,
    LastTimeDone DATE,
    DayToNextRetrieval INT,
    descriptionQuiz TEXT

    
);


CREATE TABLE quizzes(
    id INTEGER PRIMARY KEY,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    uploadAt  DATETIME,
    questionsAndAnswers JSON
);






