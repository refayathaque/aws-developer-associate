import { SHORT_TOPIC_SELECTED } from '../actions/action_short_topic_selected';

export function shortTopicSelected(state = false, action) {
    switch (action.type) {
        case 'SHORT_TOPIC_SELECTED':
        console.log('reducer case SHORT_TOPIC_SELECTED - action.payload:', action.payload)
            return action.payload;
        default:
            return state;
    }
}
