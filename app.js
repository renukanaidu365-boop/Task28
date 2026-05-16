// Task 28 - Learning React Props
// I wrote this to understand how props work

// My card data - Card 1 to Card 12
// I wrote these descriptions myself based on what I learned
const cardsData = [
    {
        id: 1,
        cardNumber: 1,
        title: "Card 1",
        description: "This card explains what props are. Props help us send data from parent to child components in React.",
        icon: "fas fa-code"
    },
    {
        id: 2,
        cardNumber: 2,
        title: "Card 2",
        description: "I learned that props are read-only. We cannot change them inside the child component. Only parent can change props.",
        icon: "fas fa-book"
    },
    {
        id: 3,
        cardNumber: 3,
        title: "Card 3",
        description: "We can pass any type of data as props - strings, numbers, arrays, objects, and even functions.",
        icon: "fas fa-database"
    },
    {
        id: 4,
        cardNumber: 4,
        title: "Card 4",
        description: "Props make components reusable. The same Card component can show different content because of props.",
        icon: "fas fa-recycle"
    },
    {
        id: 5,
        cardNumber: 5,
        title: "Card 5",
        description: "I was confused at first but now I understand: props = properties passed to components like arguments to functions.",
        icon: "fas fa-question-circle"
    },
    {
        id: 6,
        cardNumber: 6,
        title: "Card 6",
        description: "To use props, we add them as attributes like <Card title='Hello' description='World' />",
        icon: "fas fa-tag"
    },
    {
        id: 7,
        cardNumber: 7,
        title: "Card 7",
        description: "Inside the component, we access props as function parameters. Example: function Card({title, description})",
        icon: "fas fa-arrow-right"
    },
    {
        id: 8,
        cardNumber: 8,
        title: "Card 8",
        description: "I practiced by making this card component. Each card gets different title, description, and icon from props.",
        icon: "fas fa-practice"
    },
    {
        id: 9,
        cardNumber: 9,
        title: "Card 9",
        description: "Props help with one-way data flow. Data goes from parent to child, not the other way around.",
        icon: "fas fa-arrow-down"
    },
    {
        id: 10,
        cardNumber: 10,
        title: "Card 10",
        description: "Without props, I would have to make separate components for each card. That's inefficient and repeats code.",
        icon: "fas fa-times-circle"
    },
    {
        id: 11,
        cardNumber: 11,
        title: "Card 11",
        description: "I used map() to loop through my cardsData array and create multiple cards from one Card component.",
        icon: "fas fa-map"
    },
    {
        id: 12,
        cardNumber: 12,
        title: "Card 12",
        description: "Next I want to learn about PropTypes to validate props and defaultProps for fallback values when props missing.",
        icon: "fas fa-star"
    }
];

// This is my reusable card component
// It receives props: title, description, icon, cardNumber
function Card({ title, description, icon, cardNumber }) {
    return (
        <div className="card">
            <div className="card-icon">
                <i className={icon}></i>
            </div>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <div className="card-footer">
                <span className="card-number">Card {cardNumber}</span>
                <button className="watch-btn" onClick={() => alert(`Playing video for ${title}`)}>
                    <i className="fas fa-play"></i> Watch
                </button>
            </div>
        </div>
    );
}

// Main App component
function App() {
    return (
        <div className="container">
            {/* Header */}
            <div className="header">
                <h1>Learning React Props</h1>
                <p>I made 12 cards using one reusable component and props</p>
                <p>Cards 1 to 12 - Each card teaches something about props</p>
            </div>

            {/* Cards Grid - using map() to loop through data */}
            <div className="cards-grid">
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        cardNumber={card.cardNumber}
                    />
                ))}
            </div>

            {/* Video Section */}
            <div className="video-section" onClick={() => alert("Video would play here explaining React Props")}>
                <i className="fas fa-play-circle"></i>
                <h3>Click to Watch Tutorial</h3>
                <p>Click the image above to watch the video and understand Props</p>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>Task 28 - React Props | Cards 1 to 12 | I built this to learn</p>
            </div>
        </div>
    );
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(<App />);