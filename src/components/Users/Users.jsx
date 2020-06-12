import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import PaginationControlled from "../Common/Paginator/PaginatorTest";

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
      {/* <PaginationControlled /> */}
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
