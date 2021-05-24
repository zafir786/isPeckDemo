import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import './Header.css';
import Image from '../../../assets/images/nymo_new.png';
import { BsFillBellFill } from "react-icons/bs";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex: 1
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  }
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "About",
      pageURL: "/about"
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className = 'background'>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span className = 'logo'><img src = {Image} alt = 'Logo' /></span>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/")}
              >
                <BsFillBellFill />
              </Button>
              <Button className = 'dropdown' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                variant="contained"
                onClick={() => handleButtonClick("/about")}
              >
                Admin
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
