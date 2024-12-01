const fs = require("fs");
const readline = require("readline");

// Function to load choices from a CSV file

  const choicesfunction loadChoices(filename) {
  const data = fs.readFileSync(filename, "utf-8");
  const lines = data.split("\n"); = lines.map((line) => line.split(",").map((word) => word.trim()));
  return choices;
}

// Function to load the story from a text file
function loadStory(filename) {
  const data = fs.readFileSync(filename, "utf-8");
  return data.split("\n");
}

// Function to prompt the user to select a word
function promptUserForWord(phrase, options, rl) {
  return new Promise((resolve) => {
    console.log(`Choose ${phrase}:`);
    options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

    rl.question("Enter your choice (1-5): ", (input) => {
      const choice = parseInt(input, 10);
      if (!isNaN(choice) && choice >= 1 && choice <= 5) {
        resolve(options[choice - 1].toUpperCase());
      } else {
        console.log("Invalid choice. Please enter a number between 1 and 5.");
        resolve(promptUserForWord(phrase, options, rl)); // Retry
      }
    });
  });
}

// Function to replace placeholders in the story
function replacePlaceholders(story, words) {
  return story.map((line) => {
    words.forEach((word, index) => {
      const placeholder = `_${index + 1}_`;
      line = line.split(placeholder).join(word);
    });
    return line;
  });
}

// Main function
async function main() {
  const choicesFile = "the_choices_file.csv";
  const storyFile = "the_story_file.txt";

  const choices = loadChoices(choicesFile);
  const story = loadStory(storyFile);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const selectedWords = [];

  for (const line of choices) {
    const phrase = line[0];
    const options = line.slice(1);
    const selectedWord = await promptUserForWord(phrase, options, rl);
    selectedWords.push(selectedWord);
  }

  rl.close();

  const completedStory = replacePlaceholders(story, selectedWords);

  console.log("\nHere is your completed story:\n");
  completedStory.forEach((line) => console.log(line));
}

main();
