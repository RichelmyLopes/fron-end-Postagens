<template>
    <section class="container">
        <h1>Blog De Postagens, Faça a sua tambem!!</h1>

            <div class="div-form">
                <h2>Seja Bem vindo!!</h2>
                <form class="form" action="" method="">
                    <h3>Preencha os dados abaixo!</h3>
                    <div class="div-label-input">
                        <label for="">Titulo: </label>
                        <input id="inputTitulo" type="text" name="titulo">
                    </div>
                    <div>
                        <label for="">Conteudo: </label>
                        <textarea id="inputConteudo" name="conteudo" cols="30" rows="10"></textarea>
                    </div>
                    <button @click="cadastraPost">Enviar</button>
                </form>
            </div>
    </section>
</template>


<script>
import axios from "axios";
export default {
// Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept
// Access-Control-Allow-Methods: GET, PUT, POST, DELETE, HEAD, OPTIONS
// Access-Control-Allow-Origin: *
// Connection: keep-alive
// Content-Length: 39
// Content-Type: application/json; charset=utf-8
// Date: Sun, 29 Mar 2020 17:18:55 GMT
// ETag: W/"27-UCM0jcDmUlg3wPAXtHMo38rB+7c"
// X-Powered-By: Express
    name: 'Formulario',
    methods: {
        cadastraPost(event){
            event.preventDefault();
            let titulo = document.getElementById('inputTitulo').value;
            let conteudo = document.getElementById('inputConteudo').value;
            axios.post("http://192.168.0.107:8081/add", {titulo: titulo, conteudo: conteudo}).then(()=>{
                alert("Cadastrado com sucesso!");
                document.getElementById('inputTitulo').value = "";
                document.getElementById('inputConteudo').value = "";
            }).catch(() => {
                alert("Erro ao cadastrar!");
            })
        }
    }
};
</script>



<style lang="sass" scoped>


form
    margin: 0 auto;
    padding: 80px 0 80px 0;

h1
    padding-top: 80px;
    font-size: 30px;
    text-align: center;


h2  
    font-size: 28px;
    text-align: center;

h3
    padding-bottom: 40px;
    font-size: 25px;
    color: #65d;
    font-weight: bold;


label
    font-size: 18px;

input
    width: 100%;
    border: 1px solid #65d;
    border-radius: 5px;
    height : 40px;
    font-size: 16px;
    font-weight: bold;
    padding-left: 10px;

textarea
    width: 100%;
    border: 1px solid #65d;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 10px;
    font-family: "Times New Roman", Times, serif;

form
    div
        padding-bottom: 20px;


.div-form
    border-radius: 10px;
    margin: 100px 250px 307px 250px;

button
    padding: 10px 25px 10px 25px;
    background-color: #65d;
    color: #fff;
    border-radius: 10px;
    font-size: 16px;

</style>