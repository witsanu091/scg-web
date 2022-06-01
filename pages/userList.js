import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/simple";
import User from "../connect/model-config";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const userList = () => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const getUserList = async () => {
    try {
      const user = new User();
      let userList = await user.GetUser();
      if (userList) {
        setRows(userList.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { id: "firstname", label: "ชื่อจริง", minWidth: 170 },

    {
      id: "lastname",
      label: "นามสกุล",
      minWidth: 170,
      align: "right",
    },
    {
      id: "username",
      label: "ชื่อผู้ใช้งาน",
      minWidth: 170,
      align: "right",
    },
    {
      id: "email",
      label: "อีเมลล์",
      minWidth: 170,
      align: "right",
    },
    {
      id: "phone",
      label: "เบอร์โทรศัพท์",
      minWidth: 170,
      align: "right",
    },
    {
      id: "createdAt",
      label: "วันที่ลงทะเบียน",
      minWidth: 170,
      align: "right",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Layout>
      <Head>
        <title>SCG TEST</title>
      </Head>
      <div>
        <p className="fw-bold">รายละเอียดผู้ใช้งาน</p>
        <div className="row">
          <div className="col-12">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default userList;
