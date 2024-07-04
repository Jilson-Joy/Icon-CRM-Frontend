import React from 'react';
import { Route } from "react-router";
import AddDealsReport from '../pages/reports/dealsreport/create/AddDealsReport';
import FinanciersReportList from '../pages/financiers/list/FinanciersReportList';

// markettingactivity
import Open_marketingactvty from '../pages/reports/marketing_activity_report/open_marketing_activity/Open_marketingactvty_List';

import Open_marketingactvty_Form from '../pages/reports/marketing_activity_report/open_marketing_activity/Open_marketingactvty_Form';

import Cmpltd_marketingactvty_List from '../pages/reports/marketing_activity_report/completed_marketing_activity/Cmpltd_marketingactvty_List';


import Add_prospect_report from '../pages/reports/prospects_report/create/Add_prospect_report';

import Add_sales_call_report from '../pages/reports/sales_call_report/create/Add_sales_call_repoart';


import List_stage_report from '../pages/reports/stage_report/list/List_stage_report';


import List_fleet from '../pages/reports/fleetdetails/list/list_fleet';


import NoOfMachine from '../pages/reports/fleetdetails/no_of_machine/NoofMachine';


import Order_loss_report from '../pages/reports/order_loss_report/list/Order_loss_report';

import Expense_report from '../pages/reports/expensebillReport/list/Expense_report';

import AddNewBill from '../pages/reports/expensebillReport/newBill/AddNewBill';

import Form_New_Bill from '../pages/reports/expensebillReport/newBillForm/Form_New_Bill';

import ExpenseReportTable from '../pages/reports/expenseReport/ExpenseReportTable';

import List_Product_Report from '../pages/reports/product_Report/List_Product_Report';

import CustomerSegmentReport from '../pages/reports/customer_Segment_Report/CustomerSegmentReport';

import ProductivityReport from '../pages/reports/productivity_report/ProductivityReport';


import Profitability_Report from '../pages/reports/profitabilityreport/Profitability_Report';

import FinanciersReport from '../pages/reports/financiers_Report/list_Financiers_report/FinanciersReport';

import FinanceiersDetails from '../pages/reports/financiers_Report/financeiers_details/FinanceiersDetails';

import ProjectedTiv from '../pages/reports/tivreport/ProjectedTiv';

import TivAccuracy from '../pages/reports/tivreport/accuracy/TivAccuracy'

import AddTivReport from '../pages/reports/tivreport/accuracy/AddTivReport'

import ROIEntryForm from '../pages/reports/marketing_activity_report/roi_marketing_activity/ROI_entryform'

import ROI_displayList from '../pages/reports/marketing_activity_report/roi_marketing_activity/ROI_displayList'






const ReportsRoutes = [
    // deals report
    <Route path="/pages/reports/dealsreport/create/AddDealsReport" element={<AddDealsReport/>} key="AddDealsReport" />,

    //FinanciersReportList

    <Route path="pages/financiers/list/FinanciersReportList" element={<FinanciersReportList/>} key="FinanciersReportList" />,

    <Route path="/pages/reports/marketing_activity_report/open_marketing_activity/Open_marketingactvty" element={<Open_marketingactvty/>} key="Open_marketingactvty" />,

    <Route path="/pages/reports/marketing_activity_report/open_marketing_activity/Open_marketingactvty_Form/:id" element={<Open_marketingactvty_Form/>} key="Open_marketingactvty_Form" />,

    <Route path="/pages/reports/marketing_activity_report/completed_marketing_activity/Cmpltd_marketingactvty_List" element={<Cmpltd_marketingactvty_List/>} key="Cmpltd_marketingactvty_List" />,

    // Prospects Report
    <Route path="/pages/reports/prospects_report/create/Add_prospect_report" element={<Add_prospect_report/>} key="Add_prospect_report" />,
    
    //sales call
    <Route path="/pages/reports/sales_call_report/create/Add_sales_call_repoart" element={<Add_sales_call_report/>} key="Add_sales_call_report" />,

    // List_stage_report
    <Route path="/pages/reports/stage_report/list/List_stage_report" element={<List_stage_report/>} key="List_stage_report" />,

    //fleet
    <Route path="/pages/reports/fleetdetails/list/list_fleet" element={<List_fleet/>} key="List_fleet" />,

    
    <Route path="/pages/reports/fleetdetails/no_of_machine/NoofMachine" element={<NoOfMachine/>} key="NoOfMachine" />,

    
    <Route path="/pages/reports/order_loss_report/list/Order_loss_report" element={<Order_loss_report/>} key="Order_loss_report" />,

    
    <Route path="/pages/reports/expensebillReport/list/Expense_report" element={<Expense_report/>} key="Expense_report" />,

    <Route path="/pages/reports/expensebillReport/newBill/AddNewBill" element={<AddNewBill/>} key="AddNewBill" />,

    
    <Route path="/pages/reports/expensebillReport/newBillForm/Form_New_Bill" element={<Form_New_Bill/>} key="Form_New_Bill" />,

        
    <Route path="/pages/reports/expenseReport/ExpenseReportTable" element={<ExpenseReportTable/>} key="ExpenseReportTable" />,

    <Route path="/pages/reports/product_Report/list_Product_Report" element={<List_Product_Report/>} key="List_Product_Report" />,

    <Route path="/pages/reports/customer_Segment_Report/CustomerSegmentReport" element={<CustomerSegmentReport/>} key="CustomerSegmentReport" />,

    
    <Route path="/pages/reports/productivity_report/ProductivityReport" element={<ProductivityReport/>} key="ProductivityReport" />,

    
    
    <Route path="/pages/reports/profitabilityreport/Profitability_Report" element={<Profitability_Report/>} key="Profitability_Report" />,



    <Route path="/pages/reports/financiers_Report/list_Financiers_report/FinanciersReport" element={<FinanciersReport/>} key="FinanciersReport" />,

    <Route path="/pages/reports/financiers_Report/financeiers_details/FinanceiersDetails" element={<FinanceiersDetails/>} key="FinanceiersDetails" />,

    <Route path="/pages/reports/tivreport/ProjectedTiv" element={<ProjectedTiv/>} key="ProjectedTiv" />,

    <Route path="/pages/reports/tivreport/accuracy/TivAccuracy" element={<TivAccuracy/>} key="TivAccuracy" />,

    <Route path="/pages/reports/tivreport/AddTivReport" element={<AddTivReport/>} key="AddTivReport" />,


    <Route path="/pages/reports/marketing_activity_report/roi_marketing_activity/ROI_entryform" element={<ROIEntryForm/>} key="ROIEntryForm" />,


    <Route path="/pages/reports/marketing_activity_report/roi_marketing_activity/ROI_displayList" element={<ROI_displayList/>} key="ROI_displayList" />,


    
    



];

export default ReportsRoutes;