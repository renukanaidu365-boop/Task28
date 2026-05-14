// Card Component - Reusable with Props
function Card({ title, description, cardNumber, icon }) {
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
                    <i className="fas fa-play"></i> Watch Video
                </button>
            </div>
        </div>
    );
}

// Main App Component
function App() {
    // Array of objects - Data for 12 cards
    const cardsData = [
        {
            id: 1,
            title: "Card 1",
            description: "This is card 1 description. Learn about React Props and how to pass data between components.",
            icon: "fab fa-react"
        },
        {
            id: 2,
            title: "Card 2",
            description: "This is card 2 description. Props allow components to be reusable with different data.",
            icon: "fas fa-code"
        },
        {
            id: 3,
            title: "Card 3",
            description: "This is card 3 description. Pass props like title, description, and more to components.",
            icon: "fas fa-cube"
        },
        {
            id: 4,
            title: "Card 4",
            description: "This is card 4 description. Props are read-only and help in component communication.",
            icon: "fas fa-exchange-alt"
        },
        {
            id: 5,
            title: "Card 5",
            description: "This is card 5 description. Use props to make your components dynamic and flexible.",
            icon: "fas fa-dynamic"
        },
        {
            id: 6,
            title: "Card 6",
            description: "This is card 6 description. Props drilling vs Context API for larger applications.",
            icon: "fas fa-tree"
        },
        {
            id: 7,
            title: "Card 7",
            description: "This is card 7 description. PropTypes help validate the props passed to components.",
            icon: "fas fa-check-circle"
        },
        {
            id: 8,
            title: "Card 8",
            description: "This is card 8 description. Default props provide fallback values when props aren't passed.",
            icon: "fas fa-download"
        },
        {
            id: 9,
            title: "Card 9",
            description: "This is card 9 description. Children props allow nesting content inside components.",
            icon: "fas fa-child"
        },
        {
            id: 10,
            title: "Card 10",
            description: "This is card 10 description. Props can be functions, arrays, objects, or any data type.",
            icon: "fas fa-database"
        },
        {
            id: 11,
            title: "Card 11",
            description: "This is card 11 description. Lifting state up using props and callback functions.",
            icon: "fas fa-arrow-up"
        },
        {
            id: 12,
            title: "Card 12",
            description: "This is card 12 description. Props vs State - when to use what in React applications.",
            icon: "fas fa-balance-scale"
        }
    ];

    return (
        <div>
            {/* Header */}
            <div className="header">
                <h1><i className="fab fa-react"></i> React Props - Card Component</h1>
                <p>Reusable card component with gradient border | Total 12 Cards</p>
            </div>

            {/* Cards Grid - Passing props to Card component */}
            <div className="cards-container">
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        cardNumber={card.id + 0}
                        icon={card.icon}
                    />
                ))}
            </div>

            {/* Video Section */}
            <div className="video-section">
                <h2><i className="fas fa-video"></i> Watch Tutorial</h2>
                <div 
                    className="video-placeholder"
                    onClick={() => alert("Video would play here! This demonstrates click handling.")}
                >
                    <i className="fas fa-play-circle"></i>
                    <p>Click the image above to watch the video on React Props</p>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>Task 28 - React Props | Reusable Card Component | Gradient Border Effect</p>
                <p style={{ marginTop: '10px', fontSize: '12px' }}>
                    <i className="fas fa-code"></i> Built with React and Props
                </p>
            </div>
        </div>
    );
}

// Render the App
ReactDOM.createRoot(document.getElementById('root')).render(<App />);