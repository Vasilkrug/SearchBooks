import {useState} from "react";

export const useSelect = (initialState) => {
    const [value, setValue] = useState(initialState)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    return [
        value,
        onChange
    ]
}