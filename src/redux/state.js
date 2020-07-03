import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, this is my props', likesCount: 12 },
      { id: 2, message: 'This is another props', likesCount: 15 },
      { id: 3, message: 'And this is third props', likesCount: 6 },
      { id: 4, message: 'This is Amazing bro', likesCount: 594 }
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Abu', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' },
      { id: 2, name: 'Abdulla', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' },
      { id: 3, name: 'Adam', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' },
      { id: 4, name: 'Seyf', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' },
      { id: 5, name: 'Halid', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' },
      { id: 6, name: 'Shamil', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' }
    ],
    messages: [
      { id: 1, message: 'Hi', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' },
      { id: 2, message: 'Hi!', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' },
      { id: 3, message: 'How are you?', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' },
      { id: 4, message: 'I\'m fine!', avatar: 'https://image.flaticon.com/icons/svg/848/848006.svg' }
    ]
  }
}

export let addPost = postMessage => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
}



export default state;
