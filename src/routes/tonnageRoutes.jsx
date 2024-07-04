import React from 'react';
import { Route } from "react-router";
import Add_Tonnage from '../pages/tonnage/form/Add_Tonnage';
import List_Tonnage from '../pages/tonnage/list/List_Tonnage';



const TonnageRoutes = [
    <Route path="/pages/tonnage/form/Add_Tonnage" element={<Add_Tonnage/>} key="Add_Tonnage" />,
    <Route path="/pages/tonnage/list/List_Tonnage" element={<List_Tonnage/>} key="List_Tonnage" />


];

export default TonnageRoutes;