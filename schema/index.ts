import * as z from 'zod'

export const RegisterSchema = z.object({
    email: z.string().email({message: 'Por favor, insira um e-mail válido.'}),
    name: z.string().min(1, {message: 'Por favor, insira seu nome'}),
    password: z.string().min(6, {message: 'A senha deve ter pelo menos 6 caracteres.'}),
    confirmPassword: z.string().min(6, {message: 'As senhas devem ser iguais.'}),
    
})

export const LoginSchema = z.object({
    email: z.string().email({message: 'Por favor, insira um e-mail válido.'}),
    password: z.string().min(6, {message: 'A senha deve ter pelo menos 6 caracteres.'}),
})

export const CreateTodo = z.object({
    taskTitle: z.string().min(1, "O título da tarefa é obrigatório."),
    category: z.string().min(1, "A categoria é obrigatória."),
  });