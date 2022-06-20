import Alert from "@material-ui/lab/Alert";
import * as React from "react";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { Dialog } from "@mui/material";
export default function AlertError({ visible, onClose }) {
  return (
    <>
      <Dialog open={visible} onClose={onClose}>
        <Alert severity="error">
          <AlertTitle>ระบบแจ้งเคือน</AlertTitle>
          เกิดข้อผิดพลาด
        </Alert>
      </Dialog>
    </>
  );
}
