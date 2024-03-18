class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    // Make a copy of the original array
    let choicesCopy = this.choices.slice();
    let numElements = choicesCopy.length;
    let shuffledChoices = [];

    while (numElements > 0) {
      // Generate a random index based on the remaining elements
      let randomIndex = Math.floor(Math.random() * numElements);
      numElements--; // Decrement for the next iteration

      // Pull the element from the copied array and push it into the shuffled array
      let [removedElement] = choicesCopy.splice(randomIndex, 1);
      shuffledChoices.push(removedElement);
    }

    // Set the original choices to the new shuffled array
    this.choices = shuffledChoices;
  }
}
