# Eurocert - Anti-Bribery & Corruption Audit Platform

A comprehensive web application for conducting anti-bribery and corruption audits, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Comprehensive Risk Assessment Forms** - Detailed anti-bribery compliance evaluation
- **Interactive UI Components** - Modern, responsive design with animations
- **Google Sheets Integration** - Automatic form data collection and storage
- **Email Notifications** - Instant alerts for new submissions
- **Multi-page Navigation** - Dedicated risk assessment guide and consultation forms
- **Mobile Responsive** - Optimized for all device sizes

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Backend**: Google Apps Script
- **Data Storage**: Google Sheets

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google account for Google Apps Script and Sheets

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditimehra0298/antibribery.git
   cd antibribery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with logo
│   ├── Hero.tsx            # Main landing section with forms
│   ├── Services.tsx        # Service offerings
│   ├── Process.tsx         # Step-by-step process
│   ├── WhyChoose.tsx       # Company benefits and features
│   ├── RiskAssessment.tsx  # Risk assessment overview
│   ├── Contact.tsx         # Contact information
│   ├── Footer.tsx          # Footer with company info
│   ├── RiskAssessmentForm.tsx    # Comprehensive audit form
│   ├── RiskAssessmentPage.tsx    # Detailed assessment guide
│   └── ConsultationForm.tsx      # Consultation request form
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and animations

public/
├── image (3).png          # Company logo
└── [Video files excluded from Git due to size]
```

## 📹 Media Files Note
Large video files are excluded from Git due to GitHub's 100MB file size limit. 
The Hero section video should be placed in the `public/` folder and referenced as:
`/invideo-anti-bribery-compliance.mp4`

## 🔧 Configuration

### Google Apps Script Setup

1. Create a new Google Apps Script project
2. Copy the provided script code
3. Deploy as a web app
4. Update the script URL in your forms

### Google Sheets Setup

- Create a new Google Sheet
- The script will automatically create a "Form Submissions" sheet
- All form data will be stored with proper headers

## 📱 Key Components

### Hero Section
- Background video with overlay
- Warning badge for anti-bribery awareness
- Risk assessment form modal
- Floating WhatsApp and phone buttons

### Risk Assessment Form
- 9 comprehensive sections covering all compliance areas
- Company information, governance, financial controls
- Risk management and additional concerns
- Automatic Google Sheets integration

### Process Section
- Step-by-step consultation process
- Embedded consultation form
- Professional workflow presentation

## 🎨 Styling Features

- **Gradient Text Effects** - Eurocert branding with blue-purple-pink gradients
- **Smooth Animations** - Fade-in, scale, and hover effects
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Elements** - Hover states and touch-friendly interactions

## 📊 Form Integration

All forms automatically:
- Submit data to Google Sheets
- Send email notifications to `aditimehra0298@gmail.com`
- Display success/error messages
- Show thank you pages after submission

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`

## 📞 Contact

- **Email**: bdm@eurocert.in
- **Phone**: +91-9779665056
- **WhatsApp**: +91-9056742781

## 📄 License

© 2024 Eurocert. All rights reserved. | ISO 37001 Certified | Globally Accredited

## 🤝 Contributing

This project is maintained by Eurocert for anti-bribery and corruption audit services.

---

**Protect your business reputation with Eurocert's comprehensive anti-bribery solutions.** 