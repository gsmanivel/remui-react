import {  ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, AppbarList } from "../../styles/appbar";
export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>Manman</AppbarHeader>
      <AppbarList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Category" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact us" />
      </AppbarList>
    </AppbarContainer>
  );
}
