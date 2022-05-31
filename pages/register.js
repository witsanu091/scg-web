import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout/simple";
import Head from "next/head";
import User from "../connect/model-config";

const register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const user = new User();
      const register = await user.Register(data);
      console.log(register);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Layout>
      <Head>
        <title>SCG TEST</title>
      </Head>
      <div className="justify-content-center">
        <div className="card d-inline-flex">
          <div className="card-body ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="fw-bolder">กรอกข้อมูลส่วนตัว</p>
              <div className="row ">
                <div className="col-md-6 mt-1">
                  <label className="form-label">ชื่อจริง</label>
                  <input
                    {...register("firstname", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="กรอกชื่อ"
                  />
                  {errors.firstname && (
                    <p className="text-danger">**กรุณากรอกชื่อ**</p>
                  )}
                </div>

                <div className="col-md-6 mt-1">
                  <label className="form-label">นามสกุล</label>
                  <input
                    {...register("lastname", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="กรอกนามสกุล"
                  />
                  {errors.lastname && (
                    <p className="text-danger">กรุณากรอกนามสกุล</p>
                  )}
                </div>
              </div>

              <div className="mt-1">
                <label className="form-label">ชื่อผู้ใช้งาน</label>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  className="form-control"
                  placeholder="กรอกชื่อผู้ใช้งาน"
                />
                {errors.username && (
                  <p className="text-danger">กรุณากรอกชื่อผู้ใช้งาน</p>
                )}
              </div>

              <div className="mt-1">
                <label className="form-label">email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="form-control"
                  placeholder="กรอกอีเมลล์"
                />
                {errors.email && <p class="text-danger">กรุณากรอกอีเมลล์</p>}
              </div>

              <div className="mt-1">
                <label className="form-label">รหัสผ่าน</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="form-control"
                  placeholder="กรอกรหัสผ่าน"
                />
                {errors.password && (
                  <p className="text-danger">กรุณากรอกรหัสผ่าน</p>
                )}
              </div>

              <div className="mt-1">
                <label className="form-label">เบอร์โทรศัพท์</label>
                <input
                  {...register("phone", { required: true })}
                  className="form-control"
                  placeholder="กรอกเบอร์โทรศัพท์"
                  type="text"
                />
                {errors.phone && (
                  <p className="text-danger">กรุณากรอกเบอร์โทรศัพท์</p>
                )}
              </div>

              <button className="btn btn-primary mt-3" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default register;
