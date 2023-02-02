import { SignUp as SignUpModel} from "@/models";
import { validationEmail, validationPassword, validationUsurname } from "@/utilities";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
	Box,
	Button,
	Container,
	FormHelperText,
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
	const [signupData, setSignupData] = useState<SignUpModel>({
		Username: "",
		Password: "",
		Email: "",
	});

	const [errorUsername, setErrorUsername] = useState({
		error: false,
		leyend: "",
	});

	const [errorPassword, setErrorPassword] = useState({
		error: false,
		leyend: "",
	});

	const [errorEmail, setErrorEmail] = useState({
		error: false,
		leyend: "",
	});

	
	const [showPassword, setShowPassword] = useState(false);

  	const handleClickShowPassword = () => setShowPassword((show) => !show);
	
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	  };
	
	  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSignupData({ ...signupData, [e.target.name]: e.target.value });
		switch (e.target.name) {
			case "Username":
				setErrorUsername({
					error: !(validationUsurname.test(signupData.Username)),
					leyend: validationUsurname.test(signupData.Username) ? "" : "User must be only letters and numbers, and min 4 && max 16"
				});
				break;
			
			case "Email":
				setErrorEmail({
					error: !(validationEmail.test(signupData.Email)),
					leyend: validationEmail.test(signupData.Email) ? "" : "Must write correct email"
				});
				break;

			case "Password":
				setErrorPassword({
					error: !(validationPassword.test(signupData.Email)),
					leyend: validationPassword.test(signupData.Email) ? "" : "The password must have 8 characters, at least one digit, at least one lowercase, at least one uppercase, and at least one non-alphanumeric character."
				})
				break;
		}
		

	  };
	
	  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log(signupData)

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
								name="Username"
								margin="normal"
								type="text"
								fullWidth
								label="Username"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={dataLogin}
								error={errorUsername.error}
								helperText= {errorUsername.leyend}
							/>          
							<TextField
								name="Email"
								margin="normal"
								type="text"
								fullWidth
								label="Email"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={dataLogin}
								error={errorEmail.error}
								helperText= {errorEmail.leyend}
							/>          
							<OutlinedInput
								id="outlined-adornment-password"
								name="Password"
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
								onChange={dataLogin}			
								error={errorPassword.error}
							/>					
								{!!errorPassword.error && (
									<FormHelperText error id="accountId-error">
									  {errorPassword.leyend}
									</FormHelperText>
								)}								
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
