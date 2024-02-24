import { Home, Login, Logout, Person, PersonAdd } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useUIState } from "../providers/UIStateProvider";

export default function AppDrawer() {
  const { openDrawer, setOpenDrawer } = useUIState();
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      {/* banner */}
      <Box sx={{ width: 350 }}>
        <Box
          sx={{
            height: 200,
            bgcolor: "banner.background",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            p: 3,
          }}
        >
          {auth && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ width: 98, height: 98, background: blueGrey[400] }}>
                Apwiz
              </Avatar>
              <Box sx={{ ml: 2 }}>
                <Typography
                  sx={{ fontSize: 24, fontWeight: 500, color: "white" }}
                >
                  Apwiz
                </Typography>
                <Typography sx={{ fontSize: 14, color: "white" }}>
                  @apwiz
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* List  */}
      <List>
        {auth && (
          <>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  navigate("/");
                  setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => setAuth(false)}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </>
        )}

        {!auth && (
          <>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  navigate("/register");
                  setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setAuth(true);
                  // navigate("/login");
                  // setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
}
