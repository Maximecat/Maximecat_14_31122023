import './CreateEmployee.css';
import { Box, Button, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers';
import DropdownState from '../../components/DropdownState/DropdownState';
import DropdownDepartment from '../../components/DropdownDepartment/DropdownDepartment';

function CreateEmployee() {

  const firstname = document.getElementById('firstname')


  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="main-container">
      <h1 className='hrnet-title'>HRnet</h1>
      <a className='link-page-employees' href="/employees">View Current Employees</a>
      <h2 className='create-employee'>Create Employee</h2>
      <form onSubmit={submit}>
        <TextField id="firstname" label="First Name" value={firstname} variant="outlined" style={{ marginBottom: "15px", marginTop: "25px" }} />
        <TextField id="lastname" label="Last Name" variant="outlined" />

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
          <DropdownState />
          <TextField id="outlined-basic" label="Zip Code" variant="outlined" style={{ marginTop: "15px" }} />
        </Box>

        <DropdownDepartment />
        <Button type='submit' variant="contained" style={{ marginTop: "15px", marginBottom: "50px" }}>Save</Button>
      </form>
    </div>
  );
}

export default CreateEmployee;