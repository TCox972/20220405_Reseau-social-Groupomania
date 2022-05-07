<template>
    <div>
        <h1>Un super compteur</h1>
        <p>Vous avez cliqué {{ total }} fois !</p>
    </div>
</template>

<script>
export default {
    name: 'CompteurView',
    data () {
        return {
            total : 0
        }
    }
}
</script>

<style scoped>

</style>