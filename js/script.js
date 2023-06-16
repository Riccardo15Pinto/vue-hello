//check console log
console.log('ok js');
console.log('ok vue', Vue);

//estrapolo create app
const { createApp } = Vue;

//inzializzo l app
const app = createApp({
    data(){
        return{
            name : 'Riccardo',
            image : 'https://seeklogo.com/images/O/one-piece-logo-3ECB90CB5A-seeklogo.com.png'
        }
    },
});

//monto nel html
app.mount('#root');