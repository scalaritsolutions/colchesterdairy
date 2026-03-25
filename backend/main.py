from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import datetime

app = FastAPI(title="Colchester Dairy Digital OS")

# Allow CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock Data
products = [
    {"id": 1, "name": "Semi-Skimmed Milk (1Pt)", "price": 0.80, "icon": "🥛", "category": "Dairy"},
    {"id": 2, "name": "Whole Milk (1Pt)", "price": 0.85, "icon": "🐄", "category": "Dairy"},
    {"id": 3, "name": "Sourdough Loaf", "price": 3.20, "icon": "🍞", "category": "Bakery"},
    {"id": 4, "name": "Free Range Eggs (6)", "price": 2.10, "icon": "🥚", "category": "Dairy"},
    {"id": 5, "name": "Clotted Cream", "price": 2.50, "icon": "🧈", "category": "Dairy"},
]

rounds = {
    "units": 2450,
    "late_additions": 42,
    "customers": 840,
    "breakdown": [
        {"name": "Semi-Skimmed Milk (1Pt)", "standing": 1850, "topup": 20},
        {"name": "Whole Milk (1Pt)", "standing": 400, "topup": 5},
        {"name": "Large Eggs (6)", "standing": 120, "topup": 15},
        {"name": "Sourdough Loaf", "standing": 45, "topup": 12},
    ]
}

class LateChange(BaseModel):
    user_id: str
    product_id: int
    quantity: int
    delivery_date: str

@app.get("/api/products")
async def get_products():
    return products

@app.get("/api/rounds")
async def get_rounds():
    return rounds

@app.post("/api/late-change")
async def apply_late_change(change: LateChange):
    # Simulate inventory check and round update
    if change.product_id > len(products) or change.product_id < 1:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Logic: If it's after 10 PM and for tomorrow, we update the "Live Round Book"
    current_price = float(products[change.product_id-1]['price'])
    return {
        "status": "success",
        "message": f"Added {change.quantity}x {products[change.product_id-1]['name']} to your delivery for {change.delivery_date}.",
        "updated_total": 12.40 + (current_price * float(change.quantity))
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
