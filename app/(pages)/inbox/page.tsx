import React from "react";
import { ConversationItem } from "../_components/inbox/conversation-item";

function Inbox() {
  return (
    <>
      <h1 className="mb-6 text-2xl">Inbox</h1>
      <div className="space-y-4 mb-4">
        {[...Array(20)].map((item, idx) => (
          <ConversationItem key={idx} />
        ))}
      </div>
    </>
  );
}

export default Inbox;
