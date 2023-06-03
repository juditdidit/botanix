import "./App.scss";

const plants = [
    {
        name: 'Monty',
        latin: 'Monstera deliciosa',
        location: 'Living room floor',
        sunExposure: '???',
        water: '???',
        toxic: {
            cats: true,
            dogs: true,
            kids: true,
        },
        photo: 'monstera.jpg',
    }, {
        name: 'Bethany',
        latin: 'Pothos; Epipremmum aureum',
        location: 'Bookshelf',
        sunExposure: '???',
        water: '???',
        toxic: {
            cats: true,
            dogs: true,
            kids: true,
        },
        photo: 'pothos.jpg',
    }, {
        name: 'Snek',
        latin: 'Dracaena trifasciata',
        location: 'Bedroom',
        sunExposure: '???',
        water: '???',
        toxic: {
            cats: true,
            dogs: true,
            kids: true,
        },
        photo: 'snakeplant.jpg',
    }, {
        name: 'Arrowhead',
        latin: 'Syngonium podophyllum',
        location: 'Bedroom',
        sunExposure: '???',
        water: '???',
        toxic: {
            cats: true,
            dogs: true,
            kids: true,
        },
        photo: 'arrowhead.jpg',
    },

];

function App() {
    const plantList = plants.map(plant =>
        <PlantCard plant={plant} />
    );

    return (
        <main>
            <div className="container">
                <div className="plant-list">
                    {plantList}
                </div>
            </div>
        </main>
    );
}

function PlantCard({plant}) {
    return (
        <div className="plant-card">
            <div className="photo" style={{backgroundImage: `url(../images/${plant.photo})`}}></div>
            <div className="main">
                <small className="location">{plant.location}</small>
                <div className="name">{plant.name}</div>
                <em className="latin">{plant.latin}</em>
            </div>
        </div>
    );
}

export default App;
