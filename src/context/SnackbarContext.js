import { createContext } from "react";

const SnackbarContext = createContext([{ open: false, message: "", type: "" }, () => {}]);

export default SnackbarContext;
