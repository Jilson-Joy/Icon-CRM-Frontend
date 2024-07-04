import React from 'react';
import { Route } from "react-router";
import Addbranch from '../pages/branch/create/add_branch';
import BranchList from '../pages/branch/list/list_branch';
import UpdateBranch from '../pages/branch/update/update_branch';



const BranchRoutes = [
    <Route path="/pages/branch/create/Addbranch" element={<Addbranch/>} key="Addbranch" />,
    <Route path="/pages/branch/list/BranchList" element={<BranchList/>} key="BranchList" />,
    <Route path="/pages/branch/update/update_branch" element={<UpdateBranch/>} key="UpdateBranch" />


];

export default BranchRoutes;