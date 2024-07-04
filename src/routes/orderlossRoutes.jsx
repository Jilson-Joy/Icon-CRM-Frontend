import React from 'react';
import { Route } from "react-router";
import Order_loss from '../pages/Sales/form/Order_loss';
import List_OrderLoss from '../pages/Sales/form/list/List_OrderLoss';



const OrderLossRoutes = [
    <Route path="/order/loss" element={<Order_loss/>} key="Order_loss" />,
    <Route path="/pages/Sales/form/list/List_OrderLoss" element={<List_OrderLoss/>} key="List_OrderLoss" />

];

export default OrderLossRoutes;