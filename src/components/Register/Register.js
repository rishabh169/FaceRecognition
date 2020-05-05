import React from 'react';

class Register extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			Email : '',
			Password : '',
			Name : ''

		}
	}
	onNameChange = (event) =>{
		this.setState({Name  : event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({Email  : event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({Password  : event.target.value});
	}

	onSubmit = () =>{
		fetch('https://damp-hamlet-36731.herokuapp.com/register', {
			method : 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				email : this.state.Email,
				password : this.state.Password,
				name : this.state.Name
			})
		}).then(response => response.json())
		.then(user => {
			if(user){
				this.props.loadUser(user);
				this.props.onRouteChange('home');

			}
		})
		.catch(e => console.log("eroooorr"));
		
	}


	render () {
		return (
		<article className="br4 ba b--black-10 mv4 w-100 w-50-m w-25-l  mw6 shodow-5 center">
		<main className="pa4 black-80">
		  <form className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Register</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" >Name</label>
		        <input 
		        onChange = {this.onNameChange}
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6">Email</label>
		        <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" >Password</label>
		        <input onChange = {this.onPasswordChange}  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		      onClick = {this.onSubmit}
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register"/>
		    </div>
		  </form>
		</main>
		</article>
	);	

	}
}

export default Register;