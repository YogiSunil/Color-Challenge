# Color Guessing Game 🎨

Welcome to the Color Guessing Game! The goal of this game is to guess the correct color based on a given hex code. Each round, three color swatches are displayed, and one of them matches the target hex color. Click on the color swatch you think is correct, and you'll be notified whether your guess was correct or incorrect.

## Features

- Displays three color swatches.
- Shows a target color hex code.
- Highlights the correct color after a guess.
- Shows "correct" or "incorrect" messages based on the player's choice.
- Includes a reset button to play again.

## How to Play

1. You will be shown three color swatches with different colors.
2. A hex color code will be displayed below, which corresponds to one of the color swatches.
3. Click on the swatch that matches the color of the hex code.
4. If you're correct, you’ll see a “✅ Correct!” message, otherwise, you’ll see “❌ Incorrect.”.
5. After guessing, the game disables further guesses until you reset the game.

## Setup Instructions

1. Clone this repository:

   ```bash
   git clone --https://github.com/YogiSunil/Color-Challenge.git

2. Navigate into the project folder:

   ```bash
   cd color-guessing-game

3. Install the required dependencies:
   ```bash
    npm install

4. Start the development server:
    ```bash
    npm start
5. Open your browser and visit:
    
    http://localhost:3000



## Reflection 🧠

1. Prompts I Asked AI:

How do I generate random hex colors in JavaScript?

How can I highlight the correct answer and prevent further guesses after the user selects a color in a React app?

Can you help me add a hover effect and pointer cursor to color swatches in React?

2. How AI Helped:
AI helped me with generating random hex color values and provided clear guidance on how to implement the correct/incorrect message logic and interaction handling in React. It also assisted in creating a better user experience by adding hover effects and disabling further guesses after a selection is made.

3. One Thing I Figured Out on My Own:

I figured out how to implement a short countdown before showing the color swatches. This was accomplished by using setTimeout to introduce a delay, which gives the player a brief moment before they start interacting with the swatches.

