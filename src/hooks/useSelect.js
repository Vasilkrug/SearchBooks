import {useState} from 'react';

export const useSelect = (initialState) => {
    const [value, setValue] = useState(initialState)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const clear = () => {
        setValue('')
    }
    return [
        value,
        onChange,
        clear
    ]
}