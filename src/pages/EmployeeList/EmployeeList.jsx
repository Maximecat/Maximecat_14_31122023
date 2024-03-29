import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './EmployeeList.css';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

function EmployeeList() {

    const columns = [
        {
            field: 'firstname',
            headerName: 'First name',
            type: 'string',
            width: 120
        },
        {
            field: 'lastname',
            headerName: 'Last name',
            type: 'string',
            width: 120
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            type: 'Date',
            width: 120,
            valueGetter: (params) => dayjs(params.row.startDate).format('MM/DD/YYYY')
        },
        {
            field: 'department',
            headerName: 'Department',
            type: 'string',
            width: 120
        },
        {
            field: 'birthDate',
            headerName: 'Date of Birth',
            type: 'Date',
            width: 120,
            valueGetter: (params) => dayjs(params.row.birthDate).format('MM/DD/YYYY')
        },
        {
            field: 'street',
            headerName: 'Street',
            type: 'string',
            width: 150
        },
        {
            field: 'city',
            headerName: 'City',
            type: 'string',
            width: 150
        },
        {
            field: 'state',
            headerName: 'State',
            type: 'string',
            width: 120
        },
        {
            field: 'zipcode',
            headerName: 'Zip Code',
            type: 'number',
            width: 100
        }
    ];

    const rows = useSelector((state) => state.user.users);

    return (
        <div className="main-container">
            <h1 className='current-employees'>Current Employees</h1>
            <DataGrid
                getRowId={(row) => row.id}
                rows={rows}
                columns={columns}
                initialState={{
                    filter: {
                        filterModel: {
                            items: [],
                            quickFilterValues: [],
                        },
                    },
                    pagination: {
                        paginationModel: {
                            pageSize: 10 || 25 || 50 || 100
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
                pageSizeOptions={[10, 25, 50, 100]}
                disableRowSelectionOnClick
            />
            <Link to="/" className='link-to-home'>Home</Link>
        </div>
    );
}

export default EmployeeList;