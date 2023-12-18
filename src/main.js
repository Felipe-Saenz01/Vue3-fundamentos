import { createApp } from 'vue'
import App from './App.vue'

const app =createApp(App)
// Creando directivas simples con argumentos
app.directive('bg-color', {
    beforeMount: (el, binding) => {
        el.style.backgroundColor  = binding.arg;
        console.log(binding.arg)
    },
    updated: (el, binding) => {
        el.style.backgroundColor = binding.arg;
    }
})
// Creando directivas simples con modificadores
app.directive('custom-color', {
    beforeMount: (el, binding) => {
        let size = 18;
        if(binding.modifiers.small){
            size = 13;
        }else if(binding.modifiers.medium){
            size = 22;
        }else if (binding.modifiers.big){
            size = 32;
        }

        el.style.fontSize = size + 'px';

        if(binding.modifiers.red){
            el.style.color = 'red';
        } else if(binding.modifiers.blue){
            el.style.color = 'blue';
        } else if(binding.modifiers.green){
            el.style.color = 'green';
        }

    }
})


app.mount('#app')
