export const SHORT_TOPIC_SELECTED = 'short_topic_selected';

export function shortTopicSelected(bool) {
    console.log('action shortTopicSelected:', bool)
    return {
        type:'SHORT_TOPIC_SELECTED',
        payload: bool
    };
}
