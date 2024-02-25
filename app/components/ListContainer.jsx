"use client";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ListBase from "./ListBase";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListContainer = ({ lists, sort, searchKeyWord }) => {
  const notify = () => toast("Please Don't Reject Sanchit ❤️");
  const name = "Sanchit Hajela";
  const filteredLists = lists.map((list) => ({
    ...list,
    applicants: list.applicants.filter((applicant) =>
      Object.values(applicant).some((value) =>
        value.toLowerCase().includes(searchKeyWord.toLowerCase())
      )
    ),
  }));
  useEffect(() => {
    const isSanchit = filteredLists[0].applicants.filter(
      (applicant) => applicant.name.toLowerCase() === name.toLowerCase()
    );
    if (isSanchit.length) {
      notify();
    }
  }, [filteredLists]);

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
      <ToastContainer />
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
