import { SignUp as SignUpModel} from "@/models";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Paper,
	TextField,
	Typography
} from "@mui/material";
import { useState } from "react";

export interface SignUpInterface {}

const SignUp : React.FC<SignUpInterface> = () => {
	const [loginData, setLoginData] = useState<SignUpModel>({
		Username: "",
		Password: "",
		Email: "",
	  });	  
	const [showPassword, setShowPassword] = useState(false);

  	const handleClickShowPassword = () => setShowPassword((show) => !show);
	
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	  };
	
	  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	  };
	
	  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
	  };
	  
	return (
		<Container maxWidth="sm">
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: "90vh" }}
			>
				<Grid item>
					<Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
						<Typography sx={{ mt: 1, mb: 1 }} variant="h4">
							Sign Up
						</Typography>
						<Box component="form" onSubmit={handleSubmit}>
							<TextField
								name="username"
								margin="normal"
								type="text"
								fullWidth
								label="Username"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={dataLogin}
							/>          
							<TextField
								name="email"
								margin="normal"
								type="text"
								fullWidth
								label="Email"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={dataLogin}
							/>          
							<OutlinedInput
								id="outlined-adornment-password"
								type={showPassword ? 'text' : 'password'}
								endAdornment={
								<InputAdornment position="end">
									<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
									>
									{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
								}
								sx={{ mt: 1.5, mb: 1.5 }}
								label="Password"
								fullWidth
								required						
							/>					
							<Button
								fullWidth
								type="submit"
								variant="contained"
								sx={{ mt: 1.5, mb: 3 }}
							>
							Sign Up
							</Button>
						</Box>
			  		</Paper>
				</Grid>
		  	</Grid>
		</Container>
	);
}

export default SignUp;
