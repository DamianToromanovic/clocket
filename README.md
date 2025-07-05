# Clocket

**Fullstack time tracking and invoice generator – built for freelancers and small businesses.**  
Includes PDF export, client/project management, and a modern tech stack (Next.js, Express, Prisma).

---

## 🚀 Features

- ⏱️ Time tracking per project and client
- 📁 Project and client management
- 📄 Invoice generation (PDF via microservice)
- 🧮 Automatic calculation of working hours and totals
- 🔐 Ready for future user authentication and roles

---

## 🧱 Tech Stack

| Layer      | Tech                          |
|------------|-------------------------------|
| Frontend   | Next.js (App Router), TypeScript, Tailwind, shadcn/ui |
| Backend    | Express.js, TypeScript, Prisma, PostgreSQL |
| PDF Export | HTML-to-PDF Microservice (Puppeteer) |

---

## 📂 Monorepo Structure

```
clocket/
├── frontend/       # Next.js app (UI, forms, dashboard)
├── backend/        # Express API with Prisma & PostgreSQL
├── pdf-service/    # Microservice for HTML-to-PDF generation
