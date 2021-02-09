export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
    result: 'I found:',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  header: {
    icon: 'coffee',
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

export const info = {
  title: 'Info',
  image: 'https://images.pexels.com/photos/4016539/pexels-photo-4016539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
  name: 'Info',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const faq = {
  title: 'FAQ',
  image: 'https://images.pexels.com/photos/4016594/pexels-photo-4016594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  name: 'FAQ',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'https://images.pexels.com/photos/1702333/pexels-photo-1702333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'list-2',
    title: 'Things that I like <sup>so much!</sup>',
    description: 'Tasty things I want to eat!',
    image: 'https://images.pexels.com/photos/1930381/pexels-photo-1930381.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: 'list-3',
    title: 'Beautiful things',
    description: 'Only the prettiest things that I\'ve ever seen!',
    image: 'https://images.pexels.com/photos/5874584/pexels-photo-5874584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Fruits',
    icon: 'apple-alt',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Sweets',
    icon: 'candy-cane',
  },
  {
    id: 'column-6',
    listId: 'list-3',
    title: 'Places',
    icon: 'mountain',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Nature',
    icon: 'leaf',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Things',
    icon: 'chair',
  },
];

const cards = [
  {
    id: 'card-1',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    index: 0,
  },
  {
    id: 'card-2',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
  },
  {
    id: 'card-3',
    listId: 'list-1',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
  },
  {
    id: 'card-4',
    listId: 'list-1',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
  },
  {
    id: 'card-5',
    listId: 'list-1',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
  },
  {
    id: 'card-6',
    listId: 'list-1',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },
  {
    id: 'card-7',
    listId: 'list-2',
    columnId: 'column-4',
    title: 'Watermelon',
    index: 0,
  },
  {
    id: 'card-8',
    listId: 'list-2',
    columnId: 'column-5',
    title: 'Candy',
    index: 1,
  },
  {
    id: 'card-9',
    listId: 'list-2',
    columnId: 'column-5',
    title: 'Jelly',
    index: 0,
  },
  {
    id: 'card-10',
    listId: 'list-3',
    columnId: 'column-6',
    title: 'Landscapes',
    index: 0,
  },
  {
    id: 'card-11',
    listId: 'list-3',
    columnId: 'column-7',
    title: 'Flowers',
    index: 0,
  },
  {
    id: 'card-12',
    listId: 'list-3',
    columnId: 'column-7',
    title: 'Animals',
    index: 1,
  },
  
];


const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
