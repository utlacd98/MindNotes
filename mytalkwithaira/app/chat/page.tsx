"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { ChatInterface } from "@/components/chat/chat-interface"

export default function ChatPage() {
  return (
    <ProtectedRoute>
      <ChatInterface />
    </ProtectedRoute>
  )
}
