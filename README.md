# Task 28 - React Props (MERN Stack)

## Project Files
- `index.html` - Main HTML file
- `style.css` - All styling including gradient borders
- `app.js` - React components with Props
- `README.md` - Documentation

## How to Run
1. Save all 4 files in the same folder
2. Open `index.html` in your browser
3. View 12 cards with gradient borders


## Features Implemented
### ✅ Main Requirements
1. **Reusable Card Component** - Single Card component used 12 times
2. **Props Implementation** - Data passed via props from array
3. **Gradient Border** - Each card has gradient border on hover

### ✅ Additional Features
- Each card has: Title, Description, Card Number, Icon
- Click "Watch Video" button on any card
- Click video section to play tutorial
- Responsive grid layout
- Smooth hover animations

## How Props are Used

### Card Component (Reusable)
```javascript
function Card({ title, description, cardNumber, icon }) {
    // Component using props
}