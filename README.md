# PERISAI — Prediksi Risiko PTM dengan AI

Team ID: CC26-PSU203 | Tema: Healthy Lives and Well Being

Aplikasi web berbasis AI untuk deteksi dini risiko Penyakit Tidak Menular (PTM) — diabetes, hipertensi, dan kolesterol — berdasarkan data gaya hidup harian pengguna.

---

## Struktur Monorepo

```
Perisai/
├── Frontend/        → React app (Vite + Tailwind CSS)
├── Backend/         → REST API server (Express.js + PostgreSQL)
└── ml-service/      → ML inference service (FastAPI) — dikerjakan tim AI Engineer
```

---

## Frontend

**Tech stack:** React 18 + Vite 5 + Tailwind CSS + Axios + React Router DOM + Recharts + React Icons

### Menjalankan Frontend

```bash
cd Frontend
npm install
npm run dev
# Buka http://localhost:5173
```

### Environment Variables

Buat file `.env` di folder `Frontend/`:

```
VITE_API_URL=http://localhost:5000
```

### Struktur Folder Frontend

```
Frontend/
├── public/
│   ├── favicon.svg          → favicon browser
│   └── icons.svg            → sprite icons
├── src/
│   ├── assets/
│   │   ├── LogoPerisai.png  → logo teks "PERISAI" (dipakai di Navbar)
│   │   └── Perisai.png      → logo ikon shield (dipakai di Sidebar)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        → navbar fixed di atas, berisi burger menu, logo, tombol Sign In/Log In atau icon user+settings jika sudah login
│   │   │   ├── Sidebar.jsx       → sidebar slide-in dari kiri, berisi navigasi utama (AI Chat, Risk Profile, Habit Log, Medical Records) dan bawah (Help, Privacy), active state dengan left border biru
│   │   │   └── MainLayout.jsx    → wrapper utama yang menggabungkan Navbar + Sidebar + Outlet (konten halaman), mengatur state sidebarOpen dan isLoggedIn
│   │   │
│   │   └── ui/
│   │       └── DailyCheckInModal.jsx  → pop-up modal dark theme yang muncul setiap hari baru, berisi form: jumlah makan, rokok (+ jumlah batang jika Ya), alkohol, tingkat stres (1-5), olahraga. Data disimpan ke localStorage.
│   │
│   ├── pages/
│   │   ├── AIChatPage.jsx      → halaman utama, pertama kali dibuka user. Berisi chat interface (textarea + tombol send + tombol tambah file). Menampilkan DailyCheckInModal jika belum check-in hari ini (cek via localStorage key 'lastCheckin').
│   │   ├── HabitLogPage.jsx    → halaman log kebiasaan harian. Berisi date navigator (navigasi antar hari, tombol next disabled jika sudah hari ini) dan 4 card: Daily Nutrition, Physical Activity, Sleep Quality, Stress Level. Data saat ini masih dummy/state lokal, akan disambung ke API.
│   │   ├── RiskProfilePage.jsx → [BELUM DIBUAT] halaman profil risiko PTM, akan menampilkan skor risiko diabetes/hipertensi/kolesterol, grafik tren, dan penjelasan SHAP. Tinggal buat file + uncomment route di App.jsx.
│   │   └── MedicalRecordsPage.jsx → [BELUM DIBUAT] halaman riwayat medis pengguna. Tinggal buat file + uncomment route di App.jsx.
│   │
│   ├── services/
│   │   └── api.js       → Axios instance dengan baseURL dari VITE_API_URL. Semua API call ke backend harus melalui file ini, bukan Axios langsung.
│   │
│   ├── styles/
│   │   └── common.js    → konstanta class Tailwind yang dipakai berulang di seluruh app. Export object `s` berisi: card, pageWrapper, navItem, navActive, navInactive, btnPrimary, btnSecondary, btnGhost, pageTitle, pageSubtitle, sectionTitle, input.
│   │
│   ├── context/         → [BELUM DIISI] akan berisi AuthContext untuk state login user (isLoggedIn, user data, token)
│   ├── hooks/           → [BELUM DIISI] akan berisi custom hooks, contoh: useAuth(), useDailyLog()
│   ├── utils/           → [BELUM DIISI] akan berisi helper functions, contoh: formatDate(), calculateRiskScore()
│   │
│   ├── App.jsx          → definisi semua Routes. Saat ini aktif: / (redirect ke /chat), /chat, /habit-log. Sudah disiapkan (dicomment) untuk: /risk-profile, /medical-records.
│   ├── App.css          → kosong, styling pakai Tailwind semua
│   ├── index.css        → hanya berisi @import "tailwindcss"
│   └── main.jsx         → entry point React, membungkus App dengan StrictMode + BrowserRouter
│
├── .env                 → environment variables (tidak di-commit ke git)
├── .gitignore
├── eslint.config.js
├── index.html           → HTML template Vite
├── package.json         → dependencies: react, react-dom, react-router-dom, axios, recharts, react-icons. devDependencies: vite, @vitejs/plugin-react, tailwindcss, @tailwindcss/vite
├── package-lock.json
├── README.md
└── vite.config.js       → konfigurasi Vite: plugin react() + tailwindcss()
```

### Routing

| Path | Komponen | Status |
|------|----------|--------|
| `/` | redirect ke `/chat` | ✅ Aktif |
| `/chat` | AIChatPage | ✅ Aktif |
| `/habit-log` | HabitLogPage | ✅ Aktif |
| `/risk-profile` | RiskProfilePage | ⏳ Belum dibuat |
| `/medical-records` | MedicalRecordsPage | ⏳ Belum dibuat |
| `/help` | — | ⏳ Belum dibuat |
| `/privacy` | — | ⏳ Belum dibuat |

### Color Palette

| Nama | Hex | Dipakai untuk |
|------|-----|---------------|
| Primary | `#0F172A` | Teks utama, background dark |
| Secondary | `#3B82F6` | Warna aksen, tombol, active state |
| Tertiary | `#10B981` | Warna hijau (logo icon) |
| Neutral | `#64748B` | Teks sekunder, placeholder |

### Fitur yang Sudah Selesai

- [x] Navbar (logo, burger menu, Sign In/Log In button)
- [x] Sidebar (navigasi dengan active state left border)
- [x] Layout sistem (sidebar toggle, main content shift)
- [x] AI Chat page (chat input, textarea, send button)
- [x] Daily Check-In Modal (muncul sekali per hari, data ke localStorage)
- [x] Habit Log page (4 card: nutrition, activity, sleep, stress)
- [x] Date navigator di Habit Log

### Fitur yang Belum Selesai (Frontend)

- [ ] AuthContext dan sistem login/logout
- [ ] Sambungkan Habit Log ke API (saat ini data masih dummy)
- [ ] Sambungkan Daily Check-In ke API (saat ini ke localStorage)
- [ ] AI Chat — koneksi ke OpenAI/Gemini API via backend
- [ ] Risk Profile page
- [ ] Medical Records page
- [ ] History view di Habit Log (tampilkan data hari sebelumnya dari API)
- [ ] Responsive layout (mobile)

---

## Backend

**Tech stack:** Node.js + Express.js 5 + PostgreSQL (via `pg`) + dotenv + cors

### Menjalankan Backend

```bash
cd Backend
npm install
npm run dev
# Server berjalan di http://localhost:5000
```

### Environment Variables

Buat file `.env` di folder `Backend/`:

```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/perisai
NODE_ENV=development
```

Untuk production, `DATABASE_URL` diisi connection string dari Railway.

### Struktur Folder Backend

```
Backend/
├── src/
│   ├── config/
│   │   └── db.js          → koneksi PostgreSQL menggunakan Pool dari library `pg`. Membaca DATABASE_URL dari .env. SSL aktif hanya di production (untuk Railway).
│   │
│   ├── controllers/       → [BELUM DIISI] logic bisnis tiap route. Contoh yang akan dibuat: authController.js (register, login, logout), habitLogController.js (create, getByDate), predictionController.js (trigger ML service)
│   │
│   ├── middleware/
│   │   └── errorHandler.js → global error handler Express. Menangkap semua error yang di-next(err), mengembalikan JSON: { success: false, message: "..." } dengan status code yang sesuai.
│   │
│   ├── models/            → [BELUM DIISI] query SQL ke PostgreSQL. Contoh yang akan dibuat: User.js, HabitLog.js, Prediction.js
│   │
│   ├── routes/            → [BELUM DIISI] definisi endpoint RESTful. Contoh yang akan dibuat: auth.js (/api/auth/*), habitLog.js (/api/habit-log/*), prediction.js (/api/prediction/*)
│   │
│   └── server.js          → entry point Express. Setup: cors(), express.json(), health check route GET /, mount semua routes, global errorHandler. Listen di PORT dari .env.
│
├── .env                   → environment variables (tidak di-commit ke git)
├── package.json           → dependencies: express, cors, dotenv, pg. devDependencies: nodemon. Scripts: start (node), dev (nodemon).
└── package-lock.json
```

### API Endpoints (Rencana)

Semua endpoint mengikuti konvensi RESTful dengan prefix `/api`.

| Method | Endpoint | Fungsi | Status |
|--------|----------|--------|--------|
| GET | `/` | Health check | ✅ Selesai |
| POST | `/api/auth/register` | Registrasi user baru | ⏳ |
| POST | `/api/auth/login` | Login, return JWT token | ⏳ |
| GET | `/api/auth/me` | Get data user yang login | ⏳ |
| POST | `/api/habit-log` | Simpan log harian | ⏳ |
| GET | `/api/habit-log?date=YYYY-MM-DD` | Ambil log berdasarkan tanggal | ⏳ |
| GET | `/api/habit-log/history` | Ambil history log (min 3 hari) | ⏳ |
| POST | `/api/prediction/run` | Trigger prediksi risiko PTM | ⏳ |
| GET | `/api/prediction/latest` | Ambil hasil prediksi terbaru | ⏳ |

### Database Schema (Rencana)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Habit Logs (data harian)
CREATE TABLE habit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  date DATE NOT NULL,
  meals INT,
  food_types TEXT[],
  exercised BOOLEAN,
  exercise_intensity VARCHAR(10),
  daily_steps INT,
  sleep_hours FLOAT,
  stress_level INT,
  smokes BOOLEAN,
  smoke_count INT,
  alcohol BOOLEAN,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Predictions (hasil prediksi ML)
CREATE TABLE predictions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  predicted_at TIMESTAMP DEFAULT NOW(),
  diabetes_risk FLOAT,
  hypertension_risk FLOAT,
  cholesterol_risk FLOAT,
  shap_values JSONB,
  recommendation TEXT
);
```

---

## ML Service

**Dikerjakan oleh:** Theo Kawalisa Pinem & Atria Caesariano Tinto (AI Engineer)

**Tech stack:** FastAPI + TensorFlow/Keras + XGBoost + SHAP + Scikit-learn

### Struktur Folder (Rencana)

```
ml-service/
├── main.py              → FastAPI app, endpoint POST /predict
├── models/
│   ├── diabetes_model.h5
│   ├── hypertension_model.h5
│   └── cholesterol_model.h5
├── preprocessing.py     → feature engineering dari input harian ke format training
├── explainer.py         → SHAP values computation
└── requirements.txt     → fastapi, uvicorn, tensorflow, xgboost, shap, scikit-learn, pandas, numpy
```

### Endpoint ML Service

| Method | Endpoint | Fungsi |
|--------|----------|--------|
| POST | `/predict` | Terima aggregated habit data, return risk scores + SHAP values |

---

## Deployment

| Layer | Platform | URL (nanti diisi setelah deploy) |
|-------|----------|----------------------------------|
| Frontend | Vercel | — |
| Backend + DB | Railway | — |
| ML Service | Streamlit Community Cloud / Railway | — |

## Catatan Penting untuk Lanjutan

1. **AuthContext** — perlu dibuat di `src/context/AuthContext.jsx` sebelum fitur login bisa jalan. `isLoggedIn` di `MainLayout.jsx` saat ini masih hardcoded `false`.
2. **API Contract** — format request/response antara Frontend ↔ Backend ↔ ML Service perlu disepakati dan didokumentasikan bersama tim sebelum integrasi.
3. **localStorage → API** — data Daily Check-In saat ini masih disimpan ke localStorage. Setelah backend siap, `handleSubmit` di `AIChatPage.jsx` perlu diubah untuk POST ke `/api/habit-log`.
4. **Route yang dicomment** — `/risk-profile` dan `/medical-records` di `App.jsx` sudah disiapkan, tinggal uncomment dan buat page-nya.
5. **Habit Log history** — saat ini card data masih dummy (hardcoded). Perlu disambungkan ke API dengan parameter `date` dari date navigator.