import {FormEvent, useState} from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const checkUser = 'user123'
const checkPass = '123456'

type LoginProps = {
    username: string
    password: string
}

export const LoginModal = () => {
    const logMeIn = ({username, password}: LoginProps) => {
        if (username === checkUser && password === checkPass) {
            console.log(username, password)
            localStorage.setItem('userStatus', 'true')
        } else {
            console.error('Login details invalid')
        }

    }

    const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        logMeIn({username, password})
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <Container>
            <Form onSubmit={(e) => onSubmitLogin(e)}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button onClick={(e) => onSubmitLogin(e)}>Login</Button>
            </Form>
        </Container>
    )
}