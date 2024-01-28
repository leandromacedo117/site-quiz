
-- database creation 
CREATE DATABASE appQuizDb
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- creating tables
CREATE TABLE quizInformation(
    id INT AUTO_INCREMENT PRIMARY KEY,
    quizName VARCHAR(16),
    numberQuestion INT,
    LastTimeDone DATE,
    DayToNextRetrieval INT,
    descriptionQuiz TEXT,
    category TEXT
    
);


CREATE TABLE quizzes(
    id INTEGER PRIMARY KEY,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    uploadAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    questionsAndAnswers JSON
);







