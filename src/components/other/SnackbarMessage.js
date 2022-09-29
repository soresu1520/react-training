import { useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import SnackbarContext from "../../context/SnackbarContext";

const SnackbarMessage = () => {
  const [snackInfo, setSnackInfo] = useContext(SnackbarContext);

  const handleClose = reason => {
    if (reason === "clickaway") {
      return;
    }
    setSnackInfo({ open: false, message: "", type: "" });
  };

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={snackInfo.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleClose}
        action={action}
      >
        <Alert onClose={handleClose} severity={snackInfo.type} sx={{ width: "100%" }}>
          {snackInfo.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarMessage;
