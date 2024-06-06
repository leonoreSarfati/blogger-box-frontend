import {Category} from "./category";

export interface Post{
  id:string,
  title:string,
  content:string,
  createdDate:Date,
  category:Category,
}

export type PostCreateInput=Omit<Post,'id' | 'createdDate' | 'category'>& {
  categoryId: string;
};

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'Post 1',
    content: 'This is the content of post 1',
    createdDate: new Date(),
    category: {
      id: '1',
      name: 'Category 1'
    }
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'This is the content of post 2',
    createdDate: new Date(),
    category: {
      id: '2',
      name: 'Category 2'
    }
  },
  {
    id: '3',
    title: 'Post 3',
    content: 'This is the content of post 3',
    createdDate: new Date(),
    category: {
      id: '3',
      name: 'Category 3'
    }
  },
  {
    id: '4',
    title: 'Post 4',
    content: 'This is the content of post 4',
    createdDate: new Date(),
    category: {
      id: '4',
      name: 'Category 4'
    }
  },
  {
    id: '5',
    title: 'Post 5',
    content: 'This is the content of post 5',
    createdDate: new Date(),
    category: {
      id: '5',
      name: 'Category 5'
    }
  }
];
