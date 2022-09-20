import { Typography, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";
import { type } from "@testing-library/user-event/dist/type";

//container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

//header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontFamily: '"Montez","cursive"',
  fontsize: "4em",
  color: Colors.secondary,
}));

//list
export const AppbarList = styled(List)(({type})=>({
    display: type === 'row' ? 'flex': 'block',
    flexGrow:3,
    justifyContent:"center",
    alignItems:'center'
}));
