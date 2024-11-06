import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { CreatorEvolution } from '../types';
import CreatorCard from './CreatorCard';

interface EvolutionShowcaseProps {
  evolutions: CreatorEvolution[];
}

const EvolutionShowcase: React.FC<EvolutionShowcaseProps> = ({ evolutions }) => {
  const [selectedEvolution, setSelectedEvolution] = useState<CreatorEvolution | null>(null);

  return (
    <>
      <div className="relative">
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-4 min-w-min px-4">
            {evolutions.map((evolution, index) => (
              <div
                key={evolution.id}
                className="flex-none w-72 cursor-pointer"
                onClick={() => setSelectedEvolution(evolution)}
              >
                <div className="relative">
                  <CreatorCard {...evolution.stages[0]} />
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                    {evolution.stages.length} שלבים
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Evolution Modal */}
      {selectedEvolution && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setSelectedEvolution(null)}
              className="absolute -top-12 right-0 text-white hover:text-tcg-accent"
            >
              <X size={24} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {selectedEvolution.stages.map((stage, index) => (
                <div key={index} className="relative">
                  <CreatorCard {...stage} />
                  {index < selectedEvolution.stages.length - 1 && (
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 hidden md:block">
                      <ChevronRight className="text-tcg-accent" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EvolutionShowcase;