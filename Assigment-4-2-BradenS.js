const fs = require("fs");
const readlineSync = require("readline-sync");

function main() {
// File setup and seperation -----------------------------------------------------------------------------------------------------------------
    const choicesFile = "the_choices_file.csv";
    const storyFile = "the_story_file.txt";
  
    const choiceData = fs.readFileSync(choicesFile, "utf-8");
    const lines = choiceData.split("\n");
    const choices = lines.map((line) => line.split(",").map((word) => word.trim()));

    let storyData = fs.readFileSync(storyFile, "utf-8");
    
 // Calculation of choices  -----------------------------------------------------------------------------------------------------------------
    for(var index = 0; index < 7; index++){ // for loops to run all seven choices

        if(index == 0){
        let check = 0

        console.log(`Please choose ${choices[0][0]}`);// lists choice section name

            for(var i = 1;i < 6;i++){
                console.log(`${i}. ${choices[index][i]}`);// loops lists choices 
                }

            while (check != 1){// keeps loop going until dcorrect value is inputted 
                var wordChoice = readlineSync.question("Enter your choice (1-5): ");

            if(!isNaN(wordChoice) && wordChoice >= 1 && wordChoice <= 5) {
                check = 1
            }else {console.log("Invalid choice. Please enter a number between 1 and 5.");}
                    }

        }else if(index == 1){
           let check = 0

        console.log(`\nPlease choose ${choices[1][0]}`);// lists choice section name

            for(var i = 1;i < 6;i++){
                console.log(`${i}. ${choices[index][i]}`);// loops lists choices 
                }

            while (check != 1){// keeps loop going until dcorrect value is inputted 
                var wordChoice = readlineSync.question("Enter your choice (1-5): ");

            if(!isNaN(wordChoice) && wordChoice >= 1 && wordChoice <= 5) {
                check = 1
            }else {console.log("Invalid choice. Please enter a number between 1 and 5.");}
                    }
        }else if(index == 2){
            let check = 0

        console.log(`\nPlease choose ${choices[2][0]}`);// lists choice section name

            for(var i = 1;i < 6;i++){
                console.log(`${i}. ${choices[index][i]}`);// loops lists choices 
                }

            while (check != 1){// keeps loop going until dcorrect value is inputted 
                var wordChoice = readlineSync.question("Enter your choice (1-5): ");

            if(!isNaN(wordChoice) && wordChoice >= 1 && wordChoice <= 5) {
                check = 1
            }else {console.log("Invalid choice. Please enter a number between 1 and 5.");}
                    }
        }else if(index == 3){
            let check = 0

        console.log(`\nPlease choose ${choices[3][0]}`);// lists choice section name

            for(var i = 1;i < 6;i++){
                console.log(`${i}. ${choices[index][i]}`);// loops lists choices 
                }

            while (check != 1){// keeps loop going until dcorrect value is inputted 
                var wordChoice = readlineSync.question("Enter your choice (1-5): ");

            if(!isNaN(wordChoice) && wordChoice >= 1 && wordChoice <= 5) {
                check = 1
            }else {console.log("Invalid choice. Please enter a number between 1 and 5.");}
                    }
        }else if(index == 4){
            let check = 0

            console.log(`\nPlease choose ${choices[4][0]}`);// lists choice section name
    
                for(var i = 1;i < 6;i++){
                    console.log(`${i}. ${choices[index][i]}`);// loops lists choices 
                    }
    
                while (check != 1){// keeps loop going until dcorrect value is inputted 
                    var wordChoice = readlineSync.question("Enter your choice (1-5): ");
    
                if(!isNaN(wordChoice) && wordChoice >= 1 && wordChoice <= 5) {
                    check = 1
                }else {console.log("Invalid choice. Please enter a number between 1 and 5.");}
                        }
        }else if(index == 5){
            let check = 0

        console.log(`\nPlease choose ${choices[5][0]}`);// lists choice section name

            for(var i = 1;i < 6;i++){
                console.log(`${i}. ${choices[index][i]}`);// loops lists choices 
                }

            while (check != 1){// keeps loop going until dcorrect value is inputted 
                var wordChoice = readlineSync.question("Enter your choice (1-5): ");

            if(!isNaN(wordChoice) && wordChoice >= 1 && wordChoice <= 5) {
                check = 1
            }else {console.log("Invalid choice. Please enter a number between 1 and 5.");}
                    }
        }else if(index == 6){
            let check = 0

        console.log(`\nPlease choose ${choices[6][0]}`);// lists choice section name

            for(var i = 1;i < 6;i++){
                console.log(`${i}. ${choices[index][i]}`);// loops lists choices 
                }

            while (check != 1){// keeps loop going until dcorrect value is inputted 
            var wordChoice = readlineSync.question("Enter your choice (1-5): ");

            if(!isNaN(wordChoice) && wordChoice >= 1 && wordChoice <= 5) {
                check = 1
            }else {console.log("Invalid choice. Please enter a number between 1 and 5.");}
                    }
        }

  // Replacement Step -----------------------------------------------------------------------------------------------------------------
        const replaceWord = choices[index][wordChoice]; // get word chosen
        const placeholder = `_${index + 1}_`; // get current placeholder i.e. _1_,_2_, etc..
        storyData = storyData.replaceAll(`${placeholder}`,`${replaceWord}`);// replace placeholder with chosen word
        
    }
  // Output -----------------------------------------------------------------------------------------------------------------
    console.log("\nHere is your completed story:\n");
    console.log(`${storyData}`)
  }
  
  main();