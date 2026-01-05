import React from 'react';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.emojis = ['😀', '😎', '🎉', '🚀', '❤️', '🔥', '👍', '🎮'];

        this.state = {
            votes: this.loadVotes(),
            winner: null
        };
    }

    loadVotes = () => {
        try {
            const saved = localStorage.getItem('votes');
            return saved ? JSON.parse(saved) : new Array(this.emojis.length).fill(0);
        } catch {
            return new Array(this.emojis.length).fill(0);
        }
    };

    componentDidMount() {
        const savedVotes = localStorage.getItem('votes');
        if (savedVotes) {
            this.setState({ votes: JSON.parse(savedVotes) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.votes !== this.state.votes) {
            localStorage.setItem('votes', JSON.stringify(this.state.votes));
        }
    }

    handleVote = (index) => {
        const newVotes = [...this.state.votes];
        newVotes[index]++;
        this.setState({ votes: newVotes });
    };

    handleShowResults = () => {
        const maxVotes = Math.max(...this.state.votes);
        const winnerIndex = this.state.votes.indexOf(maxVotes);
        const winnerEmoji = this.emojis[winnerIndex];
        this.setState({ winner: winnerEmoji });
    };

    handleReset = () => {
        const resetVotes = new Array(this.emojis.length).fill(0);
        this.setState({ votes: resetVotes, winner: null });
        localStorage.removeItem('votes');
    };

    render() {
        const { votes, winner } = this.state;

        return (
            <div className="container">
                <div className="emoji">
                    {this.emojis.map((emoji, index) => (
                        <div key={index}>
                            <button onClick={() => this.handleVote(index)}>{emoji}</button>
                            <p>Votes: {votes[index]}</p>
                        </div>
                    ))}
                </div>

                {winner ? (
                    <div>
                        <p>🏆 Переможець: {winner}</p>
                        <p>Голосів: {Math.max(...votes)}</p>
                    </div>
                ) : (
                    <p>Press buttons below: </p>
                )}

                <button onClick={this.handleShowResults}>Show Results</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default App;