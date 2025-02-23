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
// import Tracker from "./components/tracker/Tracker";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Tracker_2 from "./components/tracker/Tracker_2";
<<<<<<< HEAD
=======


>>>>>>> 8265f2e7374f7713ed227e4c28d544703ccb602c
import Tracker from "./components/tracker/Tracker";
import Tracker_3 from "./components/tracker/Tracker_3";
import PrimeSubscription from "./components/subscription/subscribe";

<<<<<<< HEAD
=======

>>>>>>> 8265f2e7374f7713ed227e4c28d544703ccb602c
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Hub" element={<Hub />} />
        <Route path="/about_hub" element={<A_hub />} />
<Route path="/part_hub" element={<Part_hub />} />
<Route path="/subscribe" element={<PrimeSubscription />} />

        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tracker" element={<Tracker />} />

        {/* about_hub *Top nav* routes */}

        <Route path="/Read the article" element={<A_hub a={1} />} />
        <Route path="/Visualize your lesson" element={<Visualize />} />
        <Route path="/Play to find way" element={<Game />} />
        <Route path="/Related cases" element={<Cases />} />

        {/* hot news */}

        <Route path="/news" element={<Hot />} />

        <Route path="/tracker" element={<Tracker />} />
        <Route path="/tracker2" element={<Tracker_2 />} />
        <Route path="/tracker3" element={<Tracker_3 />} />
        
        

      </Routes>
    </Router>
  );
}
export default App;
