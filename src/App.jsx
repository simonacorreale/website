import React from 'react';

// Rimosse tutte le importazioni non necessarie che bloccavano l'app (logo.svg e App.css).

function App() {
  return (
    // Stile in linea per mostrare subito un risultato visibile
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      backgroundColor: '#f0f9ff', // Un colore azzurro chiaro
      border: '2px solid #007bff',
      borderRadius: '8px',
      margin: '50px auto',
      maxWidth: '600px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#007bff', fontSize: '2.5em' }}>🎉 Hello World! La tua App React funziona! 🎉</h1>
      <p style={{ color: '#333' }}>
        Il tuo componente React principale (`App.jsx`) sta funzionando.
        Ora possiamo iniziare a costruire l'interfaccia!
      </p>
    </div>
  );
}

export default App;