<script setup>
import {ref} from 'vue'
import {useSzinhazStore} from '@/stores/szinhaz.js'
let szinhazStore = useSzinhazStore();
const currentSzinhaz = ref(szinhazStore.szinhaz['Vígszínház'])

</script>

<template>
<div id="szinhazcontainer">
    <h1>Válasszon színházat!</h1>
    <div id="gombcontainer">
        <button @click="() => currentSzinhaz = szinhazStore.szinhaz[szinhaz.nev]" v-for="szinhaz of szinhazStore.szinhaz" :key="szinhaz.nev">
            {{ szinhaz.nev }}
        </button>
    </div>
    <div id="info">
        <h3>{{ currentSzinhaz.nev }}</h3>
        <h4>Előadások:</h4>
        <ul v-for="eloadas of currentSzinhaz.eloadasok">
            <li>
                <div>{{ eloadas.cim }}</div>
                <a v-bind:href="eloadas.url">Előadás linkje</a>
            </li>
        </ul>
    </div>
</div>
</template>

<style scoped>
#szinhazcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#gombcontainer {
    display:flex;
    flex-direction: row;
}

button {
    margin: 1em;
    padding: 0.5em;
    border: 1px solid black;
    border-radius: 5px;
    font-weight: 500;
    
}

#info {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 1em;
    margin-top: 1em;
}
</style>