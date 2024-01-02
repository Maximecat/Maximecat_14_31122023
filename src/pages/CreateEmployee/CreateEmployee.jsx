import './CreateEmployee.css';
import { Box, Button, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers';
import DropdownState from '../../components/DropdownState/DropdownState';
import DropdownDepartment from '../../components/DropdownDepartment/DropdownDepartment';
import { useState } from 'react';

function CreateEmployee() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipCode] = useState("")

  const submit = (e) => {
    e.preventDefault()
    console.log(firstname);
    console.log(lastname);
    console.log(street);
    console.log(city);
    console.log(zipcode);
  }

  return (
    <div className="main-container">
      <h1 className='hrnet-title'>HRnet</h1>
      <a className='link-page-employees' href="/employees">View Current Employees</a>
      <h2 className='create-employee'>Create Employee</h2>
      <form onSubmit={submit}>
        <TextField id="firstname" label="First Name" type='text' value={firstname} variant="outlined" style={{ marginBottom: "15px", marginTop: "25px" }} onChange={(e) => setFirstname(e.target.value)} />
        <TextField id="lastname" label="Last Name" type='text' value={lastname} variant="outlined" onChange={(e) => setLastname(e.target.value)} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField
            label="Date of Birth"
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
          <TextField id="outlined-basic" label="Street" type='text' value={street} variant="outlined" style={{ marginBottom: "15px" }} onChange={(e) => setStreet(e.target.value)} />
          <TextField id="outlined-basic" label="City" type='text' value={city} variant="outlined" style={{ marginBottom: "15px" }} onChange={(e) => setCity(e.target.value)} />
          <DropdownState />
          <TextField id="outlined-basic" label="Zip Code" type='text' value={zipcode} variant="outlined" style={{ marginTop: "15px" }} onChange={(e) => setZipCode(e.target.value)} />
        </Box>

        <DropdownDepartment />
        <Button type='submit' variant="contained" style={{ marginTop: "15px", marginBottom: "50px" }}>Save</Button>
      </form>
    </div>
  );
}

export default CreateEmployee;