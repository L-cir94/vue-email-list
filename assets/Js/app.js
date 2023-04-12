
/* consegna
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email
e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

/* strumenti: 

*/
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            listEmail: [],
        }
    },
    methods: {
        axiosGenerate(max) {
            for (let i = 0; i < 10; i++) {

                axios

                    .get(this.url)

                    .then(response => {

                        this.listEmail.push(response.data.response)

                    })
            }
        }
    },
    mounted() {
        this.axiosGenerate()



    }

})

app.mount('#app')