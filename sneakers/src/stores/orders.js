import {defineStore} from "pinia";
import {ref} from "vue";

export const ordersStore = defineStore('orders', ()=> {
    const ordersInProcess = ref([
        {
            id: 'ehewghlw',
            numberByUser: 2,
            dateOrder: '03.03.2024',
            dateDelivery: "10.03.2024",
            sum: 10499,
            currency: 'руб.',
            address: {
                postcode: "625000",
                country: "Российская Федерация",
                region: "Тюменская область",
                city: "Тюмень",
                street: "Ленина",
                house: 35,
                flat: 10
            },
            status: "in delivery",
            items: [
                {
                    id: '65e01f873f76be362a66c648',
                    sex: 'M',
                    price: 10499,
                    size: 38,
                    fullname: 'Fendi Billing Mode',
                    count: 1
                }
            ]
            //userId: '3275732582'
        }
    ]);
    const ordersDone = ref([
        {
            id: 'eheettlw',
            numberByUser: 1,
            dateOrder: '28.02.2024',
            dateDelivery: "01.03.2024",
            sum: 10499,
            currency: 'руб.',
            address: {
                postcode: "625000",
                country: "Российская Федерация",
                region: "Тюменская область",
                city: "Тюмень",
                street: "Ленина",
                house: 35,
                flat: 10
            },
            status: "done",
            items: [
                {
                    id: '65e01f873f76be362a66c648',
                    sex: 'M',
                    price: 10499,
                    size: 39,
                    fullname: 'Fendi Billing Mode',
                    count: 1
                }
            ]
            //userId: '3275732582'
        }
    ]);


});