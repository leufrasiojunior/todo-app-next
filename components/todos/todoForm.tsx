import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input"; // Importa o Input do shadcn
import { Button } from "@/components/ui/button"; // Importa o Button do shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Importa o Select do shadcn
import { Label } from "@/components/ui/label"; // Importa o Label do shadcn
import DocumentPlus from "../icons/document-plus";

interface TodoFormProps {
  addTodo: (value: string, category: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value || !category) {
      alert("Nome da Tarefa ou categoria em branco!");
      return;
    }
    addTodo(value, category);
    // Limpa os campos após o envio
    setValue("");
    setCategory("");
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Criar Tarefa:</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input para o título da tarefa */}
        <div>
          <Label htmlFor="task-title">Título da Tarefa</Label>
          <Input
            id="task-title"
            type="text"
            placeholder="Digite o título"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border-zinc-410 "
          />
        </div>

        {/* Select para a categoria */}
        <div>
          <Label htmlFor="category">Categoria</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category" className="w-full">
              <SelectValue placeholder="Selecione uma Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Trabalho">Trabalho</SelectItem>
              <SelectItem value="Pessoal">Pessoal</SelectItem>
              <SelectItem value="Estudos">Estudos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Botão de envio */}
        <Button type="submit" className="w-full gap-1">
          Criar Tarefa
          <DocumentPlus />
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
