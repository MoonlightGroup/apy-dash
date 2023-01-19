import React from "react"
import MojoAuth from "mojoauth-web-sdk"
import { Footer } from '@Components'

function Login() {
	const [payload, setPayload] = React.useState(null)

	React.useEffect(() => {
		const mojoauth = new MojoAuth("24898d15-df36-48e3-bcfe-04291c14258e", {
			source: [{ type: "email", feature: "magiclink" }],
			language: "es",
			redirect_url: "https://apydash.soyblas.repl.co",
		});
		mojoauth.signIn().then((payload: any) => setPayload(payload))
		
	}, [payload])

	const Login = () => {
		if (payload) { return <div id="mojoauth-passwordless-form"></div> }
		else { return <div>Hello</div> /*<pre>{JSON.stringify(payload, null, 4)}</pre>*/ }
	}
	console.log(payload)
	return (
		<>
			<Login />													 
			<Footer />
		</>
	)
}

export default Login