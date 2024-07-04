import React from 'react';
import { Route } from "react-router";
import AddProspects from '../pages/prospects/create/add_prospects'
import ListProspects from '../pages/prospects/list/list_prospects';



const ProspectRoutes = [
    <Route path="/prospects/create/add-prospects" element={<AddProspects/>} key="AddProspects" />,
    <Route path="/prospects/list/list-prospects" element={<ListProspects/>} key="ListProspects" />

];

export default ProspectRoutes;