const mockApiData = [
    {
      id: 1,
      type: 'flashcard',
      frontContent: 'What is the capital of Italy?',
      backContent: 'The capital of Italy is Rome.'
    },
    {
      id: 2,
      type: 'mcq',
      question: 'What is the largest planet in our Solar System?',
      options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      correctAnswer: 'Jupiter',
      explanation: 'Jupiter is the largest planet in our Solar System.'
    },
    {
      id: 3,
      type: 'flashcard',
      frontContent: 'Who wrote "To Kill a Mockingbird"?',
      backContent: 'Harper Lee wrote "To Kill a Mockingbird."'
    },
    {
      id: 4,
      type: 'mcq',
      question: 'Which element has the chemical symbol "O"?',
      options: ['Gold', 'Oxygen', 'Silver', 'Iron'],
      correctAnswer: 'Oxygen',
      explanation: 'The chemical symbol "O" stands for Oxygen.'
    },
    {
      id: 5,
      type: 'flashcard',
      frontContent: 'In which country is the city of Istanbul located?',
      backContent: 'Istanbul is located in Turkey.'
    },
    {
      id: 6,
      type: 'mcq',
      question: 'What is the hardest natural substance on Earth?',
      options: ['Diamond', 'Iron', 'Quartz', 'Granite'],
      correctAnswer: 'Diamond',
      explanation: 'Diamond is the hardest natural substance on Earth.'
    },
    {
      id: 7,
      type: 'flashcard',
      frontContent: 'What is the currency of Japan?',
      backContent: 'The currency of Japan is the Yen.'
    },
    {
      id: 8,
      type: 'mcq',
      question: 'Which language is primarily spoken in Brazil?',
      options: ['Spanish', 'Portuguese', 'English', 'French'],
      correctAnswer: 'Portuguese',
      explanation: 'Portuguese is the primary language spoken in Brazil.'
    },
    {
      id: 9,
      type: 'flashcard',
      frontContent: 'What is the chemical formula for water?',
      backContent: 'The chemical formula for water is H2O.'
    },
    {
      id: 10,
      type: 'mcq',
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci',
      explanation: 'Leonardo da Vinci painted the Mona Lisa.'
    },
    {
      id: 11,
      type: 'flashcard',
      frontContent: 'How many continents are there in the world?',
      backContent: 'There are seven continents in the world.'
    },
    {
      id: 12,
      type: 'mcq',
      question: 'What is the smallest bone in the human body?',
      options: ['Stapes', 'Femur', 'Humerus', 'Tibia'],
      correctAnswer: 'Stapes',
      explanation: 'The stapes is the smallest bone in the human body, located in the ear.'
    },
    {
      id: 13,
      type: 'flashcard',
      frontContent: 'What is the main ingredient in guacamole?',
      backContent: 'The main ingredient in guacamole is avocado.'
    },
    {
      id: 14,
      type: 'mcq',
      question: 'What is the capital city of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 'Canberra',
      explanation: 'Canberra is the capital city of Australia.'
    },
    {
      id: 15,
      type: 'flashcard',
      frontContent: 'Who is known as the father of modern physics?',
      backContent: 'Albert Einstein is known as the father of modern physics.'
    },
    {
      id: 16,
      type: 'mcq',
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Saturn', 'Venus'],
      correctAnswer: 'Mars',
      explanation: 'Mars is known as the Red Planet.'
    },
    {
      id: 17,
      type: 'flashcard',
      frontContent: 'In which year did World War II end?',
      backContent: 'World War II ended in 1945.'
    },
    {
      id: 18,
      type: 'mcq',
      question: 'What gas do plants absorb from the atmosphere during photosynthesis?',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide',
      explanation: 'Plants absorb Carbon Dioxide from the atmosphere during photosynthesis.'
    },
    {
      id: 19,
      type: 'flashcard',
      frontContent: 'What is the longest river in the world?',
      backContent: 'The Nile River is the longest river in the world.'
    },
    {
      id: 20,
      type: 'mcq',
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
      correctAnswer: 'William Shakespeare',
      explanation: 'William Shakespeare wrote the play "Romeo and Juliet."'
    },
    {
      id: 21,
      type: 'flashcard',
      frontContent: 'What is the primary language spoken in Spain?',
      backContent: 'The primary language spoken in Spain is Spanish.'
    },
    {
      id: 22,
      type: 'mcq',
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Japan', 'South Korea', 'Thailand'],
      correctAnswer: 'Japan',
      explanation: 'Japan is known as the Land of the Rising Sun.'
    }
  ];
  
  export default mockApiData;
  