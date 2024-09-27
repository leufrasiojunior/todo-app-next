"use client";

import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import Arrow from "../icons/arrow";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para armazenar a mensagem de erro
  const { pending } = useFormStatus();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    setErrorMessage("");

    setTimeout(() => {
      setLoading(false);
      if (data.email === "test@example.com" && data.password === "123456") {
        router.push("/todolist");
        localStorage.setItem("token", "akoh3rn1q65hf0602j047xpy707c7xc3");
      } else {
        setErrorMessage("Usuário ou senha errados. Tente novamente");
      }
    }, 2000);
  };

  return (
    <CardWrapper
      label="Entre com a sua conta"
      title="Login"
      backButtonHref="/auth/register"
      backButtonLabel="Não possui uma conta? Registre-se agora."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="example@example.com"
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
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full gap-1" disabled={pending}>
            {loading ? "Carregando..." : "Entrar"}
            <Arrow />
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
