export type PostID = string

export type PostData = {
  id: PostID
  title: string
  description: string
  author: string
  slug: string
  image_url: string
  visible: boolean
  created_at: string
  updated_at: string
}
/*
{
  "id": "6ed8d5b6-285b-4399-ad1a-0336adbd24b8",
  "title": "Aprendendo typescipt",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  "author": "Enya Santos",
  "image": "http://localhost:3008/posts/8baf97448cda127dd3ca8b3a31bc67d6-22d697710ee22088305b54383fd278bf.jpg",
  "visible": true,
  "created_at": "2021-02-03T00:23:49.570Z",
  "updated_at": "2021-02-03T04:20:25.494Z"
}
*/
