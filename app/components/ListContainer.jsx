"use client";

import { connect } from "react-redux";
import ListBase from "./ListBase";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../redux/actions";
import { useDispatch } from "react-redux";

const ListContainer = ({ lists }) => {
  const dispatch = useDispatch();
  const onDragEndFunc = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEndFunc}>
      <div className="px-6 flex gap-x-2">
        {lists.map((list, idx) => (
          <ListBase {...list} key={idx} />
        ))}
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => {
  const { lists } = state;
  return { lists: lists };
};
export default connect(mapStateToProps)(ListContainer);
