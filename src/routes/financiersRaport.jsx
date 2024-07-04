import React from 'react';
import { Route } from "react-router";
import AddFinanciersReports from '../pages/financiers/create/AddFinanciersReports';
import FinanciersReportList from '../pages/financiers/list/FinanciersReportList';
import AddFinancier from '../pages/Table/financier_form/AddFinancier';
import Table_AddFinancier from '../pages/Table/financier_list/Table_AddFinancier';




const FinancierRoutes = [
    <Route path="/pages/financiers/create/AddFinanciersReports" element={<AddFinanciersReports/>} key="AddFinanciersReports" />,

    <Route path="pages/financiers/list/FinanciersReportList" element={<FinanciersReportList/>} key="FinanciersReportList" />,

    <Route path="/pages/Table/financier_form/AddFinancier" element={<AddFinancier/>} key="AddFinancier" />,

    <Route path="/pages/Table/financier_list/Table_AddFinancier" element={<Table_AddFinancier/>} key="Table_AddFinancier" />,
    
    
    



];

export default FinancierRoutes;