import { initalState } from "../../data/initialStateList";
import { CONSTANTS, sort } from "../actions";
import { produce } from 'immer'

type ActionType = ReturnType<typeof sort>

const listsReducer = (state = initalState, action: ActionType) => {
    switch (action.type) {
        case CONSTANTS.DRAG_HAPPENED: {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;

            return produce(state, draft => {
                const startColumn = draft.find(it => droppableIdStart === it.id)
                const endColumn = draft.find(it => droppableIdEnd === it.id)

                if (!startColumn || !endColumn) return draft
                const [card] = startColumn.applicants.splice(droppableIndexStart, 1)
                endColumn.applicants.splice(droppableIndexEnd, 0, card)
            })
        }
        default:
            return state;
    }
};

export default listsReducer;
