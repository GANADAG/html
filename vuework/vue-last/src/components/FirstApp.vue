<template>
    <div>
        <h1 class="alert alert-info">FirstApp입니다</h1>
        <h2>반응형 메세지</h2>
        <h3>{{ reactiveMessage }}</h3>
        <button v-on:click="btnReativeMessage">Add Message</button>

        <h2>일반 메세지</h2>
        <h3>{{ nomalMessage }}</h3>
        <button  v-on:click="btnNomalMessage">Add Message</button>

        
   </div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue';

export default {
    setup () {
        
        console.log("setup");

        const reactiveMessage=ref("Hello Reactive");
        const btnReativeMessage=()=>{
            reactiveMessage.value=reactiveMessage.value+"!";
        }
        
        //반응형인지 검사
        console.log(isRef(reactiveMessage));

        let nomalMessage='Nomal Message';
        const btnNomalMessage=()=>{
            nomalMessage.value=nomalMessage+"!";
        }

        onMounted(()=>{
            console.log("onMounted")
        });

        onBeforeMount(()=>{
            console.log("onBeforeMount")
        });

        return {

            reactiveMessage,
            nomalMessage,
            btnReativeMessage,
            btnNomalMessage
        }
    }

}
</script>

<style lang="scss" scoped>

</style>