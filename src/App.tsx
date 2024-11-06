import React from 'react';
import { Gamepad2, Youtube, Twitch, Download, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import CreatorCard from './components/CreatorCard';
import ModSection from './components/ModSection';
import EvolutionShowcase from './components/EvolutionShowcase';
import { creatorEvolutions } from './data/evolutions';

function App() {
  return (
    <div className="font-heebo bg-gradient-to-br from-gray-900 to-tcg-primary min-h-screen text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-right">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">משחק הקלפים של יוצרי התוכן הישראלים</h1>
          <p className="text-xl text-gray-300 mb-8">אספו, שחקו והחליפו קלפים של היוצרים האהובים עליכם</p>
          <button className="bg-tcg-accent hover:bg-tcg-accent/90 text-black font-bold py-3 px-8 rounded-lg flex items-center gap-2">
            <Download className="ml-2" />
            הורד את המוד עכשיו
          </button>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="px-4 py-16 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-right">קלפים מובילים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CreatorCard
              name="עדן סלע"
              image="https://images.unsplash.com/photo-1618085222100-93f0eecad0aa?auto=format&fit=crop&q=80"
              subscribers="950K"
              platform="YouTube"
              rarity="legendary"
            />
            <CreatorCard
              name="גיא מרשק"
              image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80"
              subscribers="500K"
              platform="Twitch"
              rarity="epic"
            />
            <CreatorCard
              name="נועה קירל"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              subscribers="2M"
              platform="YouTube"
              rarity="mythic"
            />
          </div>
        </div>
      </section>

      {/* Evolution Showcase */}
      <section className="py-16 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-right px-4">התפתחות יוצרים</h2>
          <EvolutionShowcase evolutions={creatorEvolutions} />
        </div>
      </section>

      <ModSection />

      {/* Stats Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-lg">
              <Users className="w-12 h-12 mx-auto mb-4 text-tcg-accent" />
              <h3 className="text-2xl font-bold">+50 יוצרים</h3>
              <p className="text-gray-400">קלפים ייחודיים</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Youtube className="w-12 h-12 mx-auto mb-4 text-tcg-accent" />
              <h3 className="text-2xl font-bold">25+</h3>
              <p className="text-gray-400">יוטיוברים</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Twitch className="w-12 h-12 mx-auto mb-4 text-tcg-accent" />
              <h3 className="text-2xl font-bold">15+</h3>
              <p className="text-gray-400">סטרימרים</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;