import './CreateEmployee.css';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';

function CreateEmployee() {

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
    <div className="main-container">
      <h1 className='hrnet-title'>HRnet</h1>
      <a className='link-page-employees' href="/employees">View Current Employees</a>
      <h2 className='create-employee'>Create Employee</h2>
      <form>
        <TextField id="outlined-basic" label="First Name" variant="outlined" style={{ marginBottom: "15px", marginTop: "25px" }} />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField label="Date of Birth"
            slotProps={{
              textField: {
                helperText: 'MM/DD/YYYY',
              }
            }}
            style={{ marginTop: "15px", marginBottom: "5px" }}
          />
          <DatePicker label="Start Date"
            slotProps={{
              textField: {
                helperText: 'MM/DD/YYYY',
              }
            }}
            sx={{ width: 223 }}
          />
        </LocalizationProvider>

        <Box style={{ border: "2px solid black", borderRadius: "5px", marginTop: "10px", padding: "15px", display: "flex", flexDirection: "column" }} >
          <h3 className='address-title'>Address</h3>

          <TextField id="outlined-basic" label="Street" variant="outlined" style={{ marginBottom: "15px" }} />
          <TextField id="outlined-basic" label="City" variant="outlined" style={{ marginBottom: "15px" }} />

          <FormControl fullWidth>
            <InputLabel id="select-label">State</InputLabel>
            <Select labelId="select-label" id="select" value={states.value} label="State" onChange={handleChange}>
              {
                states.map((state) =>
                  <MenuItem>{state.name}</MenuItem>
                )
              }
            </Select>
          </FormControl>

          <TextField id="outlined-basic" label="Zip Code" variant="outlined" style={{ marginTop: "15px" }} />
        </Box>

        <FormControl fullWidth style={{ marginTop: "15px" }}>
          <InputLabel id="select-label">Department</InputLabel>
          <Select labelId="select-label" id="select" label="Department" onChange={handleChange} >
            <MenuItem>Sales</MenuItem>
            <MenuItem>Marketing</MenuItem>
            <MenuItem>Engineering</MenuItem>
            <MenuItem>Human Resources</MenuItem>
            <MenuItem>Legal</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" style={{ marginTop: "15px", marginBottom: "50px" }}>Save</Button>
      </form>
    </div>
  );
}

export default CreateEmployee;