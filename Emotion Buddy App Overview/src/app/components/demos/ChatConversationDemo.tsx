import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, MoreVertical } from 'lucide-react';

interface Message {
  type: 'ai' | 'user';
  text: string;
  delay: number;
}

const messages: Message[] = [
  {
    type: 'ai',
    text: "I notice you've been writing about work quite a bit lately. How are you feeling about that?",
    delay: 0,
  },
  {
    type: 'user',
    text: "It's been overwhelming honestly. The project deadline is coming up.",
    delay: 0.3,
  },
  {
    type: 'ai',
    text: "I can see the stress in your recent entries. Looking at patterns from the past month, you tend to feel most calm after taking breaks. Have you been able to step away?",
    delay: 0.6,
  },
  {
    type: 'user',
    text: "Not really... I feel guilty when I'm not working.",
    delay: 0.9,
  },
  {
    type: 'ai',
    text: "That's a pattern I've noticed. Your self-care entries always lead to better productivity the next day. What's one small thing you could do for yourself today?",
    delay: 1.2,
  },
];

export function ChatConversationDemo({ variant = 1 }: { variant?: 1 | 2 }) {
  const displayMessages = variant === 1 ? messages.slice(0, 3) : messages;

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-[2rem] overflow-hidden flex flex-col">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-sm">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 border border-gray-800 rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </motion.button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900">AI Companion</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs text-gray-500">Online</span>
                </div>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <MoreVertical className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto">
        {displayMessages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: message.delay }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
              {message.type === 'ai' && (
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              )}
              <div>
                <div
                  className={`rounded-2xl p-4 shadow-sm ${
                    message.type === 'ai'
                      ? 'bg-white border border-gray-100 rounded-tl-sm'
                      : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-tr-sm'
                  }`}
                >
                  <p className={`text-sm leading-relaxed ${message.type === 'ai' ? 'text-gray-900' : 'text-white'}`}>
                    {message.text}
                  </p>
                </div>
                <p className={`text-xs text-gray-400 mt-1 ${message.type === 'user' ? 'text-right' : 'ml-2'}`}>
                  Just now
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Typing indicator for variant 2 */}
        {variant === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-start gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-4 shadow-sm">
              <div className="flex gap-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Action Button for variant 2 */}
      {variant === 2 && (
        <div className="px-6 pb-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 rounded-2xl shadow-lg"
          >
            💾 Create journal entry from this chat
          </motion.button>
        </div>
      )}

      {/* Input Area */}
      <div className="px-6 py-4 bg-white/95 backdrop-blur-lg border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-transparent text-gray-900 placeholder-gray-400 outline-none text-sm"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
