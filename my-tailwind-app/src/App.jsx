import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Chat from "./components/bot copy/Chat";
import LanguageDropdown from './components/bot copy/Lang';
import AnimatedInputBox from './components/bot copy/Input';

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
