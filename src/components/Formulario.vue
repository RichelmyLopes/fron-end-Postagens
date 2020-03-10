<template>
    <section class="container">
        <h1>Blog De Postagens, Faça a sua tambem!!</h1>

            <div class="div-form">
                <h2>Seja Bem vindo!!</h2>
                <form class="form" action="http://192.168.0.107:8081/add" method="POST">
                    <h3>Preencha os dados abaixo!</h3>
                    <div class="div-label-input">
                        <label for="">Titulo: </label>
                        <input type="text" name="titulo">
                    </div>
                    <div>
                        <label for="">Conteudo: </label>
                        <textarea name="conteudo" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
    </section>
</template>


<script>
export default {
    name: 'Formulario'
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
    margin: 180px 250px 307px 250px;

button
    padding: 10px 25px 10px 25px;
    background-color: #65d;
    color: #fff;
    border-radius: 10px;
    font-size: 16px;

</style>