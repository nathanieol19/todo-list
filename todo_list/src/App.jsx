import './App.css'

function App() {
  const  todoList = [
    {id: 1, title: "Review Resources"},
    {id: 2, title: "Take Notes"},
    {id: 3, title: "Code Out App"}
  ]
  

  return (
    <div>
      <h1>Todo List!</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
