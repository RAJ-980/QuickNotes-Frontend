import Register from "./pages/Register";
import Login from "./pages/Login";
import Notes from "./pages/Notes";

function App() {
  return (
    <div>
      <h1>QuickNotes App</h1>

      <Register />

      <hr />

      <Login />

      <hr />

      <Notes />
    </div>
  );
}

export default App;