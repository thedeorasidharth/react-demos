function App() {
  const name = "Sidharth";
  const age = 21;
  const skills = ["React", "JavaScript", "Git"];

  return (
    <div>
      <h1>Hello {name}, welcome to React with JSX!</h1>
      <p>Age: {age}</p>
      <h2>Skills:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
