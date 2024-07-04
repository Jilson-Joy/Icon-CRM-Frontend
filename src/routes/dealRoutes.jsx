import React from 'react';
import { Route } from "react-router";
import AddDeals from '../pages/deals/create/AddDeals';
import DealsList from '../pages/deals/list/DealsList';
import UpdateDeals from '../pages/deals/update/update_deals';
import DealModal from '../pages/deals/list/DealModal';



const DealRoutes = [
  <Route path="/pages/deals/create/AddDeals" element={<AddDeals />} key="AddDeal" />,
  <Route path="/pages/deals/list/DealsList" element={<DealsList />} key="DealsList" />,
  <Route path="/pages/modifydeals/update/UpdateModifyDeals/:id" element={<UpdateDeals />} key="UpdateDeals" />,
  <Route path="/pages/deals/list/DealModal" element={ < DealModal /> } key="DealModal"/>
];

export default DealRoutes;
