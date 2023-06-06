import { Link } from "react-router-dom";
import { AddPlantIcon, CatIcon, DogIcon, KidIcon } from "../Icons.js";

const plants = [
    {
        id: 0,
        name: "Monty",
        latin: "Monstera deliciosa",
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
        latin: "Epipremmum aureum",
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
        latin: "Dracaena trifasciata",
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
        latin: "Syngonium podophyllum",
        location: "Bedroom",
        light: "bright, indirect",
        water: "moderate",
        soil: "light, fast-draining",
        toxicity: {},
        photo: "arrowhead.jpg",
    },
];

export default function PlantList() {
    const plantList = plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
    ));

    return (
        <main>
            <div className="container">
                <div className="heading">
                    <div>
                        <h1>Botanix</h1>
                        <span className="subtitle">A Botanical Journal</span>
                    </div>
                    <Link to="/add-plant" className="add-plant">
                        <AddPlantIcon />
                    </Link>
                </div>
                <div className="plant-list">{plantList}</div>
            </div>
        </main>
    );
}

function PlantCard({ plant }) {
    const toxicityList = Object.keys(plant.toxicity).map((icon) => {
        if (plant.toxicity[icon]) {
            return (
                // TODO: address "unique key" warning
                <>
                    {icon === "dogs" && <DogIcon key={icon} />}
                    {icon === "cats" && <CatIcon key={icon} />}
                    {icon === "kids" && <KidIcon key={icon} />}
                </>
            );
        } else {
            return null;
        }
    });

    return (
        <div className="plant-card">
            <div
                className="photo"
                style={{ backgroundImage: `url(./images/${plant.photo})` }}
            ></div>
            <div className="main">
                <small className="location">{plant.location}</small>
                <div className="name">{plant.name}</div>
                <em className="latin">{plant.latin}</em>

                <div className="specs">
                    <div className="toxicity">{toxicityList}</div>
                    {/* <div className="needs">
                        <span className="water">{plant.water}</span>
                        <span className="light">{plant.light}</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
