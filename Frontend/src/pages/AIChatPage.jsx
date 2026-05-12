import { useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import { LuSendHorizontal } from 'react-icons/lu'
import DailyCheckInModal from '../components/ui/DailyCheckInModal'

function AIChatPage() {
    const [message, setMessage] = useState('')

    const handleSend = () => {
        if (!message.trim()) return
        console.log('Sending:', message)
        setMessage('')
    }

    const [showModal, setShowModal] = useState(() => {
        const today = new Date().toDateString()
        const lastCheckin = localStorage.getItem('lastCheckin')
        return lastCheckin !== today
    })

    const handleSubmit = (data) => {
        const today = new Date().toDateString()
        localStorage.setItem('lastCheckin', today)
        localStorage.setItem('checkinData', JSON.stringify(data))
    }

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] relative">

            {showModal && (
                <DailyCheckInModal
                    onClose={() => setShowModal(false)}
                    onSubmit={handleSubmit}
                />
            )}
            <div className="flex-1 overflow-y-auto p-6">
                {/* chat messages akan muncul di sini */}
            </div>

            <div className="p-6 flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Placeholder"
                        rows={2}
                        className="w-full resize-none outline-none text-[#0F172A] placeholder-[#64748B] text-sm"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault()
                                handleSend()
                            }
                        }}
                    />
                    <div className="flex items-center justify-between mt-2">
                        <button className="text-[#64748B] hover:text-[#0F172A] transition-colors">
                            <IoAddOutline size={24} />
                        </button>
                        <button
                            onClick={handleSend}
                            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0F172A] text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                        >
                            Sent Message
                            <LuSendHorizontal size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIChatPage