import { useField } from "../../hooks";

export interface SignUpInterface {}

const SignUp : React.FC<SignUpInterface> = () => {
	const username = useField('text', 'username', 'Username')
	const password = useField('password', 'password', 'Password')

	const handleSubmit = (e: React.SyntheticEvent) => {	
        e.preventDefault();
		console.log(username);
    }	
	return (
		<form onClick={(event)=> handleSubmit(event)}>
			<div>
				<input {...username}/>
			</div>
			<div>
				<input {...password}/>
			</div>
			<div>
				<button type='submit'>Send</button>'
			</div>
		</form>
	);
}

export default SignUp;
