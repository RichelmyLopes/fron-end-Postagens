<template>
    <div>
      <ul>
        <li v-for="posts in Posts" :key="posts.titulo">
            <h2>{{posts.titulo}}</h2>
            <p>{{posts.conteudo}}</p>
        </li>
      </ul>
    </div>
</template>
<script>


import axios from "axios";
export default {
    name: 'Home',
    data(){
        return {
            Posts: [],
        }
    },
    methods: {
        getPosts(){
            axios.get("http://192.168.0.107:8081/allPosts").then((response) => {
                this.Posts = response.data.posts;
                console.log(this.Posts[0]);
            })
        }
    },
    created(){
        this.getPosts();
    }

}
</script>