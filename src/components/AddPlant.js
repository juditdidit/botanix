import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddImageIcon } from "../Icons";

function savePlant() {
    console.log("I clicked");
}

export default function AddPlant() {
    const [selectedPhoto, setSelectedPhoto] = useState();
    const [preview, setPreview] = useState();

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
                                <input type="text" />
                            </label>

                            <label>
                                <span className="label">Plant Name</span>
                                <input type="text" />
                            </label>

                            <label>
                                <span className="label">Alternative Name</span>
                                <input type="text" />
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
