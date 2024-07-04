import React from 'react';
import { Route } from "react-router";
import AddSegment from '../pages/segment/create/AddSegment';
import SegmentList from '../pages/segment/list/SegmentList';




const SegmentRoutes = [
    <Route path="/pages/segment/create/AddSegment" element={<AddSegment/>} key="AddSegment" />,
    <Route path="/pages/segment/list/SegmentList" element={<SegmentList/>} key="SegmentList" />


];

export default SegmentRoutes;