import React from 'react';
import clsx from 'clsx';
import {
  ListItemText,
  ListItemIcon,
  ListItem,
  IconButton,
  Divider,
  Typography,
  CssBaseline,
  List,
  Toolbar,
  AppBar,
  Drawer,
  makeStyles,
} from '@material-ui/core/';
import { Gift, Package, ShoppingBag, Menu as MenuIcon } from 'react-feather';
import { Link, useLocation } from 'react-router-dom'
import Routes from '../../../services/routes'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 64,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    paddingTop: 48,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: theme.palette.secondary.light,
    paddingTop: 64,
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 73,
    background: theme.palette.secondary.main,
    paddingTop: 64,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  itemPadding: {
    height: 48,
    paddingLeft: 24,
  },
  textWhite: {
    textDecoration: 'none',
    display: 'none',
  },
  textBlack: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  main: {
    paddingTop: 64,
  },

}));


export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const location = useLocation()

  const handleDrawerOpenClose = () => {
    setOpen(!open);
    // alert(location.pathname)
  };

  const active = (routeName) => {
    //alert(location.pathname === routeName)
    return location.pathname === routeName
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenClose}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}

      >

        <Divider />
        <List>
          <Link to="/material">
            <ListItem button className={classes.itemPadding}>
              <ListItemIcon>
                <Package color={open && !active('/material') ? "#197278" : "white"} />
              </ListItemIcon>
              <ListItemText primary="Materiais" className={clsx({
                [classes.textBlack]: open && active('/material'),
                [classes.textWhite]: !open && active('/material'),
              })} />
            </ListItem>
          </Link>

          <Link to="/">
            <ListItem button className={classes.itemPadding}>
              <ListItemIcon>
                <ShoppingBag color={open ? "#3C153B" : "white"} />
              </ListItemIcon>
              <ListItemText primary="Produtos" className={clsx({
                [classes.textBlack]: open,
                [classes.textWhite]: !open,
              })} />
            </ListItem>
          </Link>

          <ListItem button className={classes.itemPadding}>
            <ListItemIcon>
              <Gift color={open ? "#E03616" : "white"} />
            </ListItemIcon>
            <ListItemText primary="Kits" className={clsx({
              [classes.textBlack]: open,
              [classes.textWhite]: !open,
            })} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.main}>
        <Routes />
      </main>
    </div>
  )
}