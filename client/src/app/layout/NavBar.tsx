import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
	darkMode: boolean;
	changeTheme: () => void;
};

export default function NavBar({ darkMode, changeTheme }: Props) {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6">RE-STORE</Typography>
				<IconButton onClick={changeTheme}>
					{darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
