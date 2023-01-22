import { useContext } from "react"
import { AppBar, Link, Toolbar, Typography } from "@mui/material"

import { UIContext } from "../../context/ui"

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext)

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          backgroundColor: "#292929",
        }}
      >
        {/* <NextLink href="/" passHref> */}
        <Link underline="none" color="white" href="/">
          <Typography variant="h6">OpenJira</Typography>
        </Link>
        {/* </NextLink> */}
      </Toolbar>
    </AppBar>
  );
}
