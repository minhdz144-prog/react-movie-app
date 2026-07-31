import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '60vh', padding: '20px' }}>
         <h2>Nội dung chính của trang web sẽ nằm ở đây</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;