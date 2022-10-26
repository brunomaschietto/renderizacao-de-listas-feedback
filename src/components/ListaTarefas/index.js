import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  LinhaRiscada,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas(props) {
  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={props.novaTarefa}
          onChange={props.onChangeTarefa}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              props.adicionaTarefa();
            }
          }}
        />
        <AddTaskButton onClick={props.adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {props.lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => props.removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaContainer>
        <h1>Lista Concluida</h1>
        <ul>
          {props.listaConcluida.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <LinhaRiscada>{tarefa}</LinhaRiscada>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
