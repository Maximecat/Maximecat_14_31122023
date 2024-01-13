import './CreateEmployee.css';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { handleModal, saveAction } from '../../redux/actions/user.action';
import { Link } from 'react-router-dom';

function CreateEmployee() {
  const dispatch = useDispatch()

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [birthDate, setBirthDate] = useState(dayjs('2022-04-17'))
  const [startDate, setStartDate] = useState(dayjs('2022-04-17'))
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipCode] = useState("")
  const [department, setDepartment] = useState("")

  const [states, setStates] = useState([]);

  // const done = useSelector((state) => state.user.done)

  useEffect(() => {
    getStates()
  }, [])

  async function getStates() {
    let url = "http://localhost:3000/states.json"
    const response = await fetch(url)
    const datas = await response.json()
    setStates(datas)
  }

  const handleChangeDepartment = (e) => {
    setDepartment(e.target.value)
  };

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  const handleClose = () => dispatch(handleModal(false));

  const submit = (e) => {
    e.preventDefault()
    dispatch(saveAction({
      id: firstname + lastname,
      firstname,
      lastname,
      birthDate: birthDate.toISOString(),
      startDate: startDate.toISOString(),
      street,
      city,
      zipcode,
      state,
      department
    }))
  }

  return (
    <div className="main-container">
      <h1 className='hrnet-title'>HRnet</h1>
      <Link className='link-page-employees' to="/employees">View Current Employees</Link>
      <h2 className='create-employee'>Create Employee</h2>
      <form onSubmit={submit}>
        <TextField id="firstname" label="First Name" type='text' value={firstname} variant="outlined" style={{ marginBottom: "15px", marginTop: "25px" }} onChange={(e) => setFirstname(e.target.value)} />
        <TextField id="lastname" label="Last Name" type='text' value={lastname} variant="outlined" onChange={(e) => setLastname(e.target.value)} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={birthDate}
            slotProps={{ textField: { helperText: 'MM/DD/YYYY' } }}
            sx={{ marginTop: "15px", marginBottom: "5px", width: 223 }}
            onChange={(newValue) => setBirthDate(newValue)}
          />
          <DatePicker
            label="Start Date"
            value={startDate}
            slotProps={{ textField: { helperText: 'MM/DD/YYYY' } }}
            sx={{ width: 223 }}
            onChange={(newValue) => setStartDate(newValue)}
          />
        </LocalizationProvider>

        <Box style={{ border: "2px solid black", borderRadius: "5px", marginTop: "10px", padding: "15px", display: "flex", flexDirection: "column" }} >
          <h3 className='address-title'>Address</h3>
          <TextField id="street" label="Street" type='text' value={street} variant="outlined" style={{ marginBottom: "15px" }} onChange={(e) => setStreet(e.target.value)} />
          <TextField id="city" label="City" type='text' value={city} variant="outlined" style={{ marginBottom: "15px" }} onChange={(e) => setCity(e.target.value)} />
          <FormControl fullWidth>
            <InputLabel id="state-select-label">State</InputLabel>
            <Select labelId="state-select-label" id="state-select" value={state} label="State" onChange={handleChangeState}>
              {
                states.map((state, item) =>
                  <MenuItem key={item} value={state.name}>{state.name}</MenuItem>
                )
              }
            </Select>
          </FormControl>
          <TextField id="zipcode" label="Zip Code" type='text' value={zipcode} variant="outlined" style={{ marginTop: "15px" }} onChange={(e) => setZipCode(e.target.value)} />
        </Box>

        <FormControl fullWidth style={{ marginTop: "15px", width: 223 }}>
          <InputLabel id="department-select-label">Department</InputLabel>
          <Select labelId="department-select-label" id="department-select" label="Department" onChange={handleChangeDepartment}>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Legal">Legal</MenuItem>
          </Select>
        </FormControl>
        <Button type='submit' variant="contained" style={{ marginTop: "15px", marginBottom: "50px" }}>Save</Button>
      </form>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Employee Created !
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}

export default CreateEmployee;