import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Router from "next/router";
import User from "../../connect/model-config";

import { useForm } from "react-hook-form";
import AlertSuccess from "./AlertSuccess";

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
  const [visibleModal, setvisibleModal] = React.useState(false);

  const onCloseModal = () => {
    setvisibleModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data.id);
    try {
      let userData = {
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        password: data.password,
        phone: data.phone,
        email: data.email,
      };
      const user = new User();

      await user
        .Update(userData, data.id)
        .then((res) => {
          if (res) {
            setvisibleModal(true);
            setTimeout(() => {
              onCloseModal();
              onClose();
            }, 1500);
            Router.reload(window.location.pathname);
          }
        })
        .catch((err) => {
          alert("เกิดข้อผิดพลาด");
        });
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    if (data) {
      setValue("id", data.id);
      setValue("firstname", data.firstname);
      setValue("lastname", data.lastname);
      setValue("username", data.username);
      setValue("email", data.email);
      setValue("phone", data.phone);
      setValue("password", data.password);
    }
  }, [data]);
  return (
    <div>
      {visibleModal && (
        <AlertSuccess visible={visibleModal} onClose={onCloseModal} />
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
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
                    // onChange={}
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
