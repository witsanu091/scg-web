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

export default function ModalConfirm({ visible, onClose, data }) {
  const [open, setOpen] = React.useState(visible);
  const [visibleModal, setvisibleModal] = React.useState(false);

  const onCloseModal = () => {
    setvisibleModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    // console.log(data.id);
    try {
      const user = new User();
      await user
        .Delete(data.id)
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
              <h5 className="fw-bolder text-danger">ยืนยันลบข้อมูลส่วนตัว</h5>
              <div className="row">
                <div className="col-md-6 mt-1">
                  <label className="form-label">ชื่อจริง</label>
                  <input
                    {...register("firstname", { required: true })}
                    type="text"
                    className="form-control"
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
                  type="text"
                  className="form-control"
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
                  type="text"
                  value={data.phone}
                />
                {errors.phone && (
                  <p className="text-danger">กรุณากรอกเบอร์โทรศัพท์</p>
                )}
              </div>

              <button className="btn btn-primary mt-3 me-2" type="submit">
                ยืนยัน
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
