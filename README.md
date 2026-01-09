# 🧠 Task Breaker: AI-Powered Daily Planner

Task Breaker is an intelligent **AI-driven planning and scheduling system** that breaks down high-level user goals into actionable subtasks while considering the user’s **real-time calendar availability**.

The system follows a **multi-agent architecture** inspired by **CrewAI** and **LangChain principles**, integrating **local LLMs (Ollama – Phi model)** and **Google Calendar** to generate optimized, conflict-free plans.

---

## 🚀 Features

- **Intelligent Task Classification**  
  Automatically determines whether a user request is time-sensitive  
  (e.g., *“Plan my week”* vs *“How to bake a cake”*).

- **Google Calendar Integration**  
  Fetches upcoming calendar events to avoid scheduling conflicts.

- **Local LLM Processing**  
  Uses **Ollama (Phi model)** for on-device inference, ensuring privacy and low latency.

- **Memory Persistence**  
  Stores previously generated plans in a local **JSON-based memory system** for reuse.

- **Modern Web Interface**  
  Clean and responsive **React + Vite** frontend for real-time interaction.

---

## 🛠️ Tech Stack

### Backend
- **Framework:** FastAPI  
- **Language:** Python 3.10+  
- **AI / LLM:** Ollama (Phi model)  
- **APIs:** Google Calendar API v3  

### Frontend
- **Library:** React 19  
- **Build Tool:** Vite  
- **Styling:** CSS3 (Responsive Design)  
- **HTTP Client:** Axios  

---

## 📂 Project Structure

```
├── backend/
│ ├── Agents/
│ │ ├── CalenderAgent.py # Google OAuth & calendar event fetching
│ │ ├── Classifier.py # Task intent classification
│ │ ├── Subtask_Generator.py # LLM-based subtask generation (Ollama)
│ │ └── Validation.py # End-to-end flow validation
│ ├── Utils/
│ │ ├── prompt_builder.py # Context-aware prompt construction
│ │ └── json_msg_storage.py # Persistent JSON-based memory
│ └── main.py # FastAPI server entry point
├── frontend/
│ ├── src/
│ │ ├── App.jsx # Main React component
│ │ └── main.jsx # React DOM entry
│ └── package.json # Frontend dependencies
├── memory.json # Stored task plans
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Prerequisites

- Python **3.10+**
- Node.js & npm
- Ollama installed and running:
```bash
ollama run phi
```
### 2️⃣ Backend Setup
```
cd backend
pip install -r requirements.txt
```
- Place your Google OAuth credentials file:
``` 
backend/Agents/credentials.json
```
- Start the backend server:
```
uvicorn main:app --reload
```
### 3️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev
```
Open the frontend at:
```
http://localhost:5173
```
---
## 🤖 How It Works (Agent Flow)
#### User Input
User submits a task via the React frontend.

#### Task Classification
Classifier determines whether calendar context is required.

#### Context Retrieval
If needed, CalenderAgent fetches upcoming Google Calendar events.

#### Prompt Engineering
prompt_builder merges task intent and calendar data into a structured prompt.

#### Subtask Generation
Subtask_Generator sends the prompt to the local Phi LLM via Ollama.

#### Persistence & Display
Generated plans are saved in memory.json and returned to the UI.

---
## 📊 Use Cases
- Daily and weekly planning

- Productivity task breakdown

- Schedule-aware goal planning

- Privacy-focused AI assistants

---
## ⚠️ Notes

- Uses local LLM inference for data privacy

- Google Calendar access requires OAuth configuration

- Designed to demonstrate agent orchestration, system design, and AI planning

---
## 🎯 Future Enhancements

- Advanced agent roles and delegation

- Location APIs to adjust schedules based on commute time and travel context

- News APIs to provide situational awareness for daily planning

- Cross-agent context sharing for real-time plan re-optimization

- Timeline and Gantt-style visualizations

- Dockerized deployment