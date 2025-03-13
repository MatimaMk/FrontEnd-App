
## 📌 Overview
DietCoach is a **personal trainer platform** built with **Next.js and TypeScript (NextTS)**. It enables personal trainers to **manage clients, meal plans, and food items**, while clients can **view their assigned meal plans**.
---
## 📖 User Roles and Functionality

### **Trainer**
- Register and log in.
- Create, manage, and delete clients.
- Create, manage meal plans.
- Create, manage,food items.
- View clients, meal plans, and food items.

### **Client**
- Register (after being added by a trainer).
- Log in.
- View assigned meal plans.
---

## 📌 Project Flow

1. **Authentication**
   - Trainer registration and login.
   - Client registration and login.

2. **Trainer Features**
   - Add, manage, and remove clients.
   - Create, update, and delete meal plans.
   - Create, update, and delete food items.
   - View and edit clients, meal plans, and food items.

3. **Client Features**
   - View assigned meal plans.

---

## 📌 API Endpoints used

**Base URL:**  
`https://body-vault-server-b9ede5286d4c.herokuapp.com`

### **Authentication**
- **Register a Trainer:**  
  `POST /api/users/register`
- **Trainer Login:**  
  `POST /api/users/login`
- **Get Current User:**  
  `GET /api/users/current`

### **Client Management**
- **Create a Client:**  
  `POST /api/client`
- **Client Registration (Mobile):**  
  `POST /api/users/register/mobile`
- **Client Login:**  
  `POST /api/users/login`

### **Food Item Management**
- **Get all food items:**  
  `GET /api/food`
- **Get food items by Category:**  
  `GET /api/food/category/<category>`
- **Available categories:**  
  `veg, meat, dairy, fruit, bnl, grains`
- **Get food items by search term:**  
  `GET /api/food/search/<search_term>`
- **Create a Food Item:**  
  `POST /api/fooditems`

### **Meal Plan Management**
- **Create a Meal Plan:**  
  `POST /api/mealplan`
- **Get Trainer's Meal Plans:**  
  `GET /api/mealplan/trainer/<trainer_id>`
- **Get Client's Meal Plans:**  
  `GET /api/mealplan/client/<client_id>`
- **Get Meal Plan by ID:**  
  `GET /api/mealplan/<plan_id>`

--
## 🚀 Running the Application

### **Frontend Setup**
npm install
npm run dev

### **Production Build**
npm run build
npm start

## Deployment on Vercel
Url https://front-end-app-nine.vercel.app/
