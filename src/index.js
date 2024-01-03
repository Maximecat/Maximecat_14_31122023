import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployee />
  },
  {
    path: "/employees",
    element: <EmployeeList />
  }
])
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
