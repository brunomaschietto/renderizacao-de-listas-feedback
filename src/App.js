import { ListaTarefas } from "./components/ListaTarefas";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";

function App() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [novaTarefaConcluida, setNovaTarefaConcluida] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };
  function concluiTarefa(tarefa) {}

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    setNovaTarefaConcluida((atual) => [...atual, tarefa]);
  };

  return (
    <div>
      <GlobalStyle />
      <ListaTarefas
        lista={lista}
        onChangeTarefa={onChangeTarefa}
        adicionaTarefa={adicionaTarefa}
        removeTarefa={removeTarefa}
        listaConcluida={novaTarefaConcluida}
      />
    </div>
  );
}

export default App;
