import React, {useState, useEffect} from "react";


const CarDetails = ({initialData}) => {
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        setModel(initialData.model || "");
        setYear(initialData.year || "");
        setColor(initialData.color || "");
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Model:
                    <input type="text" value={model} onChange={(e) => setColor(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Year:
                    <input type="text" value={year} onChange={(e) => setColor(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Color:
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CarDetails;