<template>
    <div class=" container">
        <h1>Postagens</h1>
        <router-link class="btn" to="/cad">Nova Postagem</router-link>
        <div class="div-postagens">
            <ul>
                <li v-for="posts in Posts" :key="posts.id">
                    <h2>{{posts.titulo}}</h2>
                    <p class="conteudo">{{posts.conteudo}}</p>
                    <button class="btn-deletar" @click="deletPost(posts.id)">Deletar</button>
                </li>
            </ul>
        </div>
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
        },
        deletPost(id){
            axios.get(`http://192.168.0.107:8081/deletar/${id}`).then(() => {
                alert("Deletado Com sucesso!!");
                this.getPosts();
            }).catch(() => {
                alert("Erro ao deletar, tente novamente mais tarde!");
            })
        }
    },
    created(){
        this.getPosts();
    }

}
</script>

<style lang="sass" scoped>
h1
    font-size: 35px;
    text-align: center;
    margin-top: 55px;

h1:after
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: #000;
    margin: 14px auto 10px auto;

.div-postagens
    margin-top: 105px;
    padding-left: 10px;

h2
    font-size: 25px;
    // text-align: center;
    margin-top: 25px;
    color: #65d;

.conteudo
    padding: 10px;
    font-size: 16px;

li:after
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #65d;


.btn-deletar
    background: #65d;
    border-radius: 5px;
    color: #fff;
    font-size: 12px;

.btn
    text-decoration: none;
    background-color: #65b;
    padding: 7px;
    color: #fff;
    border-radius: 5px;
    padding-left: 10px;
.btn:hover
    background-color: #6666FF;
</style>