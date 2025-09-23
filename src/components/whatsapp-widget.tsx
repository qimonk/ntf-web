'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface WhatsAppWidgetProps {
  className?: string
}

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function WhatsAppWidget({ className }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Selamat datang di NSY Tax Freelancer. Ada yang bisa kami bantu?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = React.useState('')
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response
    await new Promise(resolve => setTimeout(resolve, 1000))

    const botResponses = [
      'Terima kasih atas pesan Anda. Tim kami akan segera merespon.',
      'Baik, kami akan bantu Anda dengan konsultasi pajak. Mohon tunggu sebentar.',
      'Silakan jelaskan kebutuhan perpajakan Anda lebih detail.',
      'Kami siap membantu! Ada pertanyaan spesifik tentang pajak?'
    ]

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponses[Math.floor(Math.random() * botResponses.length)],
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const handleOpenWhatsApp = () => {
    const message = 'Halo, saya tertarik dengan layanan NSY Tax Freelancer'
    // Format utama menggunakan wa.me (lebih sederhana)
    const whatsappUrl = `https://wa.me/62895340042060?text=${encodeURIComponent(message)}`
    // Format alternatif menggunakan api.whatsapp.com (untuk kompatibilitas)
    // const whatsappUrl = `https://api.whatsapp.com/send?phone=62895340042060&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isOpen) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn('fixed bottom-6 right-6 z-50', className)}
      >
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('fixed bottom-6 right-6 z-50 w-80 md:w-96', className)}
    >
      <Card className="shadow-2xl border-0">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border-2 border-white">
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>NSY</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">NSY Tax Freelancer</h3>
                  <p className="text-xs opacity-90">Online • Biasanya merespon dalam 5 menit</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {isMinimized && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-white/20"
                    onClick={() => setIsMinimized(false)}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        'flex',
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      <div
                        className={cn(
                          'max-w-[80%] rounded-2xl px-4 py-2',
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-none'
                            : 'bg-muted text-muted-foreground rounded-bl-none'
                        )}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-2 rounded-bl-none">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ketik pesan..."
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage()
                        }
                      }}
                    />
                    <Button
                      size="icon"
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3"
                    onClick={handleOpenWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat di WhatsApp
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}