import React from 'react';
import { Route, Routes as RoutesContainer } from 'react-router-dom';

import { ROLE_ADMIN } from '../constants/rolesConstant';
import * as URL from '../constants/urls/urlFrontEnd';
import AdminHomeView from '../views/AdminHomeView';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import { PrivateRoute } from './PrivateRoute';
import RegisterView from '../views/RegistrerView';

const Routes = () => {
    return (
        <RoutesContainer>
            <Route
                path={URL.URL_HOME}
                element={
                        <HomeView />
                }
            />
            <Route
                path={URL.URL_ADMIN_HOME}
                element={
                    <PrivateRoute roles={[ROLE_ADMIN]}>
                        <AdminHomeView />
                    </PrivateRoute>
                }
            />
            <Route path={URL.URL_LOGIN} element={<LoginView />} />
            <Route path={URL.URL_HOME} element={<HomeView />} />
            <Route path={URL.URL_REGISTER} element={<RegisterView/>}/>
        </RoutesContainer>
    );
};

export default Routes;
