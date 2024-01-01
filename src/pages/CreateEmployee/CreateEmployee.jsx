import './CreateEmployee.css';

function CreateEmployee() {
  return (
    <div className="main">
      <h1 className='hrnet-title'>HRnet</h1>
      <div className='container'>
        <a className='link-page-employees' href="/employees">View Current Employees</a>
        <h2 className='create-employee'>Create Employee</h2>
      </div>
    </div>
  );
}

export default CreateEmployee;
