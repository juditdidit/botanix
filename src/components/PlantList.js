import { Link } from "react-router-dom";
import { AddPlantIcon, CatIcon, DogIcon, KidIcon } from "../Icons.js";

export default function PlantList({ plants }) {
    const plantList = plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
    ));

    return (
        <main>
            <div id="plant-list" className="container">
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
            if (icon === "cats") {
                return <CatIcon key={icon} />;
            } else if (icon === "dogs") {
                return <DogIcon key={icon} />;
            } else {
                return <KidIcon key={icon} />;
            }
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
                {plant.location && (
                    <small className="location">{plant.location}</small>
                )}
                {plant.name && <div className="name">{plant.name}</div>}
                {plant.altName && (
                    <em className="alternativeName">{plant.altName}</em>
                )}
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
