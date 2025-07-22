import { useState } from "react";
import axios from 'axios'
import './App.css'

function App(){
  const [query, setQuery] = useState("")
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true)
    setTasks([])

    try {
      const res = await axios.post("http://localhost:8000/plan", {
        task: query
      })
      if(res.data.success){
        console.log(res.data.subtasks)
        setTasks(res.data.subtasks)
      }
      else{
        console.error("Error while processing the query...")
      }
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }
  return(
    <>
    <h2>🧠 Task Breaker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a task..."
          style={{ width: '300px', padding: '0.5rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem' }}>
          Generate
        </button>
      </form>

      {loading && <p>Loading...</p>}

      <ul className="task-list">
        {tasks.map((task, idx) => (
        <li key={idx} className="task-item">🔹 {task}</li>
        ))}
      </ul>

    
    </>
  )
}

export default App;