import React from 'react';
import { Route } from "react-router";
import Add_Designation from '../pages/designation/form/Add_Designation';
import Table_AddDesignation from '../pages/designation/list/Table_AddDesignation';




const DesignationRoutes = [
    <Route path="/pages/designation/form/Add_Designation" element={<Add_Designation/>} key="Add_Designation" />,

    <Route path="/designation/table" element={<Table_AddDesignation/>} key="Table_AddDesignation" />,
 


];

export default DesignationRoutes;