"use client";

import React from "react";
import { connect } from "react-redux";
import ListBase from "./ListBase";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../redux/actions";
import { useDispatch } from "react-redux";

const ListContainer = ({ lists, sort, searchKeyWord }) => {
  const dispatch = useDispatch();

  const filteredLists = lists.map((list) => ({
    ...list,
    applicants: list.applicants.filter((applicant) =>
      Object.values(applicant).some((value) =>
        value.toLowerCase().includes(searchKeyWord.toLowerCase())
      )
    ),
  }));

  const onDragEndFunc = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEndFunc}>
      <div className="px-6 flex gap-x-2 overflow-x-scroll">
        {filteredLists.map((list, idx) => (
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
export default connect(mapStateToProps, { sort })(ListContainer);
