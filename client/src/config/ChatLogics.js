// Function to get the sender's name
export const getSender = (loggedUser, users) => {
  // Check if users array is defined
  if (users) {
    const otherUser = users.find(user => user._id !== loggedUser._id);
    return otherUser ? otherUser.name : null;
  } else {
    // Handle the case where users is undefined or null
    console.error("Error: users is undefined or null in getSender.");
    return null;
  }
};

// Function to get the full sender object
export const getSenderFull = (loggedUser, users) => {
  // Check if users array is defined
  if (users) {
    const otherUser = users.find(user => user._id !== loggedUser._id);
    return otherUser || null;
  } else {
    // Handle the case where users is undefined or null
    console.error("Error: users is undefined or null in getSenderFull.");
    return null;
  }
};

// Function to check if the sender of the current message is the same as the next message sender
export const isSameSender = (messages, currentMessageIndex, loggedUserId) => {
  const currentMessage = messages[currentMessageIndex];
  const nextMessage = messages[currentMessageIndex + 1];

  return (
    nextMessage &&
    nextMessage.sender._id === currentMessage.sender._id &&
    currentMessage.sender._id !== loggedUserId
  );
};

// Function to check if the current message is the last message and sent by a different user
export const isLastMessage = (messages, currentMessageIndex, loggedUserId) => {
  const lastMessage = messages[messages.length - 1];
  return (
    currentMessageIndex === messages.length - 1 &&
    lastMessage &&
    lastMessage.sender._id !== loggedUserId
  );
};

// Function to determine the margin based on the sender of the current and next message
export const isSameSenderMargin = (
  messages,
  currentMessageIndex,
  loggedUserId
) => {
  const currentMessage = messages[currentMessageIndex];
  const nextMessage = messages[currentMessageIndex + 1];

  if (nextMessage && nextMessage.sender._id === currentMessage.sender._id) {
    return 33;
  } else if (
    (!nextMessage || nextMessage.sender._id !== currentMessage.sender._id) &&
    currentMessage.sender._id !== loggedUserId
  ) {
    return 0;
  } else {
    return "auto";
  }
};

// Function to check if the sender of the current message is the same as the previous message sender
export const isSameUser = (messages, currentMessageIndex) => {
  const currentMessage = messages[currentMessageIndex];
  const previousMessage = messages[currentMessageIndex - 1];

  return (
    previousMessage &&
    previousMessage.sender._id === currentMessage.sender._id
  );
};
