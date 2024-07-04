

// 
import React, { useState } from "react";
import { Pagination } from "flowbite-react";
import { useClient } from "your-http-client-library"; // Import useClient from your HTTP client library

export function Paginations() {
  const [currentPage, setCurrentPage] = useState(1);
  const client = useClient(); // Initialize your HTTP client

  const onPageChange = (page) => setCurrentPage(page);

  // Example of using useClient to fetch data
  // Replace the URL with your actual endpoint
  const fetchData = async () => {
    try {
      const response = await client.get("https://example.com/api/data");
      // Handle response data here
    } catch (error) {
      // Handle errors
    }
  };

  // Call fetchData when component mounts or currentPage changes
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination layout="table" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
    </div>
  );
}
