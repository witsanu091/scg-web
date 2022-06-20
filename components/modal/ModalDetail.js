import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import User from "../../connect/model-config";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalDetail({ visible, onClose, data }) {
  const [open, setOpen] = React.useState(visible);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // try {
    //   let password = "";
    //   const user = new User();
    //   await user
    //     .Setsha512(data.password)
    //     .then((res) => {
    //       password = res;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   let userData = {
    //     username: data.username,
    //     password: password,
    //     firstname: data.firstname,
    //     lastname: data.lastname,
    //     phone: data.phone,
    //     email: data.email,
    //   };
    //   await user
    //     .Register(userData)
    //     .then((res) => {
    //       if (res) {
    //         alert("บันทึกสำเร็จ");
    //         Router.reload(window.location.pathname);
    //       }
    //     })
    //     .catch((err) => {
    //       alert("เกิดข้อผิดพลาด");
    //     });
    // } catch (error) {
    //   throw error;
    // }
  };
  console.log(visible);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="fw-bolder">กรอกข้อมูลส่วนตัว</p>
              <div className="row">
                <div className="col-md-6 mt-1">
                  <label className="form-label">ชื่อจริง</label>
                  <input
                    {...register("firstname", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="กรอกชื่อ"
                    value={data.firstname}
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
                    value={data.lastname}
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
                  value={data.username}
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
                  value={data.email}
                />
                {errors.email && (
                  <p className="text-danger">กรุณากรอกอีเมลล์</p>
                )}
              </div>

              <div className="mt-1">
                <label className="form-label">เบอร์โทรศัพท์</label>
                <input
                  {...register("phone", { required: true })}
                  className="form-control"
                  placeholder="กรอกเบอร์โทรศัพท์"
                  type="text"
                  value={data.phone}
                />
                {errors.phone && (
                  <p className="text-danger">กรุณากรอกเบอร์โทรศัพท์</p>
                )}
              </div>

              <button className="btn btn-primary mt-3 me-2" type="submit">
                บันทึก
              </button>
              <button
                className="btn btn-danger mt-3 "
                type="button"
                onClick={() => onClose()}
              >
                ยกเลิก
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
