import React, { useEffect, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import {
  LayoutDashboard,
  UserPlus,
  PackageOpen,
  Blocks,
  Split,
  Users,
  LayoutPanelTop,
  FolderSearch2,
  Handshake,
  Percent,
  Store,
  HandCoins,
  ListTodo,
  MessageSquareWarning,
  Ungroup,
  Wrench,
  Factory,
  Weight,
  CirclePercent,
  NotepadText,
  OctagonAlert,
  ChevronDown,
  PackageSearch,
  BriefcaseBusiness,
  BarChartHorizontalBig,
  Blinds,
  LayoutTemplate,
  Settings,
  UsersRound,
  List,
  CirclePlus,
  CandlestickChart,
  BookCopy,
  ClipboardList,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import CreateUser from '../pages/create_user/CreateUser';
import AddDealsModal from '../pages/deals/create/AddDealsModal';
import SalesAddModal from '../pages/salescalls/list/SalesAddModal';
import PdctAddModal from '../pages/Table/marketing_list/PdctAddModal';

const ExampleSidebar = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);
  const [showNavbarItemDropdown, setShowNavbarItemDropdown] = useState(false);
  const [showDealsDropdown, setShowDealsDropdown] = useState(false);
  const [showMarketingDropdown, setShowMarketingDropdown] = useState(false);
  const [showLookUpDropdown, setShowLookUpDropdown] = useState(false);
  const [showLookUpSettingDropdown, setShowLookUpSettingDropdown] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
  const [showOrderLossDropdown, setShowOrderLossDropdown] = useState(false);
  const [showAppraisalDropdown, setShowAppraisalDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMonthlyTargetDropdown, setShowMonthlyTargetDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust as needed for your breakpoints
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const newPage = window.location.pathname;
    setCurrentPage(newPage);
  }, []);

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  const toggleDropdown = () => {
    setShowNavbarItemDropdown((prevState) => !prevState);
  };

  const user = getUserFromLocalStorage();
  const isManager = user?.designation === 'Manager';

  return (
    <>
      {!isMobileView && (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <div className="flex h-full flex-col justify-between">
            <div>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <ProfileCard />
                </Sidebar.ItemGroup>

                <Sidebar.ItemGroup>
                  <Link to={'/'}>
                    <Sidebar.Item
                      icon={LayoutDashboard}
                      className={'/' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                      Dashboard
                    </Sidebar.Item>
                  </Link>
                  {isManager && (
                    <>
                      <Sidebar.Item
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                        icon={UsersRound}
                        className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                          User
                          <ChevronDown />
                        </span>
                      </Sidebar.Item>

                      {showUserDropdown && (
                        <div style={{ backgroundColor: '#F0EBE3' }}>
                          <Link to={''}>
                            <Sidebar.Item
                              icon={List}
                              className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                              List
                            </Sidebar.Item>
                          </Link>

                          <Sidebar.Item
                            icon={UserPlus}
                            className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
                            onClick={() => setShowCreateUserModal(true)}>
                            Add
                          </Sidebar.Item>
                        </div>
                      )}
                    </>
                  )}

                  <Sidebar.Item
                    onClick={toggleDropdown}
                    icon={MessageSquareWarning}
                    className={
                      '/page/prospect' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Prospect
                      <ChevronDown />
                    </span>
                  </Sidebar.Item>
                  {showNavbarItemDropdown && (
                    <div style={{ backgroundColor: '#F0EBE3' }}>
                      <Link to={'/prospects/list/list-prospects'}>
                        <Sidebar.Item
                          icon={List}
                          className={
                            '/prospects/list/list-prospects' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          List
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/prospects/create/add-prospects'}>
                        <Sidebar.Item
                          icon={CirclePlus}
                          className={
                            '/prospects/create/add-prospects' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Add
                        </Sidebar.Item>
                      </Link>
                    </div>
                  )}

                  <Sidebar.Item
                    onClick={() => setShowDealsDropdown(!showDealsDropdown)} // Toggle Deals dropdown
                    icon={Handshake}
                    className={'/page/deals' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Deals <ChevronDown />
                    </span>
                  </Sidebar.Item>

                  {showDealsDropdown && (
                    <div style={{ backgroundColor: '#F0EBE3' }}>
                      <Link to={'/pages/deals/list/DealsList'}>
                        <Sidebar.Item
                          icon={List}
                          className={
                            '/pages/deals/list/DealsList' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          List
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/deals/create/AddDeals'}>
                        <Sidebar.Item
                          icon={CirclePlus}
                          className={
                            '/pages/deals/create/AddDeals' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Add
                        </Sidebar.Item>
                      </Link>
                    </div>
                  )}

                  <Link to={'/salescalls/list/list-sales-calls'}>
                    <Sidebar.Item
                      icon={Percent}
                      className={
                        '/salescalls/list/list-sales-calls' === currentPage
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }>
                      Sales calls
                    </Sidebar.Item>
                  </Link>

                  <Link to={'/pages/Table/marketing_list/PdctDetials_List'}>
                    <Sidebar.Item
                      icon={Store}
                      className={
                        '/pages/Table/marketing_list/PdctDetials_List' === currentPage
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }>
                      Marketting activities
                    </Sidebar.Item>
                  </Link>

                  <Link to={'/pages/machine/list/MachineTable'}>
                    <Sidebar.Item
                      icon={Wrench}
                      className={
                        '/page/marketting' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                      }>
                      Machine
                    </Sidebar.Item>
                  </Link>

                  <Sidebar.Item
                    onClick={() => setShowEmployeeDropdown(!showEmployeeDropdown)}
                    icon={Users}
                    className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Employee
                      <ChevronDown />
                    </span>
                  </Sidebar.Item>
                  {showEmployeeDropdown && (
                    <div style={{ backgroundColor: '#F0EBE3' }}>
                      <Link to={'/pages/employee/list/EmployeeList'}>
                        <Sidebar.Item
                          icon={List}
                          className={
                            '/pages/employee/list/EmployeeList' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          List
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/employee/create/AddEmployee'}>
                        <Sidebar.Item
                          icon={CirclePlus}
                          className={
                            '/pages/employee/create/AddEmployee' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Add
                        </Sidebar.Item>
                      </Link>
                    </div>
                  )}

                  <Link to={'/pages/financiers/list/FinanciersReportList'}>
                    <Sidebar.Item
                      icon={HandCoins}
                      className={
                        '/page/financiers' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                      }>
                      Financiers Raport
                    </Sidebar.Item>
                  </Link>

                  <Sidebar.Item
                    onClick={() => setShowOrderLossDropdown(!showOrderLossDropdown)}
                    icon={PackageOpen}
                    className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Order Loss
                      <ChevronDown />
                    </span>
                  </Sidebar.Item>
                  {showOrderLossDropdown && (
                    <div style={{ backgroundColor: '#F0EBE3' }}>
                      <Link to={'/pages/Sales/form/list/List_OrderLoss'}>
                        <Sidebar.Item
                          icon={List}
                          className={
                            '/pages/Sales/form/list/List_OrderLoss' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          List
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/order/loss'}>
                        <Sidebar.Item
                          icon={CirclePlus}
                          className={
                            '/order/loss' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                          }>
                          Add
                        </Sidebar.Item>
                      </Link>
                    </div>
                  )}

                  <Sidebar.Item
                    onClick={() => setShowLookUpSettingDropdown(!showLookUpSettingDropdown)}
                    icon={Settings} // Replace with your desired icon
                    className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Settings <ChevronDown />
                    </span>
                  </Sidebar.Item>

                  {/* Nested Dropdowns */}
                  {showLookUpSettingDropdown && (
                    <div>
                      {/* Lookup Dropdown */}
                      <Sidebar.Item
                        onClick={() => setShowLookUpDropdown(!showLookUpDropdown)}
                        icon={Percent} // Replace with your desired icon
                        className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                          Lookup <ChevronDown />
                        </span>
                      </Sidebar.Item>

                      {/* Items under Lookup Dropdown */}
                      {showLookUpDropdown && (
                        <div style={{ backgroundColor: '#F0EBE3' }}>
                          <Link to="/pages/department/list/DepartmentList">
                            <Sidebar.Item
                              icon={Blocks} // Replace with your desired icon
                              className={
                                '/pages/department/list/DepartmentList' === currentPage
                                  ? 'bg-gray-100 dark:bg-gray-700'
                                  : ''
                              }>
                              Department
                            </Sidebar.Item>
                          </Link>

                          <Link to={'/pages/branch/list/BranchList'}>
                            <Sidebar.Item
                              icon={Split}
                              className={
                                '/page/sales' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                              }>
                              Branch
                            </Sidebar.Item>
                          </Link>

                          <Link to={'/pages/segment/list/SegmentList'}>
                            <Sidebar.Item
                              icon={Ungroup}
                              className={
                                '/page/marketting' === currentPage
                                  ? 'bg-gray-100 dark:bg-gray-700'
                                  : ''
                              }>
                              Segment
                            </Sidebar.Item>
                          </Link>

                          <Link to={'/pages/oem/list/List_Oem'}>
                            <Sidebar.Item
                              // href="/pages/oem/list/List_Oem"
                              icon={Factory}
                              className={
                                '/page/marketting' === currentPage
                                  ? 'bg-gray-100 dark:bg-gray-700'
                                  : ''
                              }>
                              OEM
                            </Sidebar.Item>
                          </Link>

                          <Link to={'/pages/tonnage/list/List_Tonnage'}>
                            <Sidebar.Item
                              icon={Weight}
                              className={
                                '/page/marketting' === currentPage
                                  ? 'bg-gray-100 dark:bg-gray-700'
                                  : ''
                              }>
                              Tonnage
                            </Sidebar.Item>
                          </Link>

                          <Link to={'/designation/table'}>
                            <Sidebar.Item
                              icon={UserPlus}
                              className={
                                '/page/financiers' === currentPage
                                  ? 'bg-gray-100 dark:bg-gray-700'
                                  : ''
                              }>
                              Designation
                            </Sidebar.Item>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}

                  <Sidebar.Item
                    onClick={() => setShowReportsDropdown(!showReportsDropdown)}
                    icon={MessageSquareWarning}
                    className={
                      '/page/reports' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Reports <ChevronDown />
                    </span>
                  </Sidebar.Item>

                  {showReportsDropdown && (
                    <div style={{ backgroundColor: '#F0EBE3' }}>
                      <Link to={'/pages/reports/prospects_report/create/Add_prospect_report'}>
                        <Sidebar.Item
                          icon={NotepadText}
                          className={
                            '/pages/reports/prospects_report/create/Add_prospect_report' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Prospect Report
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/reports/sales_call_report/create/Add_sales_call_report'}>
                        <Sidebar.Item
                          icon={CirclePercent}
                          className={
                            '/pages/reports/sales_call_report/create/Add_sales_call_report' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Sales Call Report
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/reports/stage_report/list/List_stage_report'}>
                        <Sidebar.Item
                          icon={OctagonAlert}
                          className={
                            '/pages/reports/stage_report/list/List_stage_report' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          List Stage Report
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/reports/order_loss_report/list/Order_loss_report'}>
                        <Sidebar.Item
                          icon={PackageOpen}
                          className={
                            '/pages/reports/order_loss_report/list/Order_loss_report' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Order Loss Report
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/reports/expensebillReport/list/Expense_report'}>
                        <Sidebar.Item
                          icon={HandCoins}
                          className={
                            '/pages/reports/expensebillReport/list/Expense_report' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Expense Report
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/reports/product_Report/List_Product_Report'}>
                        <Sidebar.Item
                          icon={PackageSearch}
                          className={
                            '/pages/reports/product_Report/List_Product_Report' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Product Report
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/reports/customer_Segment_Report/CustomerSegmentReport'}>
                        <Sidebar.Item
                          icon={Users}
                          className={
                            '/pages/reports/customer_Segment_Report/CustomerSegmentReport' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Customer Segment
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/reports/profitabilityreport/Profitability_Report'}>
                        <Sidebar.Item
                          icon={BriefcaseBusiness}
                          className={
                            '/pages/reports/profitabilityreport/Profitability_Report' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Productivity Report
                        </Sidebar.Item>
                      </Link>
                    </div>
                  )}

                  <Sidebar.Item
                    onClick={() => setShowMarketingDropdown(!showMarketingDropdown)}
                    icon={BookCopy}
                    className={
                      '/page/reports' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Marketing Reports <ChevronDown />
                    </span>
                  </Sidebar.Item>

                  {showMarketingDropdown && (
                    <div style={{ backgroundColor: '#F0EBE3' }}>
                      <Link
                        to={
                          '/pages/reports/marketing_activity_report/open_marketing_activity/Open_marketingactvty'
                        }>
                        <Sidebar.Item
                          icon={BarChartHorizontalBig}
                          className={
                            '/pages/reports/marketing_activity_report/open_marketing_activity/Open_marketingactvty' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Open Marketing
                        </Sidebar.Item>
                      </Link>

                      <Link
                        to={
                          '/pages/reports/marketing_activity_report/completed_marketing_activity/Cmpltd_marketingactvty_List'
                        }>
                        <Sidebar.Item
                          icon={Blinds}
                          className={
                            '/pages/reports/marketing_activity_report/completed_marketing_activity/Cmpltd_marketingactvty_List' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Completed Marketing
                        </Sidebar.Item>
                      </Link>

                      <Link
                        to={
                          '/pages/reports/marketing_activity_report/roi_marketing_activity/ROI_entryform'
                        }>
                        <Sidebar.Item
                          icon={LayoutTemplate}
                          className={
                            '/pages/reports/marketing_activity_report/roi_marketing_activity/ROI_entryform' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          ROI Marketing
                        </Sidebar.Item>
                      </Link>
                    </div>
                  )}

                  <Link to={'/pages/tivprojection/list/TivProjectionList'}>
                    <Sidebar.Item
                      icon={LayoutPanelTop}
                      className={
                        '/pages/tivprojection/list/TivProjectionList' === currentPage
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }>
                      TIV projection
                    </Sidebar.Item>
                  </Link>

                  <Link to={'/pages/ofm/create/AddOfm'}>
                    <Sidebar.Item
                      icon={CandlestickChart}
                      className={
                        '/pages/ofm/create/AddOfm' === currentPage
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }>
                      OFM
                    </Sidebar.Item>
                  </Link>

                  <Sidebar.Item
                    onClick={() => setShowAppraisalDropdown(!showAppraisalDropdown)}
                    icon={ClipboardList}
                    className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Monthly Appraisal
                      <ChevronDown />
                    </span>
                  </Sidebar.Item>
                  {showAppraisalDropdown && (
                    <div style={{ backgroundColor: '#F0EBE3' }}>
                      <Link to={'/pages/appraisal/salesmanagerappraisal/SalesManagerAppraisal'}>
                        <Sidebar.Item
                          icon={List}
                          className={
                            '/pages/appraisal/salesmanagerappraisal/SalesManagerAppraisal' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Sales Manager
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/appraisal/salesengineerappraisal/SalesEngineerAppraisal'}>
                        <Sidebar.Item
                          icon={List}
                          className={
                            '/pages/appraisal/salesengineerappraisal/SalesEngineerAppraisal' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Sales Engineer
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/appraisal/gmappraisal/GmAppraisal'}>
                        <Sidebar.Item
                           icon={List}
                          className={
                            '/pages/appraisal/gmappraisal/GmAppraisal' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          GM
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/appraisal/serviceappraisal/ServiceAppraisal'}>
                        <Sidebar.Item
                            icon={List}
                          className={
                            '/pages/appraisal/serviceappraisal/ServiceAppraisal' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Service
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/appraisal/partsappraisal/PartsAppraisal'}>
                        <Sidebar.Item
                            icon={List}
                          className={
                            '/pages/appraisal/partsappraisal/PartsAppraisal' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Parts
                        </Sidebar.Item>
                      </Link>
                    </div>
                  )}

                  <Sidebar.Item
                    onClick={() => setShowMonthlyTargetDropdown(!showMonthlyTargetDropdown)}
                    icon={Target}
                    className={'' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      Monthly Target
                      <ChevronDown />
                    </span>
                  </Sidebar.Item>
                  {showMonthlyTargetDropdown && (
                    <div style={{ backgroundColor: '#F0EBE3' }}>
                      <Link to={'/pages/monthlytargets/salesmanager/SalesManagerMonthlyTarget'}>
                        <Sidebar.Item
                     icon={CirclePlus}
                          className={
                            '/pages/monthlytargets/salesmanager/SalesManagerMonthlyTarget' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Sales Manager
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/monthlytargets/salesengineer/SalesEngineerMonthlyTarget'}>
                        <Sidebar.Item
                          icon={CirclePlus}
                          className={
                            '/pages/monthlytargets/salesengineer/SalesEngineerMonthlyTarget' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Sales Engineer
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/monthlytargets/gm/GmMonthlyTarget'}>
                        <Sidebar.Item
                          icon={CirclePlus}
                          className={
                            '/pages/monthlytargets/gm/GmMonthlyTarget' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          GM
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/monthlytargets/servicemonthlytargets/ServiceMonthlyTarget'}>
                        <Sidebar.Item
                          icon={CirclePlus}
                          className={
                            '/pages/monthlytargets/servicemonthlytargets/ServiceMonthlyTarget' ===
                            currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Service
                        </Sidebar.Item>
                      </Link>

                      <Link to={'/pages/monthlytargets/parts/PartsMonthlyTarget'}>
                        <Sidebar.Item
                          icon={CirclePlus}
                          className={
                            '/pages/monthlytargets/parts/PartsMonthlyTarget' === currentPage
                              ? 'bg-gray-100 dark:bg-gray-700'
                              : ''
                          }>
                          Parts
                        </Sidebar.Item>
                      </Link>
                    </div>
                  )}

                  <Link to={'/pages/Check-in-check-out'}>
                    <Sidebar.Item
                      icon={ListTodo}
                      className={
                        '/pages/Check-in-check-out' === currentPage
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }>
                      Check in & check out
                    </Sidebar.Item>
                  </Link>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </div>
          </div>
        </Sidebar>
      )}
      <CreateUser isVisible={showCreateUserModal} onClose={() => setShowCreateUserModal(false)} />
    </>
  );
};

export default ExampleSidebar;
