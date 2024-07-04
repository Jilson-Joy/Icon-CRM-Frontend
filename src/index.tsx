import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
/* FlowBite */
import theme from './flowbite-theme';
import { Flowbite } from 'flowbite-react';

import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

/* Dashboard */
import DashboardPage from './pages';

import { Provider } from 'react-redux';
import store from './components/redux/store';
import PrivateRoutes from './protectedRoute';
const container = document.getElementById('root');

import AuthRoutes from './routes/authRoutes';
import DealRoutes from './routes/dealRoutes';
import ProspectRoutes from './routes/prospectRoutes';
import SalesCallRoutes from './routes/salesCallRoutes';
import DepartmentRoutes from './routes/departmentRoutes';
import BranchRoutes from './routes/branchRoutes';
import MarkettingRoutes from './routes/markettingRoutes';
import SegmentRoutes from './routes/segmentRoutes';
import MachineRoutes from './routes/machineRoutes';
import OemRoutes from './routes/oemRoutes';
import TonnageRoutes from './routes/tonnageRoutes';
import EmployeeRoutes from './routes/employeeRoutes';
import FinancierRoutes from './routes/financiersRaport';
import DesignationRoutes from './routes/designationRoutes';
import TivProjectionRoutes from './routes/tivProjectionRoutes';
import OrderLossRoutes from './routes/orderlossRoutes';
import ReportsRoutes from './routes/reportRoutes';
import ProfileModalRoutes from './routes/profileModalRoutes';
import CreateUserRoutes from './routes/createuserRoutes';
import McSalesRoutes from './routes/mcsalesRoutes';
import OfmRoutes from './routes/ofmRoutes'
import appraisalRoutes from './routes/appraisalRoutes'
import monthlytargetRoutes from './routes/monthlytargetRoutes'

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Flowbite theme={{ theme }}>
        <BrowserRouter>
          <Routes>
            {/* authentication */}
            {AuthRoutes}

            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<DashboardPage />} index />

              {/* deal routes */}
              {DealRoutes}

              {/* branch routes */}
              {BranchRoutes}

              {/* prospect routes */}
              {ProspectRoutes}

              {SalesCallRoutes}

              {DepartmentRoutes}

              {MarkettingRoutes}

              {SegmentRoutes}

              {MachineRoutes}

              {OemRoutes}

              {TonnageRoutes}

              {EmployeeRoutes}

              {FinancierRoutes}

              {DesignationRoutes}

              {TivProjectionRoutes}

              {OrderLossRoutes}

              {ReportsRoutes}

              {ProfileModalRoutes}

              {CreateUserRoutes}

              {McSalesRoutes}

              {OfmRoutes}

              {appraisalRoutes}

              {monthlytargetRoutes}

            </Route>
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </Provider>
  </StrictMode>
);
