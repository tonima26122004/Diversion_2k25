import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Chat from "./components/bot copy/Chat";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Chat" element={<Chat />} />

      </Routes>
    </Router>
  );
}
export default App;
