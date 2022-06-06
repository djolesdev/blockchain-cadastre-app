import { Routes, Route , Navigate} from "react-router-dom";
import style from "./App.module.css";
import FormPage from "./components/pages/FormPage";
import Login from "./components/login/Login";

const App: React.FC = () => {

  return (
      <div className={style.container}>
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/*" element={<FormPage />} />

          {/* To create /login default route */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
  );
};

export default App;
