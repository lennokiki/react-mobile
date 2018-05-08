import React from 'react'
//import { HashRouter, Switch, Route, Link } from 'react-router-dom'

const PlayerAPI = {
    players: [
        { number: 1, name: "Ben Blockerss", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() {return this.players},
    get: function (id) {
        const isPlayer = p => p.number === id;
        console.log(isPlayer);
        return this.players.find(isPlayer);
    }
}

const FullRoster = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map( p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number)
    )
    if (!player) {
        return <div>Sorry, the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name}(#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/roster'>Back</Link>
        </div>
    )
}

const Roster = () => (
    <Switch>
        <Route exact path='/roster' component={FullRoster} />
        <Route path='/roster/:number' component={Player} />
    </Switch>
)

const Schedule = () => (
    <div>
        <ul>
            <li>大撒大撒</li>
            <li>的撒</li>
            <li>大撒大撒</li>
        </ul>
    </div>
)

const Home = () => (
    <div>
        <h1>Welcome  to the website</h1>
    </div>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/roster' component={Roster} />
            <Route path='/schedule' component={Schedule} />
        </Switch>
    </main>
)

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'> Home</Link></li>
                <li><Link to='/roster'> Roster</Link></li>
                <li><Link to='/schedule'> Schedule</Link></li>
            </ul>
        </nav>
    </header>
)

const App =  () => (
    <div>
        <Header />
        <Main />
    </div>
)

export default () => (
    <HashRouter>
        <App />
    </HashRouter>
)

