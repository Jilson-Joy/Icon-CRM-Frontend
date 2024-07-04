import React from 'react';
import { Route } from "react-router";
import ProfileModal from '../components/profilemodal/ProfileModal'



const ProfileModalRoutes = [
    <Route path="/components/profilemodal/ProfileModal" element={<ProfileModal/>} key="ProfileModal" />,

];

export default ProfileModalRoutes;