import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Pagination from "./Pagination";

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageList, setPageList] = useState([]);
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 6,
  });

  useEffect(() => {
    console.log("Fetch API User List ");
    const paramString = queryString.stringify(filters);
    const url = `https://reqres.in/api/users?${paramString}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setUsers(responseJson.data);
        setPage(responseJson.page);
        setTotalPage(responseJson.total_pages);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, [filters]);

  useEffect(() => {
    let newPageList = [];
    for (let index = 1; index <= totalPage; index++) {
      newPageList = [...newPageList, index];
    }
    setPageList(newPageList);
  }, [totalPage]);

  function handlePageChange(newPage) {
    console.log(newPage);
    setPage(newPage);
    setFilters({ ...filters, page: newPage });
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <div className="avatar">
                  <img src={user.avatar} alt="avatar" />
                </div>
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        onPageChange={handlePageChange}
        pageList={pageList}
      />
    </>
  );
}

export default UserList;
