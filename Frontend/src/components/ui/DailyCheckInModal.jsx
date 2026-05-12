import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { s } from '../../styles/common'

function DailyCheckInModal({ onClose, onSubmit }) {
  const [meals, setMeals] = useState(3)
  const [smokes, setSmokes] = useState(false)
  const [smokeCount, setSmokeCount] = useState(0)
  const [alcohol, setAlcohol] = useState(false)
  const [stress, setStress] = useState(null)
  const [exercised, setExercised] = useState(false)

  const handleSubmit = () => {
    if (!stress) return alert('Isi tingkat stres dulu ya!')
    onSubmit({ meals, smokes, smokeCount, alcohol, stress, exercised })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[#0F172A] text-white rounded-2xl w-full max-w-sm mx-4 p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <IoCloseOutline size={22} />
        </button>

        <h2 className="text-lg font-bold text-center mb-1">Isi data kamu hari ini</h2>
        <p className="text-xs text-gray-400 text-center mb-6">
          Catat kebiasaan harian Anda untuk profil kesehatan yang presisi.
        </p>

        {/* Nutrisi */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Nutrisi</p>
        <div className="bg-[#1E293B] rounded-xl px-4 py-3 flex items-center justify-between mb-4">
          <span className="text-sm">Berapa kali makan hari ini?</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMeals(m => Math.max(1, m - 1))}
              className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-white transition-colors"
            >
              -
            </button>
            <span className="w-4 text-center font-semibold">{meals}</span>
            <button
              onClick={() => setMeals(m => m + 1)}
              className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-white transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Rokok */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Rokok</p>
        <div className="bg-[#1E293B] rounded-xl px-4 py-3 mb-1">
          <div className="flex items-center justify-between">
            <span className="text-sm">Apakah Anda merokok hari ini?</span>
            <div className="flex gap-2">
              {['Tidak', 'Ya'].map(opt => (
                <button
                  key={opt}
                  onClick={() => setSmokes(opt === 'Ya')}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors
                    ${(opt === 'Ya' && smokes) || (opt === 'Tidak' && !smokes)
                      ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                      : 'border-gray-600 text-gray-300'
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {smokes && (
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700">
              <span className="text-sm text-gray-400">Berapa batang?</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSmokeCount(c => Math.max(0, c - 1))}
                  className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-white transition-colors"
                >
                  -
                </button>
                <span className="w-4 text-center font-semibold">{smokeCount}</span>
                <button
                  onClick={() => setSmokeCount(c => c + 1)}
                  className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Alkohol */}
        <div className="bg-[#1E293B] rounded-xl px-4 py-3 flex items-center justify-between mb-4">
          <span className="text-sm">Apakah Anda minum alkohol?</span>
          <div className="flex gap-2">
            {['Tidak', 'Ya'].map(opt => (
              <button
                key={opt}
                onClick={() => setAlcohol(opt === 'Ya')}
                className={`text-xs px-3 py-1 rounded-full border transition-colors
                  ${(opt === 'Ya' && alcohol) || (opt === 'Tidak' && !alcohol)
                    ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                    : 'border-gray-600 text-gray-300'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Tingkat Stres */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tingkat Stres</p>
        <div className="bg-[#1E293B] rounded-xl px-4 py-3 mb-4">
          <p className="text-sm text-center mb-3">Bagaimana tingkat stres Anda (1-5)?</p>
          <div className="flex justify-between gap-2 mb-1">
            {[1, 2, 3, 4, 5].map(level => (
              <button
                key={level}
                onClick={() => setStress(level)}
                className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors
                  ${stress === level
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-[#0F172A] text-gray-300 hover:bg-[#3B82F6]/20'
                  }`}
              >
                {level}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 px-1">
            <span>Rendah</span>
            <span>Sangat Tinggi</span>
          </div>
        </div>

        {/* Olahraga */}
        <div className="bg-[#1E293B] rounded-xl px-4 py-3 flex items-center justify-between mb-6">
          <span className="text-sm">Apakah Anda olahraga hari ini?</span>
          <div className="flex gap-2">
            {['Tidak', 'Ya'].map(opt => (
              <button
                key={opt}
                onClick={() => setExercised(opt === 'Ya')}
                className={`text-xs px-3 py-1 rounded-full border transition-colors
                  ${(opt === 'Ya' && exercised) || (opt === 'Tidak' && !exercised)
                    ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                    : 'border-gray-600 text-gray-300'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className={`${s.btnPrimary} w-full text-center`}
        >
          Simpan Data
        </button>
      </div>
    </div>
  )
}

export default DailyCheckInModal