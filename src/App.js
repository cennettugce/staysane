import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [headerText, setHeaderText] = useState(['Click the Button']);
    const [showKitten, setShowKitten] = useState(false);
    const [pleaseCount, setPleaseCount] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [isCat, setIsCat] = useState(true);

    const handleClick = () => {
        setBackgroundColor('#C8A2C8'); // Lilac color
        setShowConfetti(true);
        setShowKitten(true);
        setPleaseCount(prevCount => prevCount + 1);
        const newText = 'Please '.repeat(pleaseCount) + 'Send Nudes';
        setHeaderText(newText);
        setButtonClicked(true);
    };

    const handleImageClick = () => {
        setIsCat(!isCat); // Toggle between cat and dog
    };

    return (
        <div className="App" style={{ backgroundColor: backgroundColor }}>
            <header className="App-header">
                <h1>{headerText}</h1>
                {showConfetti && <Confetti />}
                {showKitten && (
                    <img
                        src={isCat ? "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" : "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2hwenV0Ym5sanZtenYwazVsYnd6ZTE0YzhhbmdpbWluMWp6eHRhdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehVD71SQYsCHWrWgvs/giphy.gif"}
                        alt={isCat ? "Begging Kitten" : "Excited Dog"}
                        style={{ marginTop: '20px', width: '300px', height: 'auto', cursor: 'pointer' }}
                        onClick={handleImageClick}
                    />
                )}
                <div style={{ marginTop: '20px' }}>
                {buttonClicked && (
                    <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Click me
                    </button>
                )}
                {!buttonClicked && (
                    <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Click me
                    </button>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
