import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import './DropdownState.css'
import { useEffect, useState } from 'react';

function DropdownState() {
    const [states, setStates] = useState([]);

    useEffect(() => {
        getStates()
    }, [])

    async function getStates() {
        let url = "http://localhost:3000/states.json"
        const response = await fetch(url)
        const datas = await response.json()
        setStates(datas)
    }

    const handleChange = (e) => {
        setStates(e.target.value);
    };

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="select-label">State</InputLabel>
                <Select labelId="select-label" id="select" value={states.value} label="State" onChange={handleChange}>
                    {
                        states.map((state, item) =>
                            <MenuItem key={item}>{state.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default DropdownState