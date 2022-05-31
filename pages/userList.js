import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/simple";
import User from "../connect/model-config";

const userList = () => {
  const [userList, setUserList] = useState([]);
  const getUserList = async () => {
    const user = new User();
    let userList = await user.GetUser();
    console.log(userList, "userList");
    if (userList) {
      setUserList(userList.data);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Layout>
      <Head>
        <title>SCG TEST</title>
        <link rel="stylesheet" href="/assets/icon-scg" />
      </Head>
      <div>
        <p className="fw-bold">รายละเอียดผู้ใช้งาน</p>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ชื่อจริง</th>
              <th scope="col">นามสกุล</th>
              <th scope="col">ชื่อผู้ใช้งาน</th>
              <th scope="col">อีเมลล์</th>
              <th scope="col">เบอร์โทรศัพท์</th>
              <th scope="col">วันที่ลงทะเบียน</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((vaule, index) => (
              <tr key={index}>
                <td>{vaule.firstname}</td>
                <td>{vaule.lastname}</td>
                <td>{vaule.username}</td>
                <td>{vaule.email}</td>
                <td>{vaule.phone}</td>
                <td>{vaule.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default userList;
