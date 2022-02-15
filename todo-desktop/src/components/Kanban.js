import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const itemList = [
  {
    id: 1,
    content: "item 1",
    status: "todo",
  },
  {
    id: 2,
    content: "item 2",
    status: "todo",
  },
  {
    id: 3,
    content: "item 3",
    status: "todo",
  },
  {
    id: 4,
    content: "item 4",
    status: "todo",
  },
  {
    id: 5,
    content: "item 5",
    status: "todo",
  },
];

function Kanban() {
  return (
    <>
      <div className="Tasks">
        {" "}
        {itemList.map((item) => {
          return (
            <div className="Tasks-item">
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </>

    // <DndProvider backend={HTML5Backend}>
    //   <nav>
    //     <div>Todo</div>
    //     <div className="push">me</div>
    //     <div>vickbishnoi@gmail.com</div>
    //   </nav>
    // </DndProvider>
  );
}

export default Kanban;
