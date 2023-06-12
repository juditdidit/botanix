import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddImageIcon } from "../Icons";

export default function AddPlant({ plantListLength, saveNewPlant }) {
    let navigate = useNavigate();
    const [selectedPhoto, setSelectedPhoto] = useState();
    const [preview, setPreview] = useState();
    const [plantName, setPlantName] = useState("");
    const [plantLocation, setPlantLocation] = useState("");
    const [alternativeName, setAlternativeName] = useState("");

    useEffect(() => {
        if (!selectedPhoto) {
            setPreview(undefined);
            return;
        }

        const imageUrl = URL.createObjectURL(selectedPhoto);
        setPreview(imageUrl);

        // Free memory whenever the component is unmounted
        return () => URL.revokeObjectURL(imageUrl);
    }, [selectedPhoto]);

    const addPhoto = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedPhoto(undefined);
            return;
        }

        setSelectedPhoto(e.target.files[0]);
    };

    function savePlant() {
        let newPlant = {
            id: plantListLength + 1,
            name: "",
            altName: alternativeName,
            location: plantLocation,
            photo: "calathea.jpg",
        };

        saveNewPlant(newPlant);

        // Go back to the plant list
        navigate("/");
    }

    return (
        <main>
            <div className="container">
                <div className="heading">
                    <h1>Add a new plant</h1>
                </div>
                <form className="add-form">
                    <div className="wrapper">
                        <div>
                            <label>
                                <span className="label">Plant location</span>
                                <input
                                    type="text"
                                    name="plantLocation"
                                    value={plantLocation}
                                    onChange={(e) =>
                                        setPlantLocation(e.target.value)
                                    }
                                />
                            </label>

                            <label>
                                <span className="label">Plant Name</span>
                                <input
                                    type="text"
                                    name="plantName"
                                    value={plantName}
                                    onChange={(e) =>
                                        setPlantName(e.target.value)
                                    }
                                />
                            </label>

                            <label>
                                <span className="label">Alternative Name</span>
                                <input
                                    type="text"
                                    name="alternativeName"
                                    value={alternativeName}
                                    onChange={(e) =>
                                        setAlternativeName(e.target.value)
                                    }
                                />
                                <small>
                                    Your plant's Latin name, or any other
                                    alternative name you'd like to display.
                                </small>
                            </label>
                        </div>

                        <label className="upload-image">
                            <span className="label">Add a photo</span>

                            {preview ? (
                                <div
                                    className="preview"
                                    style={{
                                        backgroundImage: `url(${preview})`,
                                    }}
                                ></div>
                            ) : (
                                <div className="uploader">
                                    <div className="wrapper">
                                        <AddImageIcon />
                                        <small>
                                            Click here to upload a photo
                                        </small>
                                    </div>
                                </div>
                            )}

                            <input
                                type="file"
                                onChange={addPhoto}
                                accept="image/*"
                            />
                        </label>
                    </div>

                    <button
                        type="button"
                        className="submit"
                        onClick={savePlant}
                    >
                        Record this plant
                    </button>

                    <Link to="/" className="cancel">
                        Discard
                    </Link>
                </form>
            </div>
        </main>
    );
}
