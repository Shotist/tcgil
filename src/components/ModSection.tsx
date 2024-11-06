import React from 'react';
import { Download, FileCode, Gamepad } from 'lucide-react';

const ModSection = () => {
  return (
    <section className="px-4 py-16 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-right">התקנת המוד</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <Download className="w-12 h-12 mb-4 text-tcg-accent" />
            <h3 className="text-xl font-bold mb-2">הורדה</h3>
            <p className="text-gray-400">הורד את קובץ המוד מהאתר הרשמי שלנו</p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <FileCode className="w-12 h-12 mb-4 text-tcg-accent" />
            <h3 className="text-xl font-bold mb-2">התקנה</h3>
            <p className="text-gray-400">העתק את הקבצים לתיקיית המודים של המשחק</p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <Gamepad className="w-12 h-12 mb-4 text-tcg-accent" />
            <h3 className="text-xl font-bold mb-2">שחק</h3>
            <p className="text-gray-400">הפעל את המשחק והתחל לאסוף קלפים</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-tcg-accent hover:bg-tcg-accent/90 text-black font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2">
            <Download className="ml-2" />
            הורד גרסה 1.2.0
          </button>
          <p className="mt-4 text-gray-400">תואם למשחק הבסיס גרסה 2.5 ומעלה</p>
        </div>
      </div>
    </section>
  );
};

export default ModSection;