"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, 
    FormControl, 
    FormField, 
    FormItem, FormLabel, 
    FormMessage 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoaderIcon } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const formSchema = z.object({
    name: z.string()
        .min(1, "O nome não pode estar vazio")
        .max(100, "O nome não pode ter mais de 100 caracteres"),
    email: z.string()
        .min(1, "O email não pode estar vazio")
        .email("Formato de email inválido"),
    password: z.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
        )
})

export const SignUpForm = () => {

    const [ loading, setLoading ] = useState(false)
	const router = useRouter()

	const handleLoginButton = async (email: string) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            router.push("/")
        }, 1000)
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            password: ""
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const { email } = data
        handleLoginButton(email)
        form.reset({ email: "" })
    }

    return (

        <Card className="w-[350px]">

            <CardHeader>
                <CardTitle>Criar Conta</CardTitle>
                <CardDescription>Preencha as informações para criar sua conta</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-10 w-full h-full">

                <Form {...form}>
            
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
            
                        <FormField
            
                            control={form.control}
                            name="name"
                            render={({ field }) => (
            
                                <FormItem>
            
                                    <FormLabel>Nome</FormLabel>
            
                                    <FormControl>
                                        <Input 
                                            autoFocus
                                            placeholder="Informe seu nome" {...field} 
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    
                                    <FormMessage />
            
                                </FormItem>
            
                            )}

                        />
                        
                        <FormField
            
                            control={form.control}
                            name="email"
                            render={({ field }) => (

                                <FormItem>

                                    <FormLabel>Email</FormLabel>

                                    <FormControl>
                                        <Input 
                                            type="email"
                                            placeholder="Digite a email" {...field} 
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    
                                    <FormMessage />

                                </FormItem>

                            )}

                        />

                        <FormField
                            
                            control={form.control}
                            name="password"
                            render={({ field }) => (

                                <FormItem>

                                    <FormLabel>Senha</FormLabel>

                                    <FormControl>
                                        <Input 
                                            type="password"
                                            placeholder="Crie uma senha" {...field} 
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    
                                    <FormMessage />

                                </FormItem>

                            )}

                        />
            
                        <Button 
                            type="submit"
                            disabled={loading}
                            className="w-full"
                        >
                            Criar Conta
                        </Button>

                        <div className="flex items-center gap-2">
                            <p>Já tem conta?</p>
                            <Link href="/signin" className="hover:underline">
                                Fazer Login
                            </Link>
                        </div>
            
                    </form>
            
                </Form>
                
                { loading && 
                    <div className="w-full flex items-center justify-center"> 
                        <LoaderIcon size={40} className="animate-pulse" /> 
                    </div> 
                }

            </CardContent>

        </Card>

    )

} 