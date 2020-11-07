import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Container from '../components/Form/Container';
import Page from '../components/Page';

const SignUp = () => {

    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    }

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [img, setImg] = useState<any>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: 
        // 1. Validate form values
        // 2. send post req to server
        console.log(email, password, username, img, genre, bio);
    }

    return (
        <Page>
            <Container>
                <h1>Sign Up</h1>
                <hr />
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" value={email} onChange={e => setEmail(e.target.value)} placeholder="potus@gmail.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="donaldjtrump" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="genre">Select your favorite genre</Label>
                        <Input type="select" name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                            <option>Realism</option>
                            <option>Painterly</option>
                            <option>Impressionism</option>
                            <option>Expressionism</option>
                            <option>Abstraction</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bio">Bio</Label>
                        <Input type="textarea" name="bio" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="img">Profile Picture</Label>
                        <Input type="file" name="file" id="img" onChange={(e) =>
                            // @ts-ignore
                            getBase64(e.target.files[0]).then(file =>
                                setImg(file)
                            )
                        } />
                    </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
            </Container>
        </Page>
    );
}

export default SignUp;
