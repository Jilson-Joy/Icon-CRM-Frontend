import React from 'react';
import { Route } from "react-router";
import AddTivProjection from '../pages/tivprojection/create/AddTivProjection';
import TivProjectionList from '../pages/tivprojection/list/TivProjectionList';
import UpdateDetails from '../pages/tivprojection/update/UpdateDetails';



const TivProjectionRoutes = [
    <Route path="/pages/tivprojection/create/AddTivProjection" element={<AddTivProjection/>} key="AddTivProjection" />,
    <Route path="/pages/tivprojection/list/TivProjectionList" element={<TivProjectionList/>} key="TivProjectionList" />,
    <Route path="/pages/tivprojection/update/UpdateDetails" element={<UpdateDetails/>} key="UpdateDetails" />,



];

export default TivProjectionRoutes;