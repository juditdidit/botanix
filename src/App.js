import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AddPlant from "./components/AddPlant";
import PlantDetails from "./components/PlantDetails";
import PlantList from "./components/PlantList";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PlantList />} />
            <Route path="/add-plant" element={<AddPlant />} />
            <Route path="/details" element={<PlantDetails />} />
        </Routes>
    );
}

export default App;
