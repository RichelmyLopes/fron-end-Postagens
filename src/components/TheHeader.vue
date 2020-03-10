<template>
    <header id="header">
        <div class="container">
            <div class="grid-6">
                <router-link to="/">
                    <img class="imagem-logo " src="@/assets/blog.jpg" alt="Logo Site">
                </router-link>
            </div>
            <nav class="nav grid-6" id="nav">
                <ul class="list-nav">
                    <li>
                        <router-link class="btn" to="/">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link class="btn" to="/sobre">
                            Sobre
                        </router-link>
                    </li>
                    <li>
                        <router-link class="btn" to="/postagens">
                            Postagens
                        </router-link>
                    </li>
                    <li>
                        <router-link class="btn" to="/contato">
                            Contato
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
};
</script>


<style lang="sass" scoped>
.imagem-logo
    max-width: 150px;

.nav
    display: flex;
    max-width: 100%;
    justify-content: flex-end;
   

.list-nav
        display: flex;
        flex-wrap: wrap;
        align-items: center;


        


.list-nav
    li
        font-size: 16px;
        margin-left: 20px;
        padding-top: 30px;

.btn
    text-decoration: none;
    background-color: #65b;
    padding: 10px;
    color: #fff;
    border-radius: 10px;


    



</style>