//check console log
console.log('ok js');
console.log('ok vue', Vue);

//estrapolo create app
const { createApp } = Vue;

//inzializzo l app
const app = createApp({
    data(){
        return{
            name : 'Pirati',
            image : 'https://i.pinimg.com/originals/e9/91/80/e991804378163190adbd288a473edc85.jpg'
        }
    },

    methods: {
        choosePic(){
            if(this.name === 'Joy Boy'){
                this.image = 'https://seeklogo.com/images/O/one-piece-logo-3ECB90CB5A-seeklogo.com.png'
            } else if (this.name === 'Luffy'){
                this.image = 'https://i.pinimg.com/474x/95/52/7d/95527d44fe4e92a90a49a89408b75788.jpg'
            }
        }
    }
});

//monto nel html
app.mount('#root');

