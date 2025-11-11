const Dashboard = ({ onLogout }) => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Rhythm 40/15</h1>
                {onLogout && (
                    <button className="logout-button" onClick={onLogout} title="Logout">
                        Logout
                    </button>
                )}
            </div>

            <section>
                <h3>[ IDLE . ready ]</h3>
                <p className="timer">40:00</p>
                <p className="focus-prompt">What are you focusing on?</p>
                <div className="button-group">
                    <button>Focus</button>
                    <button>Bell</button>
                    <button>Notifications</button>
                </div>
                <div className="stats-group">
                    <p>Today: 0 blocks</p>
                    <p>This Week: 0</p>
                    <p>Git Helper: Offline</p>
                </div>
                <div className="shortcuts-group">
                    <p>Space: Start/Pause</p>
                    <p>R: Reset</p>
                    <p>Enter: Next Phase</p>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;