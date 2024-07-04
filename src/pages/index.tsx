import { Badge, Dropdown, Table, useTheme } from 'flowbite-react';
import { FC, useEffect } from 'react';
import Chart from 'react-apexcharts';
import FunnelChart from './graph/FunnelChart';
import NavbarSidebarLayout from '../layouts/navbar-sidebar';
import salesDashboard from '../constants/json/salesDashboard.json';
import segmentDashboard from '../constants/json/segmentDashboard.json';
import machineDashboard from '../constants/json/machineDashboard.json';
import TIVdashboard from '../constants/json/TIVdashboard.json';
import salesdealsDashboard from '../constants/json/salesdealsDashboard.json';
import prospectDashboard from '../constants/json/prospectDashboard.json';
import tonnageDashboard from '../constants/json/tonnageDashboard.json';
import financersDashboard from '../constants/json/financersDashboard.json';
import MarkettingActivitiesDataDashboard from '../constants/json/MarkettingActivitesDataDashbord.json';
import './users/index.css';
import './users/Minbox.css';
import { Link } from 'react-router-dom';
import {
  AdditionalArrowIcon,
  AnotherArrowIcon,
  DiagonalArrowIcon,
  DiagonalArrowIcon2,
  DownArrowIcon,
  LeftArrowIcon,
  NewArrow2Icon,
  NewArrowIcon,
  RightArrowIcon,
  UpArrowIcon
} from '../images/dashboardsvg';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../components/redux/marketSlice';

const DashboardPage: FC = function () {
  return (
    <NavbarSidebarLayout>
      <div className="px-4 ">
        <div className="my-6">
          <Minbox />
        </div>
        <div className="my-6">
          <SalesThisWeek />
        </div>
        <div className="my-6">
          <FunnelChart />
        </div>
        <div className="my-6">
          <LatestTransactions />
        </div>
        <LatestCustomers />
        <div className="my-6">
          <AcquisitionOverview />
        </div>
        <div className="my-6">
          <SalesCallList />
        </div>
        <div className="my-6">
          <SegmentList />
        </div>
        <div className="my-6">
          <MachineList />
        </div>
        <div className="my-6">
          <TivDashboard />
        </div>
        <div className="my-6">
          <SalesDealDashboard />
        </div>
        <div className="my-6">
          <ProspectsDashboard />
        </div>
        <div className="my-6">
          <TonnageDashbord />
        </div>
        <div className="my-6">
          <OEMDashbord />
        </div>
        <div className="my-6">
          <FinancersDashbord />
        </div>
        <div className="my-6">
          <MarkettingActivitesDashbord />
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};
const Minbox: FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state.market);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log('market:', items);

  // Define an array of objects containing data for each box
  const boxesData = [
    { title: 'Sales Calls', value: 1 },
    { title: 'Product call', value: 2 },
    { title: 'Reports', value: 3 },
    { title: 'Performance', value: 4 },
    { title: 'Market Share/TIV', value: 4 },
    { title: 'Target Verse YTS', value: 4 },
    { title: 'Participation', value: 4 },
    { title: 'Marketing Activities', value: 4 },
    { title: 'Customer Segmentation', value: 4 },
    { title: 'Resend Forebay ', value: 4 },
    { title: 'Tonnage Vise', value: 4 }
  ];

  return (
    <div className="minbox rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      {/* Map over the boxesData array to render each box */}
      {boxesData.map((box, index) => (
        <div key={index} className="minboxIteams">
          <p
            style={{
              fontWeight: '700',
              fontSize: 'large',
              color: 'black'
            }}>
            {box.title}
          </p>
          <span>{box.title == 'Marketing Activities' ? items.length : box.title=="Sales Calls"? items.length :box.value}</span>
        </div>
      ))}
    </div>
  );
};

const SalesThisWeek: FC = function () {
  return (
    <div className=" rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="shrink-0">
          <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
            $45,385
          </span>
          <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
            Sales this week
          </h3>
        </div>
        <div className="flex flex-1 items-center justify-end text-base font-bold text-green-600 dark:text-green-400">
          12.5%
          <UpArrowIcon />
        </div>
      </div>
      <SalesChart />
      <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            Sales Report
            <RightArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SalesChart: FC = function () {
  const { mode } = useTheme();
  const isDarkTheme = mode === 'dark';

  const borderColor = isDarkTheme ? '#374151' : '#F3F4F6';
  const labelColor = isDarkTheme ? '#93ACAF' : '#6B7280';
  const opacityFrom = isDarkTheme ? 0 : 1;
  const opacityTo = isDarkTheme ? 0 : 1;

  const options: ApexCharts.ApexOptions = {
    stroke: {
      curve: 'smooth'
    },
    chart: {
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      foreColor: labelColor,
      toolbar: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom,
        opacityTo,
        type: 'vertical'
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      style: {
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif'
      }
    },
    grid: {
      show: true,
      borderColor: borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15
      }
    },
    markers: {
      size: 5,
      strokeColors: '#ffffff',
      hover: {
        size: undefined,
        sizeOffset: 3
      }
    },
    xaxis: {
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      labels: {
        style: {
          colors: [labelColor],
          fontSize: '14px',
          fontWeight: 500
        }
      },
      axisBorder: {
        color: borderColor
      },
      axisTicks: {
        color: borderColor
      },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
          color: borderColor,
          width: 1,
          dashArray: 10
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [labelColor],
          fontSize: '14px',
          fontWeight: 500
        },
        formatter: function (value) {
          return '$' + value;
        }
      }
    },
    legend: {
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: 'Inter, sans-serif',
      labels: {
        colors: [labelColor]
      },
      itemMargin: {
        horizontal: 10
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false
            }
          }
        }
      }
    ]
  };
  const series = [
    {
      name: 'Revenue',
      data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
      color: '#1A56DB'
    }
  ];

  return <Chart height={420} options={options} series={series} type="area" />;
};

const Datepicker: FC = function () {
  return (
    <span className="text-sm text-gray-600">
      <Dropdown inline label="Last 7 days">
        <Dropdown.Item>
          <strong>Sep 16, 2021 - Sep 22, 2021</strong>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Yesterday</Dropdown.Item>
        <Dropdown.Item>Today</Dropdown.Item>
        <Dropdown.Item>Last 7 days</Dropdown.Item>
        <Dropdown.Item>Last 30 days</Dropdown.Item>
        <Dropdown.Item>Last 90 days</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Custom...</Dropdown.Item>
      </Dropdown>
    </span>
  );
};

const customers = [
  {
    name: 'Neil Sims',
    email: 'email@flowbite.com',
    amount: '$320',
    imgSrc: '/images/users/neil-sims.png'
  },
  {
    name: 'Bonnie Green',
    email: 'email@flowbite.com',
    amount: '$3467',
    imgSrc: '/images/users/bonnie-green.png'
  },
  {
    name: 'Michael Gough',
    email: 'email@flowbite.com',
    amount: '$67',
    imgSrc: '/images/users/michael-gough.png'
  },
  {
    name: 'Thomes Lean',
    email: 'email@flowbite.com',
    amount: '$2367',
    imgSrc: '/images/users/thomas-lean.png'
  },
  {
    name: 'Lana Byrd',
    email: 'email@flowbite.com',
    amount: '$367',
    imgSrc: '/images/users/lana-byrd.png'
  }
];

const LatestCustomers: FC = function () {
  return (
    <div className="mb-4 h-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h3>

        <Link
          to={'#'}
          className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
          {' '}
          View all
        </Link>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {customers.map((customer, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={customer.imgSrc}
                    alt={customer.name} // Alt tag added here
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {customer.name}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {customer.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {customer.amount}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Sales Report
            <RightArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

const tableHeaders = [
  { label: 'Top Channels', className: 'whitespace-nowrap rounded-l' },
  { label: 'Users', className: 'whitespace-nowrap' },
  { label: 'Acquisition', className: 'min-w-[140px] whitespace-nowrap rounded-r' }
];

const tableData = [
  { channel: 'Organic Search', users: 5649, acquisition: 30, color: 'bg-primary-700' },
  { channel: 'Referral', users: 4025, acquisition: 24, color: 'bg-orange-300' },
  { channel: 'Direct', users: 3105, acquisition: 18, color: 'bg-teal-400' },
  { channel: 'Social', users: 1251, acquisition: 12, color: 'bg-pink-600' },
  { channel: 'Other', users: 734, acquisition: 9, color: 'bg-indigo-600' },
  { channel: 'Email', users: 456, acquisition: 7, color: 'bg-purple-500' }
];

const AcquisitionOverview: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <h3 className="mb-6 text-xl font-bold leading-none text-gray-900 dark:text-white">
        Acquisition Overview
      </h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table className="min-w-full table-fixed">
                <Table.Head>
                  {tableHeaders.map((header, index) => (
                    <Table.HeadCell
                      key={index}
                      className={`border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white ${header.className}`}>
                      {header.label}
                    </Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="divide-y divide-gray-100 dark:divide-gray-700">
                  {tableData.map((row, index) => (
                    <Table.Row key={index} className="text-gray-500 dark:text-gray-400">
                      <Table.Cell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                        {row.channel}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                        {row.users}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">{row.acquisition}%</span>
                          <div className="relative w-full">
                            <div className="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                              <div
                                className={`h-2 rounded-sm ${row.color}`}
                                style={{ width: `${row.acquisition}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Acquisition Report
            <LeftArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

const transactions = [
  {
    description: 'Payment from Bonnie Green',
    date: 'Apr 23, 2021',
    amount: '$2300',
    status: 'Completed',
    statusColor: 'success'
  },
  {
    description: 'Payment refund to #00910',
    date: 'Apr 23, 2021',
    amount: '-$670',
    status: 'Completed',
    statusColor: 'success'
  },
  {
    description: 'Payment failed from #087651',
    date: 'Apr 18, 2021',
    amount: '$234',
    status: 'Cancelled',
    statusColor: 'failure'
  },
  {
    description: 'Payment from Lana Byrd',
    date: 'Apr 15, 2021',
    amount: '$5000',
    status: 'In progress',
    statusColor: 'in-progress'
  },
  {
    description: 'Payment from Jese Leos',
    date: 'Apr 15, 2021',
    amount: '$2300',
    status: 'Completed',
    statusColor: 'success'
  },
  {
    description: 'Payment from THEMESBERG LLC',
    date: 'Apr 11, 2021',
    amount: '$560',
    status: 'Completed',
    statusColor: 'success'
  },
  {
    description: 'Payment from Lana Lysle',
    date: 'Apr 6, 2021',
    amount: '$1437',
    status: 'Completed',
    statusColor: 'success'
  },
  {
    description: 'Payment to Joseph Mcfall',
    date: 'Apr 1, 2021',
    amount: '$980',
    status: 'Completed',
    statusColor: 'success'
  },
  {
    description: 'Payment from Alphabet LLC',
    date: 'Mar 23, 2021',
    amount: '$11,436',
    status: 'In progress',
    statusColor: 'in-progress'
  },
  {
    description: 'Payment from Bonnie Green',
    date: 'Mar 23, 2021',
    amount: '$560',
    status: 'Completed',
    statusColor: 'success'
  }
];

const LatestTransactions = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Latest Transactions
          </h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest transactions
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'#'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            {' '}
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  <Table.HeadCell>Transaction</Table.HeadCell>
                  <Table.HeadCell>Date &amp; Time</Table.HeadCell>
                  <Table.HeadCell>Amount</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {transactions.map((transaction, index) => (
                    <Table.Row key={index}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {transaction.description}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                        {transaction.date}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                        {transaction.amount}
                      </Table.Cell>
                      <Table.Cell className="flex whitespace-nowrap p-4">
                        {transaction.statusColor === 'in-progress' ? (
                          <span className="mr-2 rounded-md bg-purple-100 py-0.5 px-2.5 text-xs font-medium text-purple-800 dark:bg-purple-200">
                            {transaction.status}
                          </span>
                        ) : (
                          <Badge color={transaction.statusColor}>{transaction.status}</Badge>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Transactions Report
            <DownArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

// New Report Entered

const SalesCallList: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Sales call List</h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest Sales call
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'/salescalls/list/list-sales-calls'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            {' '}
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {[
                    'Deals',
                    'Number',
                    'Stage',
                    'Finance',
                    'Current Date & Time',
                    'Meeting',
                    'Support required',
                    'Discussion'
                  ].map((header) => (
                    <Table.HeadCell key={header}>{header}</Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {salesDashboard.map((salesData) => (
                    <Table.Row key={salesData.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {salesData.deals}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {salesData.Number}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {salesData.stage}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {salesData.finance}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {salesData.current_date_time}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {salesData.meeting}
                      </Table.Cell>
                      <Table.Cell className="flex whitespace-nowrap px-8">
                        <Badge color={salesData.support_required === 'Yes' ? 'success' : 'failure'}>
                          {salesData.support_required}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {salesData.discussion}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link to={'#'}>
            Sales Call Report
            <DiagonalArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SegmentList: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Segment List</h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest Segment
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'/pages/segment/list/SegmentTable'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {['Name', 'Code', 'Created_On'].map((header) => (
                    <Table.HeadCell key={header}>{header}</Table.HeadCell>
                  ))}
                </Table.Head>

                <Table.Body className="bg-white dark:bg-gray-800">
                  {segmentDashboard.map((segmentData) => (
                    <Table.Row key={segmentData.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {segmentData.Name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {segmentData.Code}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {segmentData.Created_On}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Segment Report
            <DiagonalArrowIcon2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

const MachineList: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Machine List</h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest Machine
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'/pages/machine/list/MachineTable'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {['code', 'price', 'model_number', 'oem', 'tonnage', 'segment', 'created_on'].map(
                    (header) => (
                      <Table.HeadCell key={header}>{header}</Table.HeadCell>
                    )
                  )}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {machineDashboard.map((machineData) => (
                    <Table.Row key={machineData.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {machineData.code}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {machineData.price}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {machineData.model_number}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {machineData.oem}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {machineData.tonnage}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {machineData.segment}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {machineData.created_on}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Machine Report
            <NewArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

const TivDashboard: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            TIV Projection List
          </h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest TIV Projections
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'#'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            {' '}
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {[
                    'customer_name',
                    'proposed_date',
                    'orm_id',
                    'machine_id',
                    'competition1',
                    'competition2',
                    'user_id',
                    'created_by',
                    'created_on',
                    'status'
                  ].map((header) => (
                    <Table.HeadCell key={header}>{header}</Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {TIVdashboard.map((Data) => (
                    <Table.Row key={Data.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.customer_name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.proposed_date}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.orm_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.machine_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.competition1}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.competition2}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.user_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_by}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_on}
                      </Table.Cell>

                      <Table.Cell className="flex whitespace-nowrap px-8">
                        <Badge color={Data.status === 'Yes' ? 'success' : 'failure'}>
                          {' '}
                          {Data.status}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            TIV Report
            <NewArrow2Icon />
          </Link>
        </div>
      </div>
    </div>
  );
};
const SalesDealDashboard: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Sales Deals List</h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest Sales Deals
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'#'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            {' '}
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {[
                    'deal_name',
                    'prospects_id',
                    'prospects_name',
                    'machine_id',
                    'machine_name',
                    'deal_type_id',
                    'deal_type_name',
                    'suggested_by_id',
                    'suggested_by_name',
                    'created_by',
                    'created_on'
                  ].map((header) => (
                    <Table.HeadCell key={header}>{header}</Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {salesdealsDashboard.map((Data) => (
                    <Table.Row key={Data.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.deal_name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.prospects_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.prospects_name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.machine_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.machine_name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.deal_type_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.deal_type_name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.suggested_by_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.suggested_by_name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_by}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_on}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Sales Deals Report
            <AnotherArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
const ProspectsDashboard: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Prospects List</h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest Prospects
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'#'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {[
                    'name',
                    'telephone',
                    'address1',
                    'address2',
                    'district',
                    'pincode',
                    'email',
                    'gst_no',
                    'adhaar_no',
                    'pan_no',
                    'created_by',
                    'created_on',
                    'status'
                  ].map((header) => (
                    <Table.HeadCell key={header}>{header}</Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {prospectDashboard.map((Data) => (
                    <Table.Row key={Data.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.telephone}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.address1}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.address2}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.district}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.pincode}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.email}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.gst_no}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.adhaar_no}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.pan_no}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_by}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_on}
                      </Table.Cell>

                      <Table.Cell className="flex whitespace-nowrap px-8">
                        <Badge color={Data.status === 'Yes' ? 'success' : 'failure'}>
                          {' '}
                          {Data.status}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Sales Deals Report
            <AdditionalArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
const TonnageDashbord: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Tonnage List</h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest Tonnage
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'#'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {['code', 'name', 'created_by', 'created_on', 'status', 'Meeting'].map(
                    (header) => (
                      <Table.HeadCell key={header}>{header}</Table.HeadCell>
                    )
                  )}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {tonnageDashboard.map((Data) => (
                    <Table.Row key={Data.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.code}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_by}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_on}
                      </Table.Cell>
                      <Table.Cell className="flex whitespace-nowrap px-8">
                        <Badge color={Data.status === 'Yes' ? 'success' : 'failure'}>
                          {' '}
                          {Data.status}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Tonnage Report
            <AdditionalArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
const OEMDashbord: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">OEM List</h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest OEM
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'#'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            {' '}
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {['code', 'name', 'created_by', 'created_on', 'status'].map((header) => (
                    <Table.HeadCell key={header}>{header}</Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {tonnageDashboard.map((Data) => (
                    <Table.Row key={Data.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.code}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_by}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_on}
                      </Table.Cell>
                      <Table.Cell className="flex whitespace-nowrap px-8">
                        <Badge color={Data.status === 'Yes' ? 'success' : 'failure'}>
                          {' '}
                          {Data.status}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Tonnage Report
            <AdditionalArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
const FinancersDashbord: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Financers List</h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest Financers
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'#'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            {' '}
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {[
                    'code',
                    'name',
                    'office_address',
                    'executive_name',
                    'district',
                    'state',
                    'telephone',
                    'email_id',
                    'created_by',
                    'created_on',
                    'status'
                  ].map((header) => (
                    <Table.HeadCell key={header}>{header}</Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {financersDashboard.map((Data) => (
                    <Table.Row key={Data.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.code}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.office_address}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.executive_name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.district}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.state}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.telephone}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.email_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_by}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_on}
                      </Table.Cell>
                      <Table.Cell className="flex whitespace-nowrap px-8">
                        <Badge color={Data.status === 'Yes' ? 'success' : 'failure'}>
                          {' '}
                          {Data.status}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            {' '}
            Tonnage Report
            <AdditionalArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
const MarkettingActivitesDashbord: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Marketing Activites List
          </h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            This is a list of latest Marketing Activites
          </span>
        </div>
        <div className="shrink-0">
          <Link
            to={'#'}
            className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            View all
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table striped className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  {[
                    'activity_name',
                    'activity_descrption',
                    'proposed_date',
                    'proposed_amt',
                    'disbursable_amt',
                    'user_id',
                    'remarks ',
                    'created_by',
                    'created_on',
                    'status'
                  ].map((header) => (
                    <Table.HeadCell key={header}>{header}</Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {MarkettingActivitiesDataDashboard.map((Data) => (
                    <Table.Row key={Data.id}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.activity_name}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.activity_descrption}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.proposed_date}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.proposed_amt}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.disbursable_amt}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.user_id}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.remarks}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_by}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {Data.created_on}
                      </Table.Cell>
                      <Table.Cell className="flex whitespace-nowrap px-8">
                        <Badge color={Data.status === 'Yes' ? 'success' : 'failure'}>
                          {' '}
                          {Data.status}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <Datepicker />
        <div className="shrink-0">
          <Link
            to={'#'}
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
            Tonnage Report
            <AdditionalArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
