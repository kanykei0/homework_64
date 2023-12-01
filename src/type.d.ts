export interface Post {
  title: string;
  description: string;
}
export interface PostMutation {
  postId: string;
  title: string;
  description: string;
}
export interface PostsList {
  [postId: string]: PostMutation;
}
export interface About {
  title: string;
  text_1: string;
  text_2: string;
}
