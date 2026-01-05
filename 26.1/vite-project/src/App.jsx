import {useState, useEffect} from 'react';
import './app.css';


function App() {
    const emojis = ['😀', '😎', '🎉', '🚀', '❤️', '🔥', '👍', '🎮'];
    const [votes, setVotes] = useState(() => {
        try {
            const saved = localStorage.getItem('votes');
            return saved ? JSON.parse(saved) : new Array(emojis.length).fill(0);
        } catch {
            return new Array(emojis.length).fill(0);
        }
    });
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const savedVotes = localStorage.getItem('votes');
        if (savedVotes) {
            setVotes(JSON.parse(savedVotes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(votes));
    }, [votes]);

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index]++;
        setVotes(newVotes);
    };

    const handleShowResults = () => {
        const maxVotes = Math.max(...votes);
        const winnerIndex = votes.indexOf(maxVotes);
        const winnerEmoji = emojis[winnerIndex];
        setWinner(winnerEmoji);
    };

    const handleReset = () => {
        const resetVotes = new Array(emojis.length).fill(0);
        setVotes(resetVotes);
        setWinner(null);
        localStorage.removeItem('votes');
    };

    return (<div className="container">
        <div className="emoji">
            {emojis.map((emoji, index) => (<div key={index}>
                <button onClick={() => handleVote(index)}>{emoji}</button>
                <p>Votes: {votes[index]}</p>
            </div>))}
        </div>

        {winner ? (<div>
            <p>🏆 Переможець: {winner}</p>
            <p>Голосів: {Math.max(...votes)}</p>
        </div>) : (<p>Press buttons below: </p>)}

        <button onClick={handleShowResults}>Show Results</button>
        <button onClick={handleReset}>Reset</button>
    </div>)
}


export default App
