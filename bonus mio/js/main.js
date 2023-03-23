/*
    Descrizione:
        Attraverso l’apposita API di Boolean
        https://flynn.boolean.careers/exercises/api/random/mail
        generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
    Bonus
        Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/
const { createApp } = Vue

  createApp({
    data() {
      return {
        results: [],
        numberOfMails: 0,
        error: ''
      }
    },
    methods:{
      generator(){
        this.results = [];
        if(this.numberOfMails < 0){
          this.numberOfMails = 0;
          this.error = 'ATTENZIONE: non inserire numeri sotto lo zero';
          console.log(this.error)
          console.log(this.numberOfMails)
        }else{
          for(i=0;i<this.numberOfMails;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then((response)=> {
                let element = response.data.response
                this.results.push(element);
                element = '';
              });
          }
        }
        
      }
    },

    // mounted(){
    // for(i=0;i<10;i++){
    //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //         .then((response)=> {
                
               
    //                 let element = response.data.response
    //                 this.results.push(element);
    //                 element = '';
                
    //     });
    // }
    //     console.log(this.results);
    // }

  }).mount('#app')

  /*prendi il dato e pushalo sull array dieci volte... come fai? */