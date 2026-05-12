import { useState } from 'react'
import { s } from '../styles/common'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

const sleepData = [
    { day: 'Mon', hours: 5 },
    { day: 'Tue', hours: 6 },
    { day: 'Wed', hours: 6.5 },
    { day: 'Thu', hours: 7 },
    { day: 'Fri', hours: 7.5 },
]

function HabitLogPage() {
    const [meals, setMeals] = useState(3)
    const [selectedFoods, setSelectedFoods] = useState(['Fresh Vegetables'])
    const [exercised, setExercised] = useState(true)
    const [intensity, setIntensity] = useState('Medium')
    const [steps] = useState(8342)
    const [sleepHours] = useState(7.5)
    const [stressLevel, setStressLevel] = useState(null)
    const [currentDate, setCurrentDate] = useState(new Date())

    const foodOptions = ['Fresh Vegetables', 'Lean Protein', 'Sugary Snacks', 'Fast Food', 'Whole Grain']
    const intensityOptions = ['Low', 'Medium', 'High']
    const isToday = new Date().toDateString() === currentDate.toDateString()

    const toggleFood = (food) => {
        setSelectedFoods(prev =>
            prev.includes(food) ? prev.filter(f => f !== food) : [...prev, food]
        )
    }

    const goToPrev = () => {
        const prev = new Date(currentDate)
        prev.setDate(prev.getDate() - 1)
        setCurrentDate(prev)
    }

    const goToNext = () => {
        if (isToday) return
        const next = new Date(currentDate)
        next.setDate(next.getDate() + 1)
        setCurrentDate(next)
    }

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    return (
        <div className={s.pageWrapper}>
            <h1 className={s.pageTitle}>Hi, Ibra!</h1>
            <p className={s.pageSubtitle}>How are you feeling today? Let's quickly log your habits to keep your shield strong.</p>

            {/* Date Navigator */}
            <div className="flex items-center justify-between bg-white rounded-2xl border border-gray-200 px-4 py-3 mt-4 mb-2 max-w-sm">
                <button
                    onClick={goToPrev}
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                >
                    <IoChevronBackOutline size={20} />
                </button>

                <span className="text-sm font-medium text-[#0F172A]">
                    {isToday ? `Hari ini, ${formatDate(currentDate)}` : formatDate(currentDate)}
                </span>

                <button
                    onClick={goToNext}
                    disabled={isToday}
                    className={`transition-colors ${isToday ? 'text-gray-300 cursor-not-allowed' : 'text-[#64748B] hover:text-[#0F172A]'}`}
                >
                    <IoChevronForwardOutline size={20} />
                </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">

                {/* Daily Nutrition */}
                <div className={s.card}>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">🍽️</span>
                        <h2 className={s.sectionTitle}>Daily nutrition</h2>
                    </div>

                    <p className="text-sm text-[#64748B] mb-3">How many meals do you have today?</p>
                    <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2 w-fit mb-4">
                        <button
                            onClick={() => setMeals(m => Math.max(1, m - 1))}
                            className="text-[#64748B] hover:text-[#0F172A] font-bold text-lg w-6"
                        >
                            -
                        </button>
                        <span className="font-semibold text-[#0F172A] w-4 text-center">{meals}</span>
                        <button
                            onClick={() => setMeals(m => m + 1)}
                            className="text-[#64748B] hover:text-[#0F172A] font-bold text-lg w-6"
                        >
                            +
                        </button>
                    </div>

                    <p className="text-sm text-[#64748B] mb-3">What kinda food did you eat?</p>
                    <div className="flex flex-wrap gap-2">
                        {foodOptions.map(food => (
                            <button
                                key={food}
                                onClick={() => toggleFood(food)}
                                className={`text-sm px-4 py-1.5 rounded-full border transition-colors
                  ${selectedFoods.includes(food)
                                        ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                                        : 'bg-white text-[#0F172A] border-gray-300 hover:border-[#3B82F6]'
                                    }`}
                            >
                                {food}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Physical Activity */}
                <div className={s.card}>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">🏃</span>
                        <h2 className={s.sectionTitle}>Physical Activity</h2>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-[#0F172A]">Did you exercise?</span>
                        <div className="flex gap-2">
                            {['Yes', 'No'].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => setExercised(opt === 'Yes')}
                                    className={`text-sm px-4 py-1 rounded-full border transition-colors
                    ${(opt === 'Yes' && exercised) || (opt === 'No' && !exercised)
                                            ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                                            : 'bg-white text-[#0F172A] border-gray-300'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="text-sm text-[#0F172A] mb-2">Intensity</p>
                    <div className="flex gap-2 mb-4">
                        {intensityOptions.map(opt => (
                            <button
                                key={opt}
                                onClick={() => setIntensity(opt)}
                                className={`flex-1 text-sm py-1.5 rounded-full border transition-colors
                  ${intensity === opt
                                        ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                                        : 'bg-white text-[#0F172A] border-gray-300 hover:border-[#3B82F6]'
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#0F172A]">Daily steps</span>
                        <span className="text-sm text-[#64748B]">{steps.toLocaleString()}/10K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-[#3B82F6] h-2 rounded-full transition-all"
                            style={{ width: `${(steps / 10000) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Sleep Quality */}
                <div className={s.card}>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">🌙</span>
                        <h2 className={s.sectionTitle}>Sleep Quality</h2>
                    </div>
                    <p className="text-3xl font-bold text-[#0F172A] text-center mt-2">{sleepHours}</p>
                    <p className="text-sm text-[#64748B] text-center mb-4">Sleep of Hours</p>

                    <ResponsiveContainer width="100%" height={100}>
                        <BarChart data={sleepData} barSize={32}>
                            <XAxis dataKey="day" hide />
                            <Bar
                                dataKey="hours"
                                fill="#3B82F6"
                                radius={[4, 4, 0, 0]}
                                opacity={0.6}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Stress Level */}
                <div className={s.card}>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">🧠</span>
                        <h2 className={s.sectionTitle}>Stress Level</h2>
                    </div>

                    <p className="text-sm text-[#64748B] mb-6">How overwhelmed did you feel today?</p>

                    <div className="flex justify-between gap-2 mb-2">
                        {[1, 2, 3, 4, 5].map(level => (
                            <button
                                key={level}
                                onClick={() => setStressLevel(level)}
                                className={`w-12 h-12 rounded-full border-2 font-semibold text-sm transition-colors
                  ${stressLevel === level
                                        ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                                        : 'bg-gray-100 text-[#0F172A] border-transparent hover:border-[#3B82F6]'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-[#64748B] px-1">
                        <span>Calm</span>
                        <span>Stressed</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HabitLogPage