import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Clear input
    inputRef.current.value = "";

    // Add user message to chat
    setChatHistory(prev => [...prev, { role: "user", text: userMessage }]);

    // Add thinking message
    setChatHistory(prev => [...prev, { role: "model", text: "Thinking..." }]);

    // Generate response
    const response = await generateBotResponse(userMessage);

    // Update chat history with response
    setChatHistory(prev => {
      const newHistory = [...prev];
      // Remove the "Thinking..." message
      newHistory.pop();
      // Add the actual response
      return [...newHistory, { role: "model", text: response }];
    });
  };
  return (
    <form onSubmit={handleFormSubmit} className="chat-form">
      <input ref={inputRef} placeholder="Message..." className="message-input" required />
      <button type="submit" id="send-message" className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
};
export default ChatForm;
