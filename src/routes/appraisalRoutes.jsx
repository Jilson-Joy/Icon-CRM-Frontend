import React from 'react';
import { Route } from "react-router";
import ServiceAppraisal from '../pages/appraisal/serviceappraisal/ServiceAppraisal';
import SalesManagerAppraisal from '../pages/appraisal/salesmanagerappraisal/SalesManagerAppraisal';
import SalesEngineerAppraisal from '../pages/appraisal/salesengineerappraisal/SalesEngineerAppraisal';
import GmAppraisal from '../pages/appraisal/gmappraisal/GmAppraisal';
import PartsMonthlyTarget from '../pages/appraisal/partsappraisal/PartsAppraisal';




const appraisalRoutes = [
    <Route path="/pages/appraisal/serviceappraisal/ServiceAppraisal" element={<ServiceAppraisal/>} key="ServiceAppraisal" />,
    <Route path="/pages/appraisal/salesmanagerappraisal/SalesManagerAppraisal" element={<SalesManagerAppraisal/>} key="SalesManagerAppraisal" />,
    <Route path="/pages/appraisal/salesengineerappraisal/SalesEngineerAppraisal" element={<SalesEngineerAppraisal/>} key="SalesEngineerAppraisal" />,
    <Route path="/pages/appraisal/gmappraisal/GmAppraisal" element={<GmAppraisal/>} key="GmAppraisal" />,
    <Route path="/pages/appraisal/partsappraisal/PartsAppraisal" element={<PartsMonthlyTarget/>} key="PartsMonthlyTarget" />


];

export default appraisalRoutes;