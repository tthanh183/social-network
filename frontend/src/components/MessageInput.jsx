import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { IoSendSharp } from 'react-icons/io5';
import { useState } from 'react';
import useShowToast from '../hooks/useShowToast.js';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedConversationAtom } from '../atoms/messagesAtom';
import { conversationAtom } from '../atoms/messagesAtom';
const MessageInput = ({ setMessages }) => {
  const [messageText, setMessageText] = useState('');
  const showToast = useShowToast();
  const selectedConversation = useRecoilValue(selectedConversationAtom);
  const setConversations = useSetRecoilState(conversationAtom);

  const handleSendMessage = async e => {
    e.preventDefault();
    if (!messageText) return;

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          recipientId: selectedConversation.userId,
        }),
      });

      const data = await res.json();
      if (data.error) {
        showToast('Error', data.error, 'error');
        return;
      }

      setMessages(prevMessages => [...prevMessages, data]);
      
      setConversations(prevConversations => {
        const updatedConversations = prevConversations.map(conversation => {
          if (conversation._id === selectedConversation._id) {
            return {
              ...conversation,
              lastMessage: {
                text: messageText,
                sender: data.sender
              }
            }
          }
          return conversation;
        });
        return updatedConversations;
      });
      setMessageText('');

    } catch (error) {
      showToast('Error', error.message, 'error');
    }
  };
  return (
    <form onSubmit={handleSendMessage}>
      <InputGroup>
        <Input w={'full'} placeholder="Type a message..." onChange={(e) => setMessageText(e.target.value)} value={messageText}/>
        <InputRightElement onClick={handleSendMessage} cursor={'pointer'}>
          <IoSendSharp />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default MessageInput;
