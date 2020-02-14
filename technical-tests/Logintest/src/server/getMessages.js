import MessageFormat from 'messageformat';
import translations from '../app/messages';

const compiledMessages = new MessageFormat(Object.keys(translations)).compile(translations);

export default function getMessages(language) {
    return compiledMessages[language] || compiledMessages.en;
}
