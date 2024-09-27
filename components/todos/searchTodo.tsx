import { Input } from "@/components/ui/input";

interface SearchTodo {
  search: string;
  setSearch: (value: string) => void;
}

const SearchTodo = ({ search, setSearch }: SearchTodo) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para Pesquisar..."
      />
    </div>
  );
};

export default SearchTodo;
