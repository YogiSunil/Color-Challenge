import React, { useState, useEffect } from "react";

function getRandomColor() {
  const getByte = () => Math.floor(Math.random() * 256);
  const toHex = (n) => n.toString(16).padStart(2, "0");
  const r = getByte();
  const g = getByte();
  const b = getByte();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function ColorGame() {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [message, setMessage] = useState("");
  const [showSwatches, setShowSwatches] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [gameOver, setGameOver] = useState(false); // Track if the game is over

  const generateColors = () => {
    const newColors = [getRandomColor(), getRandomColor(), getRandomColor()];
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * 3)]);
    setMessage("");
    setSelectedColor(null);
    setGameOver(false); // Reset game over state
    setShowSwatches(false);
    setTimeout(() => setShowSwatches(true), 1000); // 1 second delay
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleGuess = (color) => {
    if (gameOver) return; // Do nothing if the game is over

    setSelectedColor(color);
    if (color === targetColor) {
      setMessage("✅ Correct!");
    } else {
      setMessage("❌ Incorrect.");
    }

    setGameOver(true); // Disable further choices after a guess
  };

  const resetGame = () => {
    generateColors();
  };

  return (
    <div className="game-container">
      <h1>🎨 Color Challenge</h1>

      {!showSwatches && <p>⏳ Get ready...</p>}

      {showSwatches && (
        <div className="swatches-container">
          {colors.map((color, index) => {
            const isCorrect = color === targetColor;
            const isSelected = color === selectedColor;
            const showAnswer = selectedColor !== null;

            return (
              <div
                key={index}
                onClick={() => handleGuess(color)}
                className={`color-swatch ${showAnswer && (isCorrect ? 'correct' : isSelected ? 'incorrect' : '')}`}
                style={{
                  backgroundColor: color,
                  cursor: gameOver ? "not-allowed" : "pointer", // Disable cursor when game is over
                }}
              >
                {showAnswer && (
                  <div className="hex-value">
                    {color}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <h2>Guess this color:</h2>
      <div className="question-container" style={{ color: targetColor }}>
        <span>{targetColor}</span>
      </div>

      <p className="message">{message}</p>

      <button onClick={resetGame} className="reset-button">
        🔄 Reset / Play Again
      </button>
    </div>
  );
}

export default ColorGame;
