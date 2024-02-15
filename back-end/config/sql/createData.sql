
-- database creation 
CREATE DATABASE appQuizDb
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

    id : 1,
        'quizName' : 'quiz121',
        'numberQuestion' : 3,
        'quizes' : [
         {
            Question: "Pergunta1?",
            Answer: "Resposta1!",
            'LastTimeDone': "2024-05-27",
            'DayToNextRetrieval': 4,
            'nRetrieval': 3
         },
         {
            Question: "Pergunta2?",
            Answer: "Resposta2!",
            'LastTimeDone': "2024-01-15",
            'DayToNextRetrieval': 4,
            'nRetrieval': 3
         },
         {
            Question: "Pergunta3?",
            Answer: "Resposta3!",
            'LastTimeDone': "2024-02-06",
            'DayToNextRetrieval': 1,
            'nRetrieval': 3
         }
        ]
     },

-- creating tables
CREATE TABLE quizInformation(
    id INT AUTO_INCREMENT PRIMARY KEY,
    quizName VARCHAR(16),
    numberQuestion INT,
    descriptionQuiz TEXT,
    category TEXT,
    quizes JSON
);
    -- dentro do json 
    -- DayToNextRetrieval INT,
    -- nRetrieval INT 
    -- LastTimeDone DATE,


CREATE TABLE quizzes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    uploadAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    questionsAndAnswers JSON
);








