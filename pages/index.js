function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0'
        }}>
            <header style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#333' }}>AI for Business</h1>
                <h2 style={{ color: '#666' }}>Automation Solutions with IAs</h2>
            </header>
            <main>
                <p>Nosso pedacinho de internet ta aqui, dia 30 terá uma página foda construída aqui!</p>
            </main>
            <footer style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                textAlign: 'center',
                padding: '10px',
                backgroundColor: '#ddd'
            }}>
                <p>Founders: Samuel Damazio & Martins Braga</p>
            </footer>
        </div>
    );
}

export default Home;