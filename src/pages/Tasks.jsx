import { useState } from "react";

export default function Tasks() {
  return (
    <div style={{ 
      display: "flex", 
      gap: "2rem", 
      flexWrap: "wrap", 
      justifyContent: "center",
      padding: "2rem",
      maxWidth: "1400px",
      margin: "80px auto 0"
    }}>
      <Todo />
      <Calculator />
    </div>
  );
}

//To-Do Component
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([{ id: Date.now(), text, done: false }, ...tasks]);
    setText("");
  };

  const toggle = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));

  const remove = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="card" style={{ 
      width: "400px",
      background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ 
        fontSize: "1.5rem", 
        marginBottom: "1.5rem",
        background: "linear-gradient(135deg, #4834d4, #686de0)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}>To-Do List</h3>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <input 
          value={text} 
          onChange={(e)=>setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          style={{
            flex: 1,
            margin: 0
          }}
        />
        <button 
          onClick={addTask}
          style={{
            width: "auto",
            whiteSpace: "nowrap",
            background: "linear-gradient(135deg, #4834d4, #686de0)"
          }}>
          Add Task
        </button>
      </div>

      <ul style={{ 
        listStyle: "none", 
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
        {tasks.length === 0 && (
          <li style={{ 
            textAlign: "center", 
            padding: "2rem",
            color: "#a0a0a0",
            background: "rgba(0,0,0,0.02)",
            borderRadius: "12px"
          }}>
            No tasks yet. Add one above!
          </li>
        )}
        {tasks.map(t => (
          <li key={t.id} style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.75rem",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "transform 0.2s ease"
          }}>
            <input 
              type="checkbox" 
              checked={t.done} 
              onChange={() => toggle(t.id)}
              style={{
                width: "20px",
                height: "20px",
                margin: 0,
                cursor: "pointer"
              }}
            />
            <span style={{
              flex: 1,
              textDecoration: t.done ? "line-through" : "none",
              color: t.done ? "#b2bec3" : "inherit"
            }}>
              {t.text}
            </span>
            <button 
              onClick={() => remove(t.id)}
              style={{
                width: "30px",
                height: "30px",
                padding: 0,
                borderRadius: "8px",
                background: t.done ? "#dfe6e9" : "#ff7675",
                fontSize: "14px"
              }}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Calculator Component
function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("+");

  const calc = () => {
    const x = parseFloat(a), y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) return "—";
    switch(op) {
      case "+": return (x + y).toLocaleString();
      case "-": return (x - y).toLocaleString();
      case "*": return (x * y).toLocaleString();
      case "/": return y === 0 ? "∞" : (x / y).toLocaleString();
      default: return "—";
    }
  };

  return (
    <div className="card" style={{ 
      width: "400px",
      background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ 
        fontSize: "1.5rem", 
        marginBottom: "1.5rem",
        background: "linear-gradient(135deg, #4834d4, #686de0)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}> Calculator</h3>

      <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
        <input 
          value={a} 
          onChange={e => setA(e.target.value)}
          placeholder="Enter first number"
          type="number"
          style={{ margin: 0 }}
        />
        
        <select 
          value={op} 
          onChange={e => setOp(e.target.value)}
          style={{
            fontSize: "1.25rem",
            textAlign: "center",
            background: "white",
            cursor: "pointer",
            margin: 0
          }}
        >
          <option value="+"> Add</option>
          <option value="-">Subtract</option>
          <option value="*">Multiply</option>
          <option value="/">Divide</option>
        </select>

        <input 
          value={b} 
          onChange={e => setB(e.target.value)}
          placeholder="Enter second number"
          type="number"
          style={{ margin: 0 }}
        />
      </div>
      
      <div style={{
        background: "rgba(0,0,0,0.03)",
        padding: "1rem",
        borderRadius: "12px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "0.875rem", color: "#666", marginBottom: "0.5rem" }}>
          Result
        </div>
        <div style={{ 
          fontSize: "2rem", 
          fontWeight: "600",
          background: "linear-gradient(135deg, #4834d4, #686de0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          {calc()}
        </div>
      </div>
    </div>
  );
}
