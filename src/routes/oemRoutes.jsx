import React from 'react';
import { Route } from "react-router";
import Add_Oem from '../pages/oem/form/Add_Oem';
import List_Oem from '../pages/oem/list/List_Oem';



const OemRoutes = [
    <Route path="/pages/oem/form/Add_Oem" element={<Add_Oem/>} key="Add_Oem" />,
    <Route path="/pages/oem/list/List_Oem" element={<List_Oem/>} key="List_Oem" />


];

export default OemRoutes;