// Function to get the sender's name
export const getSender = (loggedUser, users) => {
  if (!users) {
    console.error("Error: users is undefined or null in getSender.");
    return null;
  }

  const otherUser = users.find(user => user._id !== loggedUser._id);
  return otherUser ? otherUser.name : null;
};

// Function to get the full sender object
export const getSenderFull = (loggedUser, users) => {
  if (!users) {
    console.error("Error: users is undefined or null in getSenderFull.");
    return null;
  }

  return users.find(user => user._id !== loggedUser._id) || null;
};

// Function to check if the sender of the current message is the same as the next message sender
export const isSameSender = (messages, currentIndex, loggedUserId) => {
  const current = messages[currentIndex];
  const next = messages[currentIndex + 1];
  return next && next.sender._id === current.sender._id && current.sender._id !== loggedUserId;
};

// Function to check if the current message is the last message and sent by a different user
export const isLastMessage = (messages, currentIndex, loggedUserId) => {
  const last = messages[messages.length - 1];
  return currentIndex === messages.length - 1 && last && last.sender._id !== loggedUserId;
};

// Function to determine the margin based on the sender of the current and next message
export const isSameSenderMargin = (messages, currentMessageIndex, loggedUserId) => {
  const currentMessage = messages[currentMessageIndex];
  const nextMessage = messages[currentMessageIndex + 1];

  if (!nextMessage) {
    return "auto"; // No next message, return "auto" or any other default value
  }

  if (nextMessage.sender._id === currentMessage.sender._id) {
    return 33;
  } else if (nextMessage.sender._id !== currentMessage.sender._id && currentMessage.sender._id !== loggedUserId) {
    return 0;
  } else {
    return "auto";
  }
};


// Function to check if the sender of the current message is the same as the previous message sender
export const isSameUser = (messages, currentIndex) => {
  const current = messages[currentIndex];
  const previous = messages[currentIndex - 1];
  return previous && previous.sender._id === current.sender._id;
};
