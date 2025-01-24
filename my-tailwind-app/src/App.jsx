import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Chat from "./components/bot copy/Chat";
import A_hub from "./components/about_hub/A_hub";

import Hub from "./components/Knowledge/Hub";
import Cases from "./components/about_hub/Related cases/Cases";
import Game from "./components/about_hub/Play to find way/Game";
import Visualize from "./components/about_hub/Visualize your lesson/Visualize";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Hub" element={<Hub />} />
        <Route path="/about_hub" element={<A_hub />} />

        {/* about_hub *Top nav* routes */}

        <Route path="/Read the article" element={<A_hub />} />
        <Route path="/Visualize your lesson" element={<Visualize />} />
        <Route path="/Play to find way" element={<Game />} />
        <Route path="/Related cases" element={<Cases />} />
        

      </Routes>
    </Router>
  );
}
export default App;
