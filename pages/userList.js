import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/simple";
import User from "../connect/model-config";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Button, styled } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import ButtonInTable from "../components/ButtonInTable";

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

  const setFormatDate = (date) => {
    let formatdate = moment(date).format("MM/DD/YYYY");
  };

  const columns = [
    { id: "firstname", label: "ชื่อจริง", align: "left" },

    {
      id: "lastname",
      label: "นามสกุล",
      align: "left",
    },
    {
      id: "username",
      label: "ชื่อผู้ใช้งาน",
      align: "left",
    },
    {
      id: "email",
      label: "อีเมลล์",
      align: "left",
    },
    {
      id: "phone",
      label: "เบอร์โทรศัพท์",
      align: "left",
    },
    {
      id: "created_at",
      label: "วันที่ลงทะเบียน",
      align: "left",
    },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

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
                        <StyledTableCell
                          key={column.id}
                          align={column.align}
                          // style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </StyledTableCell>
                      ))}
                      <StyledTableCell align={"left"}>
                        {"Action"}
                      </StyledTableCell>
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
                            <TableRow key={row.id}>
                              <TableCell
                                component="th"
                                scope="row"
                                align={"center"}
                              >
                                <ButtonInTable data={row} />
                              </TableCell>
                            </TableRow>
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
