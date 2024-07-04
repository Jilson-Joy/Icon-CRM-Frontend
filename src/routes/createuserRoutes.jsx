import React from 'react'
import { Route } from "react-router";
import CreateUser from '../pages/create_user/CreateUser'; 

const CreateUserRoutes=[
    <Route path="/pages/create_user/CreateUser" element={<CreateUser/>} key={CreateUser}/>
];

export default CreateUserRoutes