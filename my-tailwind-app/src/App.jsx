import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/landing";
import Chat from "./components/bot copy/Chat";
import A_hub from "./components/about_hub/A_hub";
import Part_hub from "./components/Knowledge/part_hub/Part_hub";
import Hub from "./components/Knowledge/Hub";
import Cases from "./components/about_hub/Related cases/Cases";
import Game from "./components/about_hub/Play to find way/Game";
import Visualize from "./components/about_hub/Visualize your lesson/Visualize";
import Hot from "./components/Hot_news/Hot";
import Quiz from "./components/megaquiz/quiz";
import Signup from "./components/Login/login";
import Login from "./components/loginmain/loginmain";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Hub" element={<Hub />} />
        <Route path="/about_hub" element={<A_hub />} />
        <Route path="/part_hub" element={<Part_hub />} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* about_hub *Top nav* routes */}

        <Route path="/Read the article" element={<A_hub />} />
        <Route path="/Visualize your lesson" element={<Visualize />} />
        <Route path="/Play to find way" element={<Game />} />
        <Route path="/Related cases" element={<Cases />} />

        {/* hot news */}

        <Route path="/news" element={<Hot />} />
        
        

      </Routes>
    </Router>
  );
}
export default App;
