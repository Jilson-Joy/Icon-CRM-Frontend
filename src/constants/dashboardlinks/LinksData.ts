interface LinkData {

  href: string;
  text: string;
  icon?: string;
  className: string;
}

const LinksData: LinkData[] = [
  {
  

    href: "#",
    text: "Sales Report",
    icon: "RightArrowIcon",
    className: "inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm",
  },
  {

    href: "#",
    text: "View all",
    className: "inline-flex items-center rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
  },
  {
   
    href: "#",
    text: "Sales Report",
    icon: "RightArrowIcon",
    className: "inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm",
  },
  {
   
    href: "#",
    text: "Acquisition Report",
    icon: "LeftArrowIcon",
    className: "inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm",
  },
  {
    href: "#",
    text: "View all",
    className: "rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
  },
  {
    href: "#",
    text: "Transactions Report",
    icon: "DownArrowIcon",
    className: "inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm",
  },
  {
    href: "/salescalls/list/list-sales-calls",
    text: "View all",
    className: "rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
  },
  {
    href: "/pages/segment/list/SegmentTable",
    text: "View all",
    className: "rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700",
  },
];

export default LinksData;
