import React from 'react';
import { Route } from "react-router";
import AddDepartment from '../pages/department/create/add_department'
import DepartmentList from '../pages/department/list/list_department';
import Updatedepartment from '../pages/department/update/update_department';



const DepartmentRoutes = [
    <Route path="pages/department/create/AddDepartment" element={<AddDepartment/>} key="AddDepartment" />,
    <Route path="/pages/department/list/DepartmentList" element={<DepartmentList/>} key="DepartmentList" />,
    <Route path="/pages/department/update/update_department" element={<Updatedepartment/>} key="Updatedepartment" />

];

export default DepartmentRoutes;