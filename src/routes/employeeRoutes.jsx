import React from 'react';
import { Route } from "react-router";
import AddEmployee from '../pages/employee/create/AddEmployee';
import EmployeeList from '../pages/employee/list/EmployeeList';
import UpdateAddEmployee from '../pages/employee/update/UpdateAddEmployee';



const EmployeeRoutes = [
    <Route path="/pages/employee/create/AddEmployee" element={<AddEmployee/>} key="AddEmployee" />,
    <Route path="/pages/employee/list/EmployeeList" element={<EmployeeList/>} key="EmployeeList" />,
    <Route path="/pages/employee/update/UpdateAddEmployee/:id" element={<UpdateAddEmployee/>} key="UpdateAddEmployee" />,



];

export default EmployeeRoutes;