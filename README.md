🐍 Snake Game - Docker Compose Edition

A fun and interactive Snake Game that uses Flask, Redis, and Docker Compose to create a containerized gaming experience. This project is perfect for those who want to explore Docker Compose while enjoying a nostalgic game.

🚀 Project Overview
The Snake Game is built using:  
Flask: A lightweight Python web framework to serve the game on a browser.  
Redis: A fast, in-memory database used for real-time leaderboard storage and game state management.  
Docker Compose: To manage and run multiple containers (Flask app and Redis database) effortlessly.  
  
💡 How It Works    
Frontend:
Simple yet interactive Snake Game UI runs in the browser.
Players can control the snake using keyboard arrows to eat food and grow in size.
A real-time leaderboard shows high scores.  
Backend:
Flask serves the game logic and connects to the Redis database.
Redis stores scores, tracks player data, and provides lightning-fast data access.  
Docker Compose:
Launches two containers:
One for the Flask app (backend and game logic).
Another for the Redis database (data storage).
Containers are orchestrated using a simple docker-compose.yml file.    

✨ Features  
Nostalgic Gameplay: Classic Snake Game with smooth controls.  
Leaderboard: Real-time leaderboard powered by Redis to track top scores.  
Easy Deployment: One command to deploy everything using Docker Compose.  
Cross-Platform: Works on any system with Docker installed.  
Modular Design: Easily extendable and customizable.  

🛠️ Installation and Setup  
Clone the Repository:
git clone https://github.com/Sidhu1504/snake-game-docker-compose.git  
cd snake-game-docker-compose  
  
Install Docker and Docker Compose:  
For Install Docker > https://docs.docker.com/engine/install/  
For Install Docker Compose > https://docs.docker.com/compose/install/linux/  

Run the Game:  
docker-compose up -d --build
  
Access the Game:  
Open your browser and navigate to: http://<ip>:5000
  
Stop the Game:  
docker-compose down
  
🎮 Fun Factors  
Relive the nostalgia of playing the Snake Game.  
Compete with friends for the top spot on the leaderboard.  
Learn containerization concepts while playing!  
  
📈 Improvements for the Future  
Here are some ideas to make the game more exciting:  
Skins and Themes: Add custom skins for the snake and different game themes.  
Levels: Introduce levels with increasing difficulty.  
Multiplayer Mode: Allow multiple players to compete in real time.  
Enhanced Graphics: Improve UI/UX with animations and sound effects.  
Persistent Leaderboard: Store high scores persistently using a database like MySQL or PostgreSQL.  
Mobile Compatibility: Optimize the game for mobile devices.  
  
🐳 Why Docker Compose?  
Docker Compose simplifies the deployment process by:  
Automatically setting up multiple containers with a single command.  
Managing networking between containers (Flask and Redis).  
Providing a clean and isolated environment for development and testing.      
 
 📂 Project Structure   
  ![image](https://github.com/user-attachments/assets/549b3348-1d11-49b3-93c2-d8d96cf4b33d)   
    
🤝 Contributing  
Contributions are welcome! Feel free to:  
Fork the repo.  
Create a new branch.    
Make improvements or fixes.  
Submit a pull request.  
  
🙏 Acknowledgments  
Special thanks to:  
The Docker and Flask communities for their amazing tools.  
Redis for providing a blazing-fast database solution.  
  
📝 License  
This project is licensed under the MIT License.   


