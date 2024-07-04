import React from 'react';
import { Route } from "react-router";
import AddSalesCall from '../pages/salescalls/create/add_sales_calls'
import SalesCallList from '../pages/salescalls/list/list_sales_calls';
import UpdateSalesCall from '../pages/salescalls/update/UpdateSalesCall';



const SalesCallRoutes = [
    <Route path="/salescalls/create/add-sales-calls" element={<AddSalesCall/>} key="AddSalesCall" />,
    <Route path="/salescalls/list/list-sales-calls" element={<SalesCallList/>} key="SalesCallList" />,
    <Route path="/pages/salescalls/update/UpdateSalesCall/:id" element={<UpdateSalesCall/>} key="UpdateSalesCall" />

];

export default SalesCallRoutes;