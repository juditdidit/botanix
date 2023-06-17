import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import AddPlant from "./components/AddPlant";
import PlantDetails from "./components/PlantDetails";
import PlantList from "./components/PlantList";

function App() {
    const defaultPlants = [
        {
            id: 0,
            name: "Monty",
            altName: "Monstera deliciosa",
            location: "Living room floor",
            light: "bright, indirect",
            water: "moderate",
            soil: "good drainage",
            toxicity: {
                dogs: true,
                cats: true,
                kids: false,
            },
            photo: "monstera.jpg",
        },
        {
            id: 1,
            name: "Bethany the Golden Pothos",
            altName: "Epipremmum aureum",
            location: "Top of bookshelf",
            light: "bright, indirect",
            water: "moderate",
            soil: "well-draining, rich",
            toxicity: {
                dogs: true,
                cats: true,
                kids: true,
            },
            photo: "pothos.jpg",
        },
        {
            id: 2,
            name: "Snek",
            altName: "Dracaena trifasciata",
            location: "Bedroom",
            light: "any light",
            water: "infrequent",
            soil: "free-draining",
            toxicity: {
                dogs: true,
                cats: true,
                kids: false,
            },
            photo: "snakeplant.jpg",
        },
        {
            id: 3,
            name: "Arrowhead",
            altName: "Syngonium podophyllum",
            location: "Bedroom",
            light: "bright, indirect",
            water: "moderate",
            soil: "light, fast-draining",
            toxicity: {},
            photo: "arrowhead.jpg",
        },
    ];

    const [plants, setPlants] = useState(defaultPlants);

    function saveNewPlant(newPlant) {
        setPlants((plants) => [...plants, newPlant]);
    }

    return (
        <Routes>
            <Route path="/" element={<PlantList plants={plants} />} />
            <Route
                path="/add-plant"
                element={
                    <AddPlant
                        plantListLength={plants.length}
                        saveNewPlant={saveNewPlant}
                    />
                }
            />
            <Route path="/plants/:id" element={<PlantDetails />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
}

export default App;
