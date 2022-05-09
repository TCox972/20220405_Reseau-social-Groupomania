<template>
    <section>
        <div class="login">
            <h2>Connectez vous</h2>
            <form class="login__form">
                <input class="form__field" type="email" name ="email" placeholder="email" required>
                <input class="form__field" type="input" name ="password" placeholder="Mot de passe" required>
                <button class="submitLogin">CONNEXION</button>
            </form>
            
        </div>
    </section>
    
</template>

<script>
export default {
    name: 'CompteurView',
    props : {
        total :{
            type: Number,
            default: 10,
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: auto;
    border: solid 1px rgb(190, 182, 182);
    border-radius: 15px;
    box-shadow: rgb(164, 154, 154) 8px 8px 8px;
        &__form{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 200px;
        }       
}

</style>