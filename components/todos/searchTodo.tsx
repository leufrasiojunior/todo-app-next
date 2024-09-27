import { Input } from "@/components/ui/input";

interface SearchTodo {
  search: string;
  setSearch: (value: string) => void;
}

const SearchTodo = ({ search, setSearch }: SearchTodo) => {
  return (
    <div className="mb-4">
      <h2>Pesquisar:</h2>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para Pesquisar..."
        className="w-full border-zinc-410"
      />
    </div>
  );
};

export default SearchTodo;
