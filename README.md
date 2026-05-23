# javascript-webapp

A full stack web application built during an internship at AQUAsoft, implementing a database administrator interface for managing employees and projects. Built incrementally across 5 tasks, from learning JavaScript fundamentals to a complete authenticated CRUD app.

---

## Features

### Authentication
- Register with username, password, repeat password, and email — with validation (email regex, password match, unique username check)
- Login with bcrypt password verification — issues a JWT stored as an `httpOnly` cookie (24h expiry)
- Protected routes — unauthenticated users redirected to login on both frontend and backend
- Navbar hidden on login/register pages

### Employees
- Full CRUD: list all, add, inline edit, delete
- Inline editable table rows — click Edit to turn a row into an editable form, Save or Cancel
- FK validation — employee's `project_id` must reference an existing project (or be null)
- Input validation: email regex, hire date format and leap year check, hire date cannot be in the future, required fields

### Projects
- Full CRUD: list all, add, inline edit, delete
- Input validation: date format, leap year, start date must be before end date, required fields

### Backend validation details
- Date validation implemented from scratch — regex pattern check, month range, day range per month, leap year adjustment
- All validation done server-side (not just frontend)

---

## Tech Stack

### Backend
| Layer | Technology |
|---|---|
| Language | JavaScript (Node.js) |
| Framework | Express |
| ORM | Sequelize |
| Database | MySQL |
| Auth | JWT (`jsonwebtoken`), bcrypt, httpOnly cookies |

### Frontend
| Layer | Technology |
|---|---|
| Language | JavaScript (React) |
| Routing | React Router v5 |
| HTTP | Axios |
| State | React hooks (useState, useEffect) |

---

## How to run

**Backend:**
```bash
cd server
npm install
node index.js
```

**Frontend:**
```bash
cd client
npm install
npm start
```

MySQL database must be running locally on port 3306. Configure credentials in `server/config/config.js`.

---

## Context

Built across 5 incremental tasks during an AQUAsoft internship:
1. JavaScript fundamentals (ES6, async/await, closures, Promises)
2. Express + MySQL + Sequelize REST API for Employees
3. Added Projects table with FK relationship
4. React frontend with inline editable tables
5. Authentication (Accounts table, JWT, protected routes)
