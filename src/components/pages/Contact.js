import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Wrapper from "../Wrapper";
import Container from "../Container";

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'aguerra1508@gmail.com',
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_orzrcxp',
       templateParams,
      'user_49PqrZ1QdEWq3RlbAXRNY'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
        <Wrapper>
					<Container>
					<div className="card">
					<h2 class="card-title">Contact Me:</h2>
		<div class="card-body">
          <Form onSubmit={this.handleSubmit.bind(this)}>
            
<FormGroup controlId="formBasicName">
              <Label>Name:</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
						<FormGroup controlId="formBasicEmail">
              <Label>Email address:</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="email@example.com"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label>Message:</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
								onChange={this.handleChange.bind(this, 'message')}
								placeholder="Enter message here"
              />
            </FormGroup>
<Button className="btn btn-dark" type="submit">
<i class="far fa-paper-plane"></i>&nbsp;Send
            </Button>
          </Form>
					</div>
					</div>
					</Container>
        </Wrapper>
    )
  }
}
export default Contact