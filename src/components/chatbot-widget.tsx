'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Minimize2, Maximize2, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ChatbotMessage {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  quickReplies?: string[]
}

interface ChatbotWidgetProps {
  className?: string
}

const faqDatabase = [
  {
    keywords: ['konsultasi', 'konsultasi pajak', 'harga konsultasi'],
    response: 'Konsultasi pajak dimulai dari Rp 299.000 untuk paket Basic. Kami juga menyediakan paket Professional Rp 599.000 dan Enterprise Rp 1.299.000. Anda bisa memilih sesuai kebutuhan bisnis Anda.',
    quickReplies: ['Lihat Paket Harga', 'Konsultasi Sekarang']
  },
  {
    keywords: ['laporan', 'spt', 'pajak tahunan'],
    response: 'Kami membantu pembuatan laporan pajak bulanan dan tahunan (SPT). Layanan mencakup PPh, PPN, dan jenis pajak lainnya dengan jaminan akurasi dan ketepatan waktu.',
    quickReplies: ['Detail Layanan', 'Hubungi Kami']
  },
  {
    keywords: ['perhitungan', 'hitung pajak'],
    response: 'Layanan perhitungan pajak kami menggunakan sistem terkini untuk memastikan akurasi. Kami menghitung berbagai jenis pajak sesuai dengan regulasi terbaru.',
    quickReplies: ['Cara Kerja', 'Mulai Sekarang']
  },
  {
    keywords: ['jam', 'buka', 'operasional'],
    response: 'Jam operasional kami:\n• Senin - Jumat: 09:00 - 18:00\n• Sabtu: 09:00 - 15:00\n• Minggu & Hari Libur: Tutup\nAnda bisa menghubungi kami di jam tersebut atau leave message kami akan balas.',
    quickReplies: ['Hubungi Sekarang', 'Leave Message']
  },
  {
    keywords: ['lokasi', 'alamat', 'kantor'],
    response: 'Kantor kami berlokasi di:\nJl. Sudirman No. 123\nJakarta Selatan 12190\nIndonesia\nKami juga melayani konsultasi online.',
    quickReplies: ['Lihat Peta', 'Konsultasi Online']
  },
  {
    keywords: ['bayar', 'pembayaran', 'metode'],
    response: 'Kami menerima berbagai metode pembayaran:\n• Transfer Bank\n• Virtual Account\n• E-Wallet (OVO, GoPay, DANA)\n• Kredit/Debit Card\nPembayaran bisa dilakukan setelah jasa selesai.',
    quickReplies: ['Detail Pembayaran', 'Mulai Proyek']
  }
]

export function ChatbotWidget({ className }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [messages, setMessages] = React.useState<ChatbotMessage[]>([
    {
      id: '1',
      text: 'Halo! Saya adalah asisten virtual NSY Tax Freelancer. Ada yang bisa saya bantu?',
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: ['Harga Layanan', 'Jam Operasional', 'Lokasi Kantor', 'Cara Pembayaran']
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

  const findBestResponse = (userInput: string): { response: string; quickReplies?: string[] } => {
    const input = userInput.toLowerCase()
    
    for (const faq of faqDatabase) {
      for (const keyword of faq.keywords) {
        if (input.includes(keyword)) {
          return {
            response: faq.response,
            quickReplies: faq.quickReplies
          }
        }
      }
    }
    
    return {
      response: 'Maaf, saya belum mengerti pertanyaan Anda. Silakan coba tanya dengan kata kunci lain seperti: "harga", "jam operasional", "lokasi", atau "pembayaran". Atau hubungi tim kami langsung di WhatsApp.',
      quickReplies: ['Hubungi Tim', 'FAQ Lengkap']
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: ChatbotMessage = {
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

    const { response, quickReplies } = findBestResponse(inputMessage)

    const botMessage: ChatbotMessage = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      quickReplies
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const handleQuickReply = async (reply: string) => {
    const userMessage: ChatbotMessage = {
      id: Date.now().toString(),
      text: reply,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    await new Promise(resolve => setTimeout(resolve, 500))

    const { response, quickReplies } = findBestResponse(reply)

    const botMessage: ChatbotMessage = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      quickReplies
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  if (!isOpen) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn('fixed bottom-24 right-6 z-40', className)}
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="w-6 h-6" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('fixed bottom-24 right-6 z-40 w-80 md:w-96', className)}
    >
      <Card className="shadow-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/api/placeholder/40/40" />
                <AvatarFallback>
                  <Bot className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">NSY Assistant</CardTitle>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-xs opacity-90">Online • FAQ Bot</p>
                </div>
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
        </CardHeader>

        <CardContent className="p-0">
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
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-muted text-muted-foreground rounded-bl-none'
                        )}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        
                        {/* Quick Replies */}
                        {message.sender === 'bot' && message.quickReplies && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {message.quickReplies.map((reply, idx) => (
                              <Button
                                key={idx}
                                variant="secondary"
                                size="sm"
                                className="text-xs"
                                onClick={() => handleQuickReply(reply)}
                              >
                                {reply}
                              </Button>
                            ))}
                          </div>
                        )}
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
                      placeholder="Ketik pertanyaan Anda..."
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
                  
                  <div className="mt-3 text-center">
                    <Badge variant="outline" className="text-xs">
                      <HelpCircle className="w-3 h-3 mr-1" />
                      Powered by NSY AI
                    </Badge>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}