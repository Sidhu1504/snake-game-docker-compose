# 🐍 Snake Game - Docker Compose Edition  

## 🚀 Project Overview  
A fun and interactive Snake Game that uses **Flask, Redis, and Docker Compose** to create a containerized gaming experience. This project is perfect for those who want to explore **Docker Compose, Docker Swarm, and Docker Stack** while enjoying a nostalgic game.  

---

## 👅 Pull the Image  
To download the latest image from Docker Hub, use:  
```sh  
docker pull sidhu1504/snake-game-docker-compose:latest  
```

---

## 🚀 Run the Game  

### ✅ Run with Normal Docker (Pull & Run)  
```sh  
docker run -d -p 5000:5000 sidhu1504/snake-game-docker-compose:latest  
```

### ✅ Run with Docker Compose  
```sh  
docker-compose up -d --build  
```

### ✅ Run with Docker Swarm (as a Service)  
```sh  
docker swarm init  
docker service create --name snake-game -p 5000:5000 sidhu1504/snake-game-docker-compose:latest  
```

### ✅ Run with Docker Stack  
```sh  
docker stack deploy -c docker-compose.yml snake-game  
```

---

## 🌐 Access the Game  
Once the containers are running, open your browser and visit:  
```
http://localhost:5000  
```
Or test with `curl`:  
```sh  
curl http://localhost:5000  
```

---

## 📋 Manage the Containers  

### 🔍 Check Running Containers:  
```sh  
docker ps  
```

### 🚫 Stop the Game (Normal Docker):  
```sh  
docker stop <container-id>  
```

### 🚫 Stop the Game (Docker Compose):  
```sh  
docker-compose down  
```

### 🚫 Stop the Game (Docker Swarm Service):  
```sh  
docker service rm snake-game  
```

### 🚫 Stop the Game (Docker Stack):  
```sh  
docker stack rm snake-game  
```

---

## ✨ Features  
- **Nostalgic Gameplay**: Classic Snake Game with smooth controls.  
- **Leaderboard**: Real-time leaderboard powered by Redis.  
- **Easy Deployment**: One command to deploy everything using Docker Compose, Swarm, or Stack.  
- **Cross-Platform**: Works on any system with Docker installed.  
- **Modular Design**: Easily extendable and customizable.  

---

## 🛠 Installation and Setup  
### Clone the Repository:  
```sh  
git clone https://github.com/Sidhu1504/snake-game-docker-compose.git  
cd snake-game-docker-compose  
```
### Install Docker and Docker Compose:  
- [Install Docker](https://docs.docker.com/engine/install/)  
- [Install Docker Compose](https://docs.docker.com/compose/install/linux/)  

---

## 🎮 Fun Factors  
- Relive the nostalgia of playing the **Snake Game**.  
- Compete with friends for the **top spot** on the leaderboard.  
- Learn **containerization concepts** while playing!  

---

## 📊 Future Improvements  
- **Skins and Themes**: Custom skins and different game themes.  
- **Levels**: Introduce increasing difficulty.  
- **Multiplayer Mode**: Compete in real-time.  
- **Enhanced Graphics**: Better UI/UX with animations.  
- **Persistent Leaderboard**: Store scores in MySQL/PostgreSQL.  
- **Mobile Compatibility**: Optimize for mobile devices.  

---

## 🐳 Why Docker Compose, Swarm, and Stack?  
Docker makes deployment easier by:  
- Automatically setting up **multiple containers** with one command.  
- Managing **networking** between Flask and Redis.  
- Providing a clean and **isolated development environment**.  
- Supporting **scalability** with **Docker Swarm and Stack** for production.  

---

## 📂 Project Structure  
![image](https://github.com/user-attachments/assets/549b3348-1d11-49b3-93c2-d8d96cf4b33d)  

---

## 🤝 Contributing  
Contributions are welcome!  
- Fork the repo.  
- Create a new branch.  
- Make improvements or fixes.  
- Submit a pull request.  

---

## 🙏 Acknowledgments  
Special thanks to:  
- The **Docker and Flask** communities.  
- **Redis** for providing a fast database solution.  

---

## 📝 License  
This project is licensed under the **MIT License**.  

