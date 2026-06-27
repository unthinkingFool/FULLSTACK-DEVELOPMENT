import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Card
          avatar="https://i.pravatar.cc/150"
          name="John Doe"
          role="Frontend Developer"
        />

        <Card
          avatar="https://i.pravatar.cc/140"
          name="Jane Smith"
          role="Backend Developer"
        />
      </div>
    </div>
  );
}

export default App;