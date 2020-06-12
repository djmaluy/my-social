import React from "react";
import classes from "./Paginator.module.css";
import Pagination from "@material-ui/lab/Pagination";

let Paginator = ({
  onPageChanged,
  currentPage,
  totalUsersCount,
  pageSize,
  ...props
}) => {
  // const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  let pagesCount = Math.ceil(totalUsersCount / pageSize); //page={page}

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Pagination
        count={pagesCount}
        currentPage={currentPage}
        onChange={handleChange}
      />
      {/* {pages.map((p) => {
        return (
          <span
            className={currentPage === p && classes.selectedPage}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })} */}
    </div>
  );
};

export default Paginator;
