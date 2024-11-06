export interface CreatorCardProps {
  name: string;
  image: string;
  subscribers: string;
  platform: 'YouTube' | 'Twitch';
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
}

export interface CreatorEvolution {
  id: string;
  stages: CreatorCardProps[];
}