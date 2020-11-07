import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Container from '../components/Form/Container';
import Page from '../components/Page';

const SignIn = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: 
        // 1. Validate form values
        // 2. send post req to server
        console.log(email, password);
    }

    return (
        <Page>
            <Container>
                <h1>Sign In</h1>
                <hr />
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="potus@gmail.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormGroup>
                    <div style={{ marginBottom: "10px" }}>
                        <Link to="/signup">Dont have an account? Sign Up!</Link>
                    </div>
                    <Button color="success">Submit</Button>
                </Form>
            </Container>
        </Page>
    )
}

export default SignIn;