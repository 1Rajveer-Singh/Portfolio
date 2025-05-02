import React from 'react';
import Navbar from './components/Navbar';
import Content1 from './components/Content1';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-screen h-screen pt-7">
        <Content1 />
      </main>
      <Footer className="p-5" />
    </div>
  );
}

export default App;
