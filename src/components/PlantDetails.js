import { useParams } from "react-router-dom";

export default function PlantDetails() {
    const { id } = useParams();

    return (
        <main>
            <div id="plant-details" className="container">
                <div className="heading">
                    <h1>Details for {id}</h1>
                </div>
            </div>
        </main>
    );
}
