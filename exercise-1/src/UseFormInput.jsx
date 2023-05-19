import { useState } from "react";

function useFormInput(initialValue = ""){
    const[value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return{
        value,
        onchange: handleChange
    }
}
export default useFormInput;