import initalState from "../../data/initialStateList";
import { CONSTANTS } from "../actions";

const listsReducer = (state = initalState, action) => {
  switch (action.type) {
    case CONSTANTS.DRAG_HAPPENED: {
      const {
          droppableIdStart,
          droppableIdEnd,
          droppableIndexStart,
          droppableIndexEnd,
          draggableId
      } = action.payload;
  
      const newState = [...state];
  
      // Find categories
      const categoryStart = newState.find(category => droppableIdStart === category.id);
      const categoryEnd = newState.find(category => droppableIdEnd === category.id);
  
      // Dragging within the same category
      if (droppableIdStart === droppableIdEnd) {
          const job = categoryStart.applicants.splice(droppableIndexStart, 1)[0];
          categoryStart.applicants.splice(droppableIndexEnd, 0, job);
      } 
      // Dragging to a different category
      else {
          const job = categoryStart.applicants.find(job => job.id === draggableId);
          categoryStart.applicants.splice(droppableIndexStart, 1);
          categoryEnd.applicants.splice(droppableIndexEnd, 0, job);
      }
      return newState;
  }
  

      default:
      return state;
  }
};

export default listsReducer;
