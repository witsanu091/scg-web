import { Button } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ModalDetail from "./modal/ModalDetail";

function ButtonInTable({ data }) {
  const [visibleModal, setvisibleModal] = useState(false);

  const onCloseModal = () => {
    setvisibleModal(false);
  };

  return (
    <>
      <Button
        color="primary"
        startIcon={<EditIcon />}
        size="small"
        onClick={() => {
          setvisibleModal(true);
        }}
      />
      <Button startIcon={<DeleteIcon />} size="small" color="primary" />
      {visibleModal && (
        <ModalDetail
          visible={visibleModal}
          onClose={onCloseModal}
          data={data}
        />
      )}
    </>
  );
}

export default ButtonInTable;
