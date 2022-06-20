import Alert from "@material-ui/lab/Alert";
import * as React from "react";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { Dialog } from "@mui/material";
export default function AlertSuccess({ visible, onClose }) {
  return (
    <>
      <Dialog open={visible} onClose={onClose}>
        <Alert severity="success">
          <AlertTitle>ระบบแจ้งเคือน</AlertTitle>
          บันทึกสำเร็จ
        </Alert>
      </Dialog>
    </>
  );
}
