import React from 'react';
import { Route } from "react-router";
import GmMonthlyTarget from '../pages/monthlytargets/gm/GmMonthlyTarget';
import SalesEngineerMonthlyTarget from '../pages/monthlytargets/salesengineer/SalesEngineerMonthlyTarget';
import SalesManagerMonthlyTarget from '../pages/monthlytargets/salesmanager/SalesManagerMonthlyTarget';
import ServiceMonthlyTarget from '../pages/monthlytargets/servicemonthlytargets/ServiceMonthlyTarget';
import PartsMonthlyTarget from '../pages/monthlytargets/parts/PartsMonthlyTarget'




const monthlytargetRoutes = [
    <Route path="/pages/monthlytargets/salesmanager/SalesManagerMonthlyTarget" element={<SalesManagerMonthlyTarget/>} key="SalesManagerMonthlyTarget" />,
    <Route path="/pages/monthlytargets/salesengineer/SalesEngineerMonthlyTarget" element={<SalesEngineerMonthlyTarget/>} key="SalesEngineerMonthlyTarget" />,
    <Route path="/pages/monthlytargets/gm/GmMonthlyTarget" element={<GmMonthlyTarget/>} key="GmMonthlyTarget" />,
    <Route path="/pages/monthlytargets/servicemonthlytargets/ServiceMonthlyTarget" element={<ServiceMonthlyTarget/>} key="ServiceMonthlyTarget" />,
    <Route path="/pages/monthlytargets/parts/PartsMonthlyTarget" element={<PartsMonthlyTarget/>} key="PartsMonthlyTarget" />


];

export default monthlytargetRoutes;