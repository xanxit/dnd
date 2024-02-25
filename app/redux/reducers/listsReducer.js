import initalState from "../../data/initialStateList";
import { CONSTANTS } from "../actions";

const listsReducer = (state = initalState, action) => {
  switch (action.type) {
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;
      const newState = state.map(list => {
        // If the droppableIdStart and droppableIdEnd are the same
        if (droppableIdStart === droppableIdEnd && droppableIdStart === list.id) {
          // Shallow copy the applicants array to avoid mutating it directly
          const newApplicants = [...list.applicants];
          // Extract the dragged card from its original position
          const [draggedCard] = newApplicants.splice(droppableIndexStart, 1);
          // Insert the dragged card to its new position
          newApplicants.splice(droppableIndexEnd, 0, draggedCard);
          // Return a new list object with the updated applicants array
          return { ...list, applicants: newApplicants };
        }

        if(droppableIdStart !== droppableIdEnd) {
          const listStart = state.find(list => droppableIdStart === list.id)
          const card = listStart.applicants.splice(droppableIndexStart, 1)
          const listEnd = state.find(list => droppableIdEnd === list.id)
          list.applicants.splice(droppableIndexEnd,0, ...card)
        }
        return list;
      });
    

      return newState;
    default:
      return state;
  }
};

export default listsReducer;
