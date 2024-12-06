import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

function SignUp() {
    const { register, reset, handleSubmit, watch } = useForm();
    const inputsFormulario = watch();

    const formValido = inputsFormulario.nome?.trim() && inputsFormulario.email?.trim() && inputsFormulario.password?.trim();

    function handleSignUp(data: any) {
        console.log(data);
        reset({ nome: '', email: '', password: '' });
    }

    return (
        <div className="p-16 border-2 border-solid border-neutral-300 rounded-lg ">
            <div className="flex flex-col justify-center w-96 gap-4">
                <div className="flex flex-col text-center">
                    <h1 className="text-2xl font-semibold">
                        Cadastre a sua conta
                    </h1>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                    <div className="space-y-4">
                        <Label>Digite o seu nome</Label>
                        <Input type="nome" {...register('nome')} />
                    </div>
                    <div className="space-y-4 ">
                        <Label>Digite o seu email</Label>
                        <Input type="email" {...register('email')} />
                    </div>
                    <div className="space-y-4">
                        <Label>Digite a sua senha</Label>
                        <Input placeholder="" type="password" {...register('password')} />
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                    <Button variant="link">
                            <Link to="/sign-in">
                                Acessar conta
                            </Link>
                        </Button>
                    
                    <Button className="w-1/2 bg-green-800 hover:bg-green-600" type="submit">Cadastrar</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp