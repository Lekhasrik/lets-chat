// const generateDiceBearAvataaars = (seed) =>
//   `https://avatars.dicebear.com/api/avataaars/${seed}.svg`;

// const generateDiceBearBottts = (seed) =>
//   `https://avatars.dicebear.com/api/bottts/${seed}.svg`;

// const generateDiceBearGridy = (seed) =>
//   `https://avatars.dicebear.com/api/gridy/${seed}.svg`;

// export const generateAvatar = () => {
//   const data = [];

//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearAvataaars(Math.random());
//     data.push(res);
//   }
//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearBottts(Math.random());
//     data.push(res);
//   }
//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearGridy(Math.random());
//     data.push(res);
//   }
//   return data;
// };

const generateDiceBearAvataaars = (seed) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;

const generateDiceBearBottts = (seed) =>
  `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;

const generateDiceBearGridy = (seed) =>
  `https://api.dicebear.com/7.x/gridy/svg?seed=${seed}`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 2; i++) {
    data.push(generateDiceBearAvataaars(Math.random()));
  }
  for (let i = 0; i < 2; i++) {
    data.push(generateDiceBearBottts(Math.random()));
  }
  for (let i = 0; i < 2; i++) {
    data.push(generateDiceBearGridy(Math.random()));
  }

  return data;
};

