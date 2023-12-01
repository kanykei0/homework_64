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
