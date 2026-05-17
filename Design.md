# PERISAI — Design System

Dokumentasi design system, komponen UI, dan panduan styling untuk project PERISAI.


## Color Palette

| Nama | Hex | Penggunaan |
|------|-----|------------|
| Primary | `#0F172A` | Teks utama, background dark (modal) |
| Secondary | `#3B82F6` | Aksen utama, tombol, active state, border focus |
| Tertiary | `#10B981` | Warna hijau (logo icon shield) |
| Neutral | `#64748B` | Teks sekunder, placeholder, icon |
| Background | `#E5E7EB` | Background halaman utama |
| Surface | `#FFFFFF` | Background card, navbar, sidebar |
| Dark Surface | `#1E293B` | Background elemen dalam modal dark |

---

## Typography

Font menggunakan default system font dari Tailwind CSS.

| Elemen | Class Tailwind |
|--------|---------------|
| Page title | `text-3xl font-bold text-[#0F172A]` |
| Page subtitle | `text-[#64748B] mt-1` |
| Section title | `text-lg font-semibold text-[#0F172A]` |
| Body text | `text-sm text-[#0F172A]` |
| Muted text | `text-sm text-[#64748B]` |
| Label | `text-xs font-semibold text-[#64748B] uppercase tracking-wider` |

---

## Komponen

### Navbar

- Height: `h-16` (64px), fixed di atas
- Background: putih dengan border bawah `border-gray-200`
- Kiri: burger menu icon + logo teks PERISAI
- Kanan (belum login): tombol "Sign In" (ghost) + tombol "Log In" (filled blue) + icon user
- Kanan (sudah login): "Hi, {name}" + tombol "Logout" + icon user + icon settings

### Sidebar

- Width: `w-64` (256px), slide dari kiri
- Toggle dengan burger menu di Navbar
- Background: putih dengan border kanan `border-gray-200`
- Logo icon shield di atas
- Nav items dengan icon + label
- Active state: `border-l-4 border-[#3B82F6] bg-blue-50 text-[#3B82F6]`
- Inactive state: `hover:bg-gray-100 text-[#0F172A]`
- Divider sebelum Help dan Privacy

### Card

```
bg-white rounded-2xl border border-gray-200 shadow-sm p-4
```

### Tombol Primary

```
bg-[#3B82F6] text-white font-medium px-5 py-2 rounded-xl hover:bg-blue-600 transition-colors
```

### Tombol Secondary

```
bg-gray-100 hover:bg-gray-200 text-[#0F172A] font-medium px-4 py-2 rounded-xl transition-colors
```

### Tombol Ghost

```
text-[#64748B] hover:text-[#0F172A] transition-colors
```

### Input Field

- Border: `border border-gray-300 rounded-xl`
- Focus: `focus-within:border-[#3B82F6]`
- Label: di atas field, warna `text-[#3B82F6] text-sm font-medium`
- Icon: di dalam field, sebelah kiri
- Padding: `px-4 py-3`

### Toggle Button (Yes/No, Tidak/Ya)

- Active: `bg-[#3B82F6] text-white border-[#3B82F6]`
- Inactive: `border-gray-300 text-[#0F172A]`
- Shape: `rounded-full`

### Chip / Tag (food selector)

- Active: `bg-[#3B82F6] text-white border-[#3B82F6]`
- Inactive: `bg-white text-[#0F172A] border-gray-300 hover:border-[#3B82F6]`
- Shape: `rounded-full px-4 py-1.5 text-sm border`

### Progress Bar

```
<!-- Track -->
<div class="w-full bg-gray-200 rounded-full h-2">
  <!-- Fill -->
  <div class="bg-[#3B82F6] h-2 rounded-full" style="width: {percent}%"></div>
</div>
```

---

## Halaman

### AI Chat (`/chat`)

- Background: `#E5E7EB`
- Chat area: flex-1, overflow-y-auto, padding `p-6`
- Input box: fixed di bawah, max-width `max-w-2xl`, centered
- Input box style: `bg-white rounded-2xl shadow-sm border border-gray-200 p-4`
- Tombol send: secondary style + icon `LuSendHorizontal`
- Tombol add file: ghost style + icon `IoAddOutline`

### Habit Log (`/habit-log`)

- Layout: 2 kolom grid `grid grid-cols-2 gap-4`
- Date navigator: card kecil dengan chevron kiri/kanan, max-width `max-w-sm`
- 4 card section:
  1. Daily Nutrition — meal counter + food chip selector
  2. Physical Activity — yes/no toggle + intensity toggle + steps progress bar
  3. Sleep Quality — angka jam + bar chart (Recharts)
  4. Stress Level — skala 1-5 tombol bulat

### Login (`/login`)

- Background: `#E5E7EB`
- Card: `bg-white rounded-3xl shadow-sm w-full max-w-sm p-8`, centered
- Logo shield di atas
- Judul "Welcome" biru besar
- Form: email + password dengan label biru di atas
- Divider OR
- Social login: Google, Facebook, Apple (icon dalam kotak biru muda)

### Daily Check-In Modal

- Overlay: `bg-black/40`
- Card: `bg-[#0F172A]` (dark navy), `rounded-2xl w-full max-w-sm`
- Section header: uppercase, tracking-wider, `text-gray-400`
- Row item: `bg-[#1E293B] rounded-xl px-4 py-3`
- Tombol simpan: primary full-width

---

## Assets

| File | Lokasi | Dipakai di |
|------|--------|-----------|
| `LogoPerisai.png` | `src/assets/` | Navbar (logo teks) |
| `Perisai.png` | `src/assets/` | Sidebar (icon shield), Login page |

---

## Icons

Menggunakan library `react-icons`. Package yang dipakai:

| Package | Import | Dipakai untuk |
|---------|--------|---------------|
| `react-icons/rx` | `RxHamburgerMenu` | Burger menu Navbar |
| `react-icons/io5` | `IoPersonCircleOutline`, `IoSettingsOutline`, `IoChatbubblesOutline`, `IoDocumentTextOutline`, `IoShieldOutline`, `IoHelpCircleOutline`, `IoAddOutline`, `IoChevronBackOutline`, `IoChevronForwardOutline`, `IoEyeOutline`, `IoEyeOffOutline` | Berbagai icon UI |
| `react-icons/ri` | `RiBarChartLine` | Risk Profile icon |
| `react-icons/md` | `MdOutlineMonitorHeart`, `MdOutlineEmail`, `MdLockOutline` | Habit Log, Login form |
| `react-icons/fc` | `FcGoogle` | Google login button |
| `react-icons/fa` | `FaFacebook`, `FaApple` | Social login buttons |
| `react-icons/lu` | `LuSendHorizontal` | Send message button |

---

## Layout System

```
┌─────────────────────────────────────────┐
│              Navbar (h-16, fixed)        │
├──────────┬──────────────────────────────┤
│          │                              │
│ Sidebar  │      Main Content            │
│ (w-64)   │      (pt-16)                 │
│ (fixed)  │                              │
│          │                              │
└──────────┴──────────────────────────────┘
```

- Navbar: `fixed top-0 left-0 right-0 z-50 h-16`
- Sidebar: `fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-40`
- Main: `pt-16 ml-64` (saat sidebar open) atau `pt-16 ml-0` (saat sidebar tertutup)
- Sidebar toggle dengan `transition-transform duration-300 translate-x-0 / -translate-x-full`

---

## Panduan Styling

1. **Jangan tulis class panjang berulang** simpan di `src/styles/common.js` sebagai object `s`
2. **Gunakan warna dari palette** selalu pakai hex yang sudah didefinisikan, jangan pakai warna Tailwind default kecuali untuk gray
3. **Rounded konsisten** card pakai `rounded-2xl`, input pakai `rounded-xl`, chip pakai `rounded-full`, tombol utama pakai `rounded-xl`
4. **Transition** selalu tambah `transition-colors` untuk hover state
5. **Icon size** navbar icon `size={24-28}`, form icon `size={18}`, nav sidebar `size={24}`