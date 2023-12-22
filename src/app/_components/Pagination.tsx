import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface CustomPaginationProps {
  resultsPerPage: number;
  totalResults: number;
  paginate: (pageNumber: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  resultsPerPage,
  totalResults,
  paginate,
}) => {
  const pageCount = Math.ceil(totalResults / resultsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    paginate(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        shape="rounded"
        size="large"
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default CustomPagination;
