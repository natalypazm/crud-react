 import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useUserActions } from "../hooks/useUserActions"
import { useState } from "react";

export function CreateNewUser(){
    const { createUser } = useUserActions();
    const [result , setResult] = useState<'ok' | 'error' | null >(null);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setResult('ok');
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form)

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const github = formData.get('github') as string;

        if(!name || !email || !github){
            return setResult('error');
        }

        createUser({name,email, github});
        setResult('ok');
        form.reset();

    }
    return (
        <Card>
            <Title>Create New User</Title>
            <form onSubmit={handleSubmit}>
                <TextInput name="name" placeholder="Name"/>
                <TextInput name="email" placeholder="Email"/>
                <TextInput name="github" placeholder="Github user"/>
                <Button type="submit">Create</Button>
                {result === 'ok' && <Badge color="green">Submitted successfully</Badge>}
                {result === 'error' && <Badge color="red">There is an error with one of the fields</Badge>}
            </form>
        </Card>
    )
}