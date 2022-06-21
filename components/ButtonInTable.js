import { Button } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ModalDetail from "./modal/ModalDetail";
import ModalConfirm from "./modal/ModalConfirm";

function ButtonInTable({ data }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const onCloseModal = () => {
    setVisibleModal(false);
  };

  const onCloseDelete = () => {
    setVisibleDelete(false);
  };

  return (
    <>
      <Button
        color="primary"
        startIcon={<EditIcon />}
        size="small"
        onClick={() => {
          setVisibleModal(true);
        }}
      />
      {visibleModal && (
        <ModalDetail
          visible={visibleModal}
          onClose={onCloseModal}
          data={data}
        />
      )}
      <Button
        startIcon={<DeleteIcon />}
        size="small"
        color="primary"
        onClick={() => {
          setVisibleDelete(true);
        }}
      />
      {visibleDelete && (
        <ModalConfirm
          visible={visibleDelete}
          onClose={onCloseDelete}
          data={data}
        />
      )}
    </>
  );
}

export default ButtonInTable;
