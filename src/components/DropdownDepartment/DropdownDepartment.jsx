import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import './DropdownDepartment.css'
import { useState } from 'react';

function DropdownDepartment() {

    const [department, setDepartment] = useState("")

    const handleChange = (e) => {
        setDepartment(e.target.value)
    };

    return (
        <>
            <FormControl fullWidth style={{ marginTop: "15px" }}>
                <InputLabel id="select-label">Department</InputLabel>
                <Select labelId="select-label" id="select" label="Department" value={department} onChange={handleChange}>
                    {/* onChange={handleChange} sur le select au dessus */}
                    <MenuItem>Sales</MenuItem>
                    <MenuItem>Marketing</MenuItem>
                    <MenuItem>Engineering</MenuItem>
                    <MenuItem>Human Resources</MenuItem>
                    <MenuItem>Legal</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default DropdownDepartment