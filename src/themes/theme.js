import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderColor: "var(--color-greyscale-200)",
            borderRadius: 0,
            color: "var(--dark-icon)",
            "&.Mui-focused fieldset": {
              borderColor: "var(--color-brand-500)",
            },
          },
          "& .MuiInputLabel-root": {
            color: "var(--color-greyscale-600)",
            "&.Mui-focused": {
              color: "var(--color-brand-500)",
            },
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          "& .MuiToggleButtonGroup-grouped": {
            border: 0,
            borderRadius: 0,
            outline: "1px solid var(--color-greyscale-200)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "var(--dark-icon)",
          fontFamily: "Poppins",
          borderBottom: "1px solid var(--color-greyscale-200)",
          fontSize: "1em",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid var(--color-greyscale-200)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          backgroundColor: "var(--color-greyscale-50)",
        },
      },
    },
  },
});
