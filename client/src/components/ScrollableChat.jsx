import { Avatar, Tooltip } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";

import "../App.css";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../context/ChatProvider";
import typingAnimation from "../animations/typing.json";

const ScrollableChat = ({ messages, isTyping }) => {
  const { user } = ChatState();

  const scrollRef = useRef();

  useEffect(() => {
    // Scroll to the bottom when messages render or sender is typing
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  // Ensure that messages is an array before rendering
  if (!Array.isArray(messages)) {
    console.error("Error: messages is not an array in ScrollableChat.");
    return null;
  }

  return (
    <>
      <div
        className="hide-scrollbar"
        style={{ overflowX: "hidden", overflowY: "auto" }}
      >
        {/* Render messages if messages is not null or undefined */}
        {messages.map((message, index) => (
          <div key={message._id} style={{ display: "flex" }}>
            {(isSameSender(messages, message, index, user._id) ||
              isLastMessage(messages, index, user._id)) && (
              <Tooltip
                label={message.sender.name}
                placement="bottom-start"
                hasArrow
              >
                <Avatar
                  mt="7px"
                  mr="1"
                  size="sm"
                  cursor="pointer"
                  name={message.sender.name}
                  src={message.sender.pic}
                />
              </Tooltip>
            )}

            <span
              style={{
                backgroundColor: `${
                  message.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
                marginLeft: isSameSenderMargin(
                  messages,
                  message,
                  index,
                  user._id
                ),
                marginTop: isSameUser(messages, message, index, user._id)
                  ? 3
                  : 10,
              }}
            >
              {message.content}
            </span>
          </div>
        ))}
      </div>
      {/* Render typing animation if isTyping is true */}
      {isTyping && (
        <div style={{ width: "70px", marginTop: "5px" }}>
          <Lottie animationData={typingAnimation} loop={true} />
        </div>
      )}
    </>
  );
};

export default ScrollableChat;
