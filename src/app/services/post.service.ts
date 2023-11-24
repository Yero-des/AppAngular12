import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [ 
    new Post(0, 'Noticias', 'Novedades','Una seccion referente a las ultimas noticias del mundo') ,
    new Post(1, 'Deportes', 'Novedades','Una seccion referente a las ultimas noticias del mundo') ,
    new Post(2, 'Cultura', 'Novedades','Una seccion referente a las ultimas noticias del mundo') ,
    new Post(3, 'Videojuegos', 'Novedades','Una seccion referente a las ultimas noticias del mundo') ,
  ]
  
  getPosts = () => this.posts
  getPost = (idPost: number) => this.posts.find(post => post.id == idPost);
}

export class Post {
  constructor(
    public id: number, 
    public title: string,
    public subtitle: string,
    public description: string
  ) {}
}

