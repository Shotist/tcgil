import React from 'react';
import { Youtube, Twitch, Star } from 'lucide-react';

interface CreatorCardProps {
  name: string;
  image: string;
  subscribers: string;
  platform: 'YouTube' | 'Twitch';
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
}

const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  rare: 'from-blue-400 to-blue-600',
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-yellow-400 to-yellow-600',
  mythic: 'from-red-400 to-red-600',
};

const CreatorCard = ({ name, image, subscribers, platform, rarity }: CreatorCardProps) => {
  return (
    <div className={`card-hover relative rounded-lg overflow-hidden bg-gradient-to-br ${rarityColors[rarity]} p-[2px]`}>
      <div className="bg-gray-900 rounded-lg p-4 h-full">
        <div className="relative mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded"
          />
          <div className="card-shine absolute inset-0 rounded"></div>
        </div>
        
        <div className="text-right">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          
          <div className="flex items-center justify-end gap-2 mb-2">
            {platform === 'YouTube' ? (
              <Youtube className="text-red-500" />
            ) : (
              <Twitch className="text-purple-500" />
            )}
            <span>{subscribers} עוקבים</span>
          </div>

          <div className="flex items-center justify-end gap-1">
            {Array(5).fill(0).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 3 ? 'text-tcg-accent' : 'text-gray-600'}`}
                fill={i < 3 ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;