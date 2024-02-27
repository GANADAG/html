<template>
  <div>
    
  <div class="menu"> 
    <a v-for="(menu,i) in menus" :key="i">{{ menu }}</a>
    </div>

    <div class="celeb" v-for="agency in agencys" :key="agency">
      <img :src="agency.imgSrc">
      <h3>{{ agency.name }}</h3>
      <p>소속사:하이브</p>
      <button @click="onclickLikes(key)">좋아요</button>
      <span>좋아요:{{ agency.likes }}</span>
    </div>
   
  </div> 
</template>

<script>
export default{

  data(){

    return{

      menus:['Home','Celeb','About'],
      agencys:[{name:'여진구',company:'하이브',likes:0,imgSrc:require('./assets/images/1.jpg')},
      {name:'박신혜',company:'큐브',likes:0,imgSrc:require('./assets/images/13.jpg')},
      {name:'설현',company:'jyp',likes:0,imgSrc:require('./assets/images/15.jpg')},
      {name:'유아인',company:'yg',likes:0,imgSrc:require('./assets/images/20.jpg')},
      {name:'박보영',company:'sm',likes:0,imgSrc:require('./assets/images/12.jpg')}
    ],

    }

  },
  methods:{
    onclickLikes(num){
      this.agencys[num].likes++;
    }
  }
}
</script>

<style lang="css" scoped>

.menu{
  background-color: purple;
  padding: 10px;
  border-radius:5px;

}
.celeb img{
  width: 200px;
  border-radius: 30px;
}

</style>