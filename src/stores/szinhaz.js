import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useSzinhazStore = defineStore('szinhaz', () => {
  const szinhaz = ref({
    'Vígszínház': {
      nev: 'Vígszínház',
      eloadasok: [
        {
          cim: 'A Dzsungel Könyve',
          url: 'https://www.jegy.hu/program/a-dzsungel-konyve-81963'
        },
        {
          cim: 'Barátom, Harvey',
          url: 'https://www.jegy.hu/program/baratom-harvey-131921'
        },
        {
          cim: "Béranyák",
          url: "https://www.jegy.hu/program/beranyak-139745"
        }
      ]
    },
    "Centrál Színház": {
      nev: "Centrál Színház",
      eloadasok: [
        {
          cim: "Ma este felnövünk",
          url: "https://www.centralszinhaz.hu/eloadasok/ma_este_felnovunk"
        },
        {
          cim: "Házassági leckék középhaladóknak",
          url: "https://www.centralszinhaz.hu/eloadasok/hazassagi_leckek_kozephaladoknak"
        }
      ]
    },
    "Thália Színház": {
      nev: "Thália Színház",
      eloadasok: [
        {
          cim: "Legszebb férfikor",
          url: "https://thalia.hu/eloadasok/legszebb-ferfikor/"
        },
        {
          cim: "Bolha a fülbe",
          url: "https://thalia.hu/eloadasok/bolha-a-fulbe/"
        },
        {
          cim: "Rettenetes szülők",
          url: "https://thalia.hu/eloadasok/jean-cocteau-rettenetes-szulok/"
        },
        {
          cim: "A nagy kézrablás",
          url: "https://thalia.hu/eloadasok/a-nagy-kezrablas-2/"
        }
      ]
    }

})
  return { szinhaz }
})
