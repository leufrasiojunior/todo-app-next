import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface FilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  setSort: (sort: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter, setSort }) => {
  return (
    <div
      className="filter p-4 rounded-lg"
      style={{ marginTop: "0px!important" }}
    >
      <h2 className="text-xl font-semibold mb-4">Filtrar:</h2>
      <div className="filter-options flex justify-between items-center content-center">
        <div className="mr-4 w-1/2">
          <p className="mb-2">Status:</p>
          <Select onValueChange={setFilter} value={filter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">Todas</SelectItem>
              <SelectItem value="Completed">Completas</SelectItem>
              <SelectItem value="Incomplete">Incompletas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mr-4 w-1/2 self-end ">
          <p className="mb-2">Ordem: </p>
          <Button
            variant="outline"
            onClick={() => setSort("A-Z")}
            className="mr-3"
          >
            A-Z
          </Button>
          <Button variant="outline" onClick={() => setSort("Z-A")}>
            Z-A
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
