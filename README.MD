# Orges Portfolio

A responsive personal portfolio website built with **React + Vite**.  
Includes multi-language support (via Context) and a working **Contact form** powered by a **Node/Express backend** that sends messages directly to my email.

## Features
- Responsive UI (Bootstrap layout + custom CSS)
- Sections: Hero, About, Skills, Projects, Contact, Footer
- Multi-language support (English / Deutsch / Shqip) using `LanguageContext`
- Contact form with validation and real email delivery
- Social links (GitHub / LinkedIn / Email), click-to-call phone link

## Tech Stack
### Frontend
- React (Vite)
- Bootstrap
- lucide-react (icons)
- Context API (translations / language switching)

### Backend
- Node.js + Express
- Nodemailer (SMTP email sending)
- dotenv (environment variables)
- cors, helmet, express-rate-limit (basic security)

## Project Structure
```txt
project/
  src/
    components/
    contexts/
    assets/
    style/
  public/
  server/
    index.js
    .env  (local only)
