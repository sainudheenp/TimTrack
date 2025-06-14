# TimTrack

<a href="https://wakatime.com/badge/user/bd956d12-1142-4657-aee2-95795d5761d9/project/ee2a2029-b023-495a-80f5-7a8d53474cd5"><img src="https://wakatime.com/badge/user/bd956d12-1142-4657-aee2-95795d5761d9/project/ee2a2029-b023-495a-80f5-7a8d53474cd5.svg" alt="wakatime"></a>

TimTrack is a modern time-tracking and productivity dashboard for individuals and teams. Track your activities, manage todos, analyze your productivity, and collaborate efficiently.

---

## Features

- ⏱️ Activity Timer with customizable intervals
- ✅ Todo management (create, update, delete)
- 📅 Weekly and Daily activity view
- 📊 Analytics dashboard (recent activities, stats, trends)
- 👥 Team Analytics and member management
- 🔒 Secure authentication (Firebase)
<!-- - 🌙 Dark mode support -->
- 📈 Exportable productivity reports

---

## Tech Stack

### Frontend

- **React** (with Vite)
- **Tailwind CSS** (utility-first styling)
- **React Query** (TanStack Query) for data fetching/caching
- **Zustand** for state management
- **Material UI (MUI)** for UI components
- **React Router** for routing
- **React Toastify** for notifications

### Backend

- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **Firebase Admin SDK** for authentication
- **JWT** for secure API access
- **CORS** for cross-origin requests

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Firebase project for authentication

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/timtrack.git
cd timtrack
```

#### 2. Backend Setup

```bash
cd server
npm install
# Configure your .env file (see .env.example)
npm start
```

#### 3. Frontend Setup

```bash
cd ../client
npm install
# Configure your .env.development file (see .env.example)
npm run dev
```

---

## Folder Structure

```
client/
  src/
    components/
    pages/
    api/
    hooks/
    store/
    context/
    layouts/
server/
  controllers/
  models/
  routes/
  middlewares/
  utils/
```

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [MongoDB](https://www.mongodb.com/)

