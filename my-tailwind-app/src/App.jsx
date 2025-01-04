import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Chat from "./components/bot copy/Chat";
// import Hub from "./components/Knowledge/Hub";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Chat" element={<Chat />} />
        {/* <Route path="/Hub" element={<Hub />} /> */}

      </Routes>
    </Router>
  );
}
export default App;
