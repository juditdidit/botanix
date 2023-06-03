import "./App.scss";

const plants = [
    {
        id: 1,
        name: "Monty",
        latin: "Monstera deliciosa",
        location: "Living room floor",
        light: "bright, indirect",
        water: "moderate",
        soil: "good drainage",
        toxicity: {
            cats: true,
            dogs: true,
            kids: false,
        },
        photo: "monstera.jpg",
    },
    {
        id: 2,
        name: "Bethany",
        latin: "Pothos; Epipremmum aureum",
        location: "Bookshelf",
        light: "bright, indirect",
        water: "moderate",
        soil: "well-draining, rich",
        toxicity: {
            cats: true,
            dogs: true,
            kids: true,
        },
        photo: "pothos.jpg",
    },
    {
        id: 3,
        name: "Snek",
        latin: "Dracaena trifasciata",
        location: "Bedroom",
        light: "any light",
        water: "infrequent",
        soil: "free-draining",
        toxicity: {
            cats: true,
            dogs: true,
            kids: false,
        },
        photo: "snakeplant.jpg",
    },
    {
        id: 4,
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

function App() {
    const plantList = plants.map((plant) => <PlantCard plant={plant} key={plant.id} />);

    return (
        <main>
            <div className="container">
                <div className="plant-list">{plantList}</div>
            </div>
        </main>
    );
}

function PlantCard({ plant }) {
    const toxicityList = Object.keys(plant.toxicity).map(icon => {
        if (plant.toxicity[icon]) {
            return <span key={icon}>{icon}</span>
        } else {
            return null;
        }
    });

    return (
        <div className="plant-card">
            <div
                className="photo"
                style={{ backgroundImage: `url(../images/${plant.photo})` }}
            ></div>
            <div className="main">
                <small className="location">{plant.location}</small>
                <div className="name">{plant.name}</div>
                <em className="latin">{plant.latin}</em>

                <div className="specs">
                    <div className="toxicity">
                        {toxicityList}
                    </div>
                    <div className="needs">
                        <span className="water">{plant.water}</span>
                        <span className="light">{plant.light}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
