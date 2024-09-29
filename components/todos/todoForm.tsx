import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import DocumentPlus from "../icons/document-plus";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTodo } from "@/schema";

// Simulação de categorias a partir de um JSON
const categoriesJSON = [
  { id: 1, name: "Trabalho" },
  { id: 2, name: "Pessoal" },
  { id: 3, name: "Estudos" },
];

interface TodoFormProps {
  addTodo: (value: string, category: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newCategory, setNewCategory] = useState<string>("");
  const [categories, setCategories] = useState(categoriesJSON); // Estado que contém as categorias
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateTodo),
    defaultValues: {
      taskTitle: "",
      category: "",
      newCategory: "",
    },
  });

  const onSubmit = (data: {
    taskTitle: string;
    category: string;
    newCategory: string;
  }) => {
    const categoryToUse = data.newCategory || data.category;

    // Adicionar a nova categoria ao estado se ela não estiver na lista
    if (newCategory && !categories.find((cat) => cat.name === newCategory)) {
      const newCategoryObj = {
        id: categories.length + 1, // Gerar um novo ID para a categoria
        name: newCategory,
      };
      setCategories((prevCategories) => [...prevCategories, newCategoryObj]); // Adicionar a nova categoria
    }

    addTodo(data.taskTitle, categoryToUse);

    // Limpar os campos após submeter o formulário
    setNewCategory("");
    setSelectedCategory("");
    setValue("newCategory", "");
    setValue("category", "");
  };

  const handleNewCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(event.target.value);
    setValue("newCategory", event.target.value); // Atualiza o valor de newCategory no form
  };

  const handleCategorySelect = (value: string) => {
    setSelectedCategory(value);
    setValue("category", value); // Atualiza o valor de category no form
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Criar Tarefa:</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="task-title">Título da Tarefa</Label>
          <Input
            id="task-title"
            type="text"
            placeholder="Digite o título"
            {...register("taskTitle")}
            className="w-full border-zinc-410"
          />
          {errors.taskTitle && (
            <span className="text-red-500">{errors.taskTitle.message}</span>
          )}
        </div>

        <div>
          <Label htmlFor="category">Categoria</Label>
          <div className="flex flex-col gap-2">
            {/* Input para adicionar nova categoria */}
            <Input
              id="new-category"
              type="text"
              placeholder="Digite uma nova categoria"
              value={newCategory}
              onChange={handleNewCategory}
              className="w-full border-zinc-410"
            />

            {/* Select para categorias existentes */}
            <Select onValueChange={handleCategorySelect}>
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Selecione uma Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {errors.category && (
            <span className="text-red-500">{errors.category.message}</span>
          )}
        </div>

        <Button type="submit" className="w-full gap-1">
          Criar Tarefa
          <DocumentPlus />
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
