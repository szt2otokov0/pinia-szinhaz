<script setup>
import {ref} from 'vue'
import {useSzinhazStore} from '@/stores/szinhaz.js'
let szinhazStore = useSzinhazStore();
const currentSzinhaz = ref(szinhazStore.szinhaz['Vígszínház'])

</script>

<template>
<h1>Hello!</h1>
<div id="gombcontainer" v-for="szinhaz of szinhazStore.szinhaz" :key="szinhaz.nev">
    <button @click="() => currentSzinhaz = szinhazStore.szinhaz[szinhaz.nev]">{{ szinhaz.nev }}</button>
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
</template>