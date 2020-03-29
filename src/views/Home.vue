<template>
    <section>
        <div class="div-h1">
            <h1>Site de Postagens</h1>
            <div class="detalhesTitulo">
                <p>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum
                </p>
            </div>
            <div class="div-geral-imagens container">
                <h2>Ler é fundamental</h2>
                <div class="div-container-total">
                    <div class="div-img">
                        <div>
                            <img src="@/assets/img-leitura-1.jpg" alt="livro">
                        </div>
                        <div class="div-texto-img1">
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                                including versions of Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    <div class="div-img">
                        <div>
                            <img src="@/assets/img-leitura-2.jpg" alt="blog">
                        </div>
                        <div class="div-texto-img2">
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                                including versions of Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
                <router-link class="btn" to="/postagens">Ler Postagens</router-link>
            </div>
        </div>
    </section>
</template>
<script>


export default {
    name: 'Home',
    data(){
        return {
        }
    }
}
</script>

<style lang="sass" scoped>
h1
    font-size: 25px;
    margin-bottom: 35px;

h2
    margin-bottom: 50px;

.div-h1
    text-align: center;
    margin-top: 70px;
    margin-bottom: 80px;
    

.div-h1:before
    content: "";
    width: 610px;
    height: 155px;
    top: 195px;
    position: absolute;
    left: 600px;
    z-index: 0;
    background: linear-gradient(to right,rgba(139, 88, 270, 9), rgba(139, 50, 270, 9));
    opacity: 0.5;
    filter: blur(30px);



.detalhesTitulo 
    width: 600px;
    margin: 15px auto 0 auto;


.div-geral-imagens
    margin-top: 110px;

.div-geral-imagens h2
    font-size: 22px;

.div-img
    display: flex;


img
    max-width: 100%;

.div-texto-img1
    padding: 130px 0px 0 30px;
    max-width: 900px;

.div-texto-img2
    padding: 110px 0px 0 30px;
    max-width: 1500px;

.div-texto-img1:before
    content: "";
    width: 610px;
    height: 155px;
    top: 620px;
    position: absolute;
    left: 922px;
    z-index: 0;
    background: linear-gradient(to right,rgba(139, 88, 270, 9), rgba(139, 50, 270, 9));
    opacity: 0.5;
    filter: blur(30px);


.div-texto-img2:before
    content: "";
    width: 610px;
    height: 155px;
    top: 995px;
    position: absolute;
    left: 922px;
    z-index: 0;
    background: linear-gradient(to right,rgba(139, 88, 270, 9), rgba(139, 50, 270, 9));
    opacity: 0.5;
    filter: blur(30px);

.btn
    text-decoration: none;
    background-color: #65b;
    padding: 12px;
    color: #fff;
    border-radius: 5px;

.btn:hover
    background-color: #6666FF;

.div-container-total
    margin-bottom: 55px;
</style>