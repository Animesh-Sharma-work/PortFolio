import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<Todos />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
