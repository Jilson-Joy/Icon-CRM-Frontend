import React from 'react';
import { Route } from "react-router";
import AddMachine from '../pages/machine/add/AddMachine';
import MachineTable from '../pages/machine/list/MachineTable';



const MachineRoutes = [
    <Route path="/pages/machine/add/AddMachine" element={<AddMachine/>} key="AddMachine" />,
    <Route path="/pages/machine/list/MachineTable" element={<MachineTable/>} key="MachineTable" />


];

export default MachineRoutes;