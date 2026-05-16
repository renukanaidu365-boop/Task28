# Task 28 - React Props

## Assignment: Learning React Props with Reusable Components
---

## WHAT I LEARNED ABOUT PROPS

Before this task, I didn't know what props meant in React. Now I understand.

**Props = Properties** that we pass from a parent component to a child component.

### How I explain props in my own words:

Props are like arguments you pass to a function. When I call a function, I pass data to it. When I use a React component, I pass props to it. The component receives those props and uses them to show different content.

### Simple example I understand:

```javascript
// This is the child component - it receives props
function Card({ title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

// This is the parent - it sends props
<Card title="Card 1" description="This is my first card" />