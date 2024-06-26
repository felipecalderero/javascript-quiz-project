class Quiz {
  // YOUR CODE HERE:

  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    // Make a copy of the original array
    let questionsCopy = this.questions.slice();
    let numElements = questionsCopy.length;
    let shuffledQuestions = [];

    while (numElements > 0) {
      // Generate a random index based on the remaining elements
      let randomIndex = Math.floor(Math.random() * numElements);
      numElements--; // Decrement for the next iteration

      // Pull the element from the copied array and push it into the shuffled array
      let [removedElement] = questionsCopy.splice(randomIndex, 1);
      shuffledQuestions.push(removedElement);
    }

    // Set the original questions to the new shuffled array
    this.questions = shuffledQuestions;
  }

  checkAnswer(answer) {
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty === "number" && difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter((currentQuestion) => {
        return currentQuestion.difficulty === difficulty;
      });
    }
  }

  averageDifficulty() {
    const result = this.questions.reduce(
      (accumulator, currValue) => (accumulator += currValue.difficulty),
      0
    );
    return result / this.questions.length;
  }
}
