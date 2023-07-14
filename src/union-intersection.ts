type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  yearExperience: number;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExp: number;
  level: 'junior' | 'mid' | 'senior';
};

const developer: NoobDeveloper | JuniorDeveloper = {
  name: 'Arif',
  expertise: 'Javascript',
  yearExperience: 1.5,
};

const nextLevelDeveloper: NextLevelDeveloper = {
  name: 'Arif',
  expertise: 'Typescript',
  yearExperience: 2,
  leadershipExp: 0.5,
  level: 'mid',
};
