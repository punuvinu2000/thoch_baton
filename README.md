# Mini Militia Clone

A 2D shooter game inspired by **Doodle Army 2: Mini Militia**, built with JavaScript and **p5.js**.  
This prototype features a player with jetpack movement, mouse-based shooting, enemies with varied movement patterns, a scoreboard, and buttons to toggle animations and restart the game.  
The player is eliminated after three enemy hits, mimicking the fast-paced action of *Mini Militia*.

---

## 🎮 Features

- **Player Controls:**  
  Move with arrow keys (left/right for horizontal, up for jetpack) and shoot with left mouse click.

- **Enemies:**  
  Five enemies with two movement types (direct or zigzag) that shoot at the player every 3 seconds.

- **Health System:**  
  Player starts with 3 health points; game ends after 3 enemy bullet hits.

- **Scoreboard:**  
  Tracks enemies defeated and displays player health.

- **Animations:**  
  Color-cycling animations for player (blue) and enemies (red), toggleable with a button.

- **Restart:**  
  Restart the game with a button after game over.

---

## 🚀 Getting Started

### ✅ Prerequisites

- A modern web browser (e.g., Chrome, Firefox)
- A local server to run the game (e.g., Python’s `http.server`)

### 📥 Installation

```bash
# Clone the repository:
git clone https://github.com/your-username/mini-militia-clone.git

# Navigate to the project directory:
cd mini-militia-clone

# Host the game using a local server:
python -m http.server
```
Then open your browser and visit:
http://localhost:8000

📁 File Structure

    index.html: Main HTML file, includes p5.js and JavaScript files, and buttons for toggling animations and restarting.

    sketch.js: Core game loop, handles setup, drawing, input, and game logic.

    player.js: Player class (movement, shooting, health, animations).

    bullet.js: Bullet class (movement, collision detection).

    enemy.js: Enemy class (movement, shooting, animations).

🎮 Controls

| Action            | Key/Mouse                           |
| ----------------- | ----------------------------------- |
| Move Left         | ← Left Arrow                        |
| Move Right        | → Right Arrow                       |
| Jetpack (Fly Up)  | ↑ Up Arrow                          |
| Shoot             | Left Mouse Click                    |
| Toggle Animations | Button: "Toggle Reduced Animations" |
| Restart Game      | Button: "Restart Game"              |


🕹️ Gameplay

    Control a blue rectangular player to shoot red enemies and avoid their green bullets.

    Defeat enemies to increase your score, displayed in the top-left corner alongside health.

    Enemies move directly or in a zigzag pattern toward you and shoot every 3 seconds.

    Survive three hits; the game ends with a "Game Over" screen showing your final score.

    Use the animation toggle to simplify visuals and the restart button to play again.

🧠 Future Improvements

    Add sprite sheets for Mini Militia-style character animations (e.g., running, shooting).

    Implement maps with platforms and obstacles.

    Introduce varied weapons (e.g., grenades, shotguns).

    Add multiplayer support using WebSockets for online play.

    Include sound effects for shooting and jetpack.

🤝 Contributing

Contributions are welcome! Feel free to:

    Fork the repository.

    Create a new branch:
    git checkout -b feature/your-feature

    Commit your changes:
    git commit -m "Add your feature"

    Push to the branch:
    git push origin feature/your-feature

    Open a pull request.


📄 License

This project is licensed under the MIT License.
See the LICENSE file for detail



