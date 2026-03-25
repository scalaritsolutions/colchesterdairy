---
description: How to run the Colchester Dairy POC (Frontend & Backend)
---

### 1. Start the Frontend (React/Vite)
Open a new terminal tab and run:
```bash
cd /Users/raghuvir/Desktop/anti_gravity/Dairy
npm run dev
```
*The app will be available at [http://localhost:5173](http://localhost:5173)*

### 2. Start the Backend (Python/FastAPI)
Open a **second** terminal tab and run:
```bash
cd /Users/raghuvir/Desktop/anti_gravity/Dairy/backend
source venv/bin/activate
uvicorn main:app --reload --port 8000
```
*The API docs will be available at [http://localhost:8000/docs](http://localhost:8000/docs)*

### 3. View the Mobile Demo
Once the frontend is running, you can:
- Click the **"Preview Mobile App"** button in the sidebar.
- Or go directly to [http://localhost:5173/mobile-demo](http://localhost:5173/mobile-demo).

### 4. Deploy to GitHub Pages (Optional)
To push your current build to GitHub:
```bash
cd /Users/raghuvir/Desktop/anti_gravity/Dairy
npm run deploy
```
