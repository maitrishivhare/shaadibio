# 💍 ShaadiBio — Marriage Biodata Generator

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-pink?style=for-the-badge)](https://maitrishivhare.github.io/shaadibio/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> A modern, elegant web application to create beautiful marriage biodatas in minutes.

---

## 🌐 Live Demo
**[https://maitrishivhare.github.io/shaadibio/](https://maitrishivhare.github.io/shaadibio/)**

---

## ✨ Features

### Core Features
- 📝 *Step-by-step Biodata Builder* — 6 easy steps to create your biodata
- 👤 *Personal Details* — Name, Gender, DOB with auto age calculation, Height, Religion, Caste, Mother Tongue, Marital Status, Nationality
- 👨‍👩‍👧 *Family Details* — Parents, Siblings, Family Type, Status, Native Place
- 🎓 *Education & Profession* — Education, College, Profession, Company, Income
- 🔮 *Horoscope Details* — Rashi, Nakshatra, Gotra, Manglik, Time & Place of Birth
- 📷 *Photo Upload* — with crop and resize functionality (3:4 ratio)
- 📄 *PDF Download* — Download your biodata as a professional PDF

### Templates
- 🌸 *Modern* — Pink gradient, clean & contemporary layout
- 🕌 *Mughal Arch* — Royal dark blue & gold, traditional arch design
- 📜 *Traditional* — Classic maroon & cream with floral corners

### Customization
- 🎨 *Accent Color* — 8 preset colors + custom color picker
- 🔤 *Font Styles* — Serif, Modern, Fancy
- 🔒 *Privacy Controls* — Hide contact number and/or income

### Authentication
- 🔐 *User Registration & Login*
- 👻 *Guest Mode* — Try before registering
- 💧 *Watermark* — Guest biodatas have watermark, removed for registered users

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| React 18 | Frontend framework |
| Vite | Build tool |
| React Router DOM | Navigation |
| html2pdf.js | PDF generation |
| react-image-crop | Photo cropping |
| CSS3 | Styling & animations |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation
bash
# Clone the repository
git clone https://github.com/maitrishivhare/shaadibio.git

# Navigate to project
cd shaadibio

# Install dependencies
npm install

# Start development server
npm run dev


Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
bash
npm run build


---

## 📁 Project Structure

shaadibio/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Login.jsx         # Login page
│   │   ├── Register.jsx      # Registration page
│   │   └── Dashboard.jsx     # Main biodata builder
│   ├── components/
│   │   ├── Forms/
│   │   │   ├── PersonalDetails.jsx
│   │   │   ├── FamilyDetails.jsx
│   │   │   ├── EducationDetails.jsx
│   │   │   ├── HoroscopeDetails.jsx
│   │   │   └── PhotoUpload.jsx
│   │   ├── Preview/
│   │   │   └── BiodataPreview.jsx
│   │   └── Templates/
│   │       ├── Template1.jsx       # Modern
│   │       ├── Template2.jsx       # Mughal Arch
│   │       └── TraditionalTemplate.jsx
│   ├── styles/
│   │   ├── home.css
│   │   ├── dashboard.css
│   │   ├── login.css
│   │   ├── register.css
│   │   ├── modern.css
│   │   ├── mughal.css
│   │   └── template.css
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json


---


### Home Page
> Modern pink & white landing page with template previews

### Dashboard — Biodata Builder
> Step-by-step form with live template preview

### Templates
| Modern | Mughal Arch | Traditional |
|--------|-------------|-------------|
| Pink gradient | Dark blue & gold | Maroon & cream |

---

## 👩‍💻 Developer

*Maitri Shivhare*
- GitHub: [@maitrishivhare](https://github.com/maitrishivhare)
- Project: Frontend Developer Internship — Round 2 Task

---

## 📄 License

This project is built as part of an internship assignment.

---

<div align="center">
  Made with ❤️ by Maitri Shivhare
</div>
