import React from 'react';
import { Route } from "react-router";
import ProductDetails from '../pages/Table/marketing_form/Product_detials';
import PdctDetials_List from '../pages/Table/marketing_list/PdctDetials_List';
import Product_Update from '../pages/Table/marketing_update/Product_Update';
import Table_prdctdetials from '../pages/Table/marketing_list/Table_prdctdetials';



const MarkettingRoutes = [
    <Route path="/pages/Table/marketing_form/Product_detials" element={<ProductDetails/>} key="ProductDetails" />,
    <Route path="/pages/Table/marketing_list/PdctDetials_List" element={<PdctDetials_List/>} key="PdctDetials_List" />,
    <Route path="/pages/Table/marketing_update/Product_Update/:id" element={<Product_Update/>} key="Product_Update" />,
    <Route path="/pages/Table/marketing_list/Table_prdctdetials" element={<Table_prdctdetials/>} key="Table_prdctdetials" />



];

export default MarkettingRoutes;