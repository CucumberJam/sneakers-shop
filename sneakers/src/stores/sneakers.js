import { defineStore } from 'pinia'
import {ref} from "vue";

const catalogURL = 'http://localhost:5000';
export const useSneakersStore = defineStore('sneakers', ()=> {
    const sneakers = ref([]);
    const filteredPaginated = ref([]);
    const favorites = ref([]);
    const config = ref({
        isSearching: false,
        offset: 0,
        limit: 20
    })

    const getAll = async()=>{
        config.value.isSearching = true;
        const response = await fetch(catalogURL + '/api/sneakers')
            .catch(err => {
            console.log('Error with getting sneakers from server API: ' + err);
            });
        sneakers.value = [...await response.json()];
        filteredPaginated.value = [...sneakers.value];
        config.value.isSearching = false;
    }

    const sort = (value) => {
        let res = value.split(' ');
        if(res[1] === 'name'){ // отсортируй по имени
            filteredPaginated.value = [...sneakers.value].sort(
                (a,b)=> (a.fullname - b.fullname) ? 1 : ((b.fullname > a.fullname) ? -1 : 0)
            );
        } else if(res[2] === '(cheap)'){ // отсортируй по price
            filteredPaginated.value = [...sneakers.value].sort((a,b) => a.price - b.price);
        }else{
            filteredPaginated.value = [...sneakers.value].sort((a,b) => b.price - a.price);
        }
    }
    const resetFilters = () => {
        filteredPaginated.value = [...sneakers.value];
    }
    const filter = async (filterObject) => {
        if(Object.keys(filterObject).length === 0){
            filteredPaginated.value = [...sneakers.value];
        }
        config.value.isSearching = true;

        let obj = {...filterObject};
        obj.offset = config.value.offset;
        obj.limit = config.value.limit;

        const response = await fetch(catalogURL + '/api/sneakers/filter', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).
        then(result => result.json())
        .catch(err => {
        console.log('Error with getting filtered sneakers from server API: ' + err);
        });
        filteredPaginated.value = [...response];

        config.value.isSearching = false;
    }

    const toggleFavorite = (id) => {
        let found = filteredPaginated.value.find(elem => elem.id === id);
        found.isFavorite = !found.isFavorite;
        if(found.isFavorite){
            favorites.value.push(found);
        }else{
            favorites.value =  favorites.value.filter(el => el.id !== found.id)
        }
    }
    const init = async()=>{
        await getAll();
    }

    return {config, filteredPaginated, favorites,
        init, sort, resetFilters, filter, toggleFavorite};
});