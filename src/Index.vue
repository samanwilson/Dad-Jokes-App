<template >
  <div id="app">
    <!--- Header --->
    <div class="container ">
      <div class="row d-flex justify-content-center" >
        <div class="col-md-6 mt-4">
          <h1 class="text-center color-red h3">Some New Dad Jokes</h1>
        </div>
      </div>
      <!--- Navbar --->
<Navbar></Navbar>
      <!--- Advanced Search --->
      <div class="row d-flex justify-content-center" >
        <div class="col-md-6 d-flex justify-content-center flex-column">
         <h5 class="color-yellow" style="cursor: pointer">Advanced Search</h5>
        </div>
      </div>

      <!--- Main --->
      <div class="row d-flex justify-content-center mt-4">
      <div class="col-md-7">
        <div class="JokeBox">
          <h2 class="text-center py-3">{{CurrentJoke}}</h2>
          <hr>
        </div>
        <div class="BtnContainer d-flex justify-content-center">
          <button class="btn btn-primary m-2" v-on:click="FetchJokes">New</button>
          <button class="btn btn-success m-2" v-on:click="StoreJokes">Store</button>
        </div>
        <div class="searchBox d-flex justify-content-center my-3" v-if="StoreClicked">
          <input type="text" v-model="UserWord">
        </div>

      </div>
      </div>
      <!--- Store --->
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <ul class="list-group" v-for="(Joke,idx) in FilteredJokes" :key="idx">
              <li class="list-group-item d-flex justify-content-between">
                  {{Joke}}
                <span class="DeleteBtn" v-on:click="DeleteJoke(idx)">
              <i class="fas fa-times align-self-center color-red"></i>
            </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--- pagination --->

    </div>
  </div>
</template>

<script>
    import Navbar from "./Navbar";
import axios from 'axios'


    export default {
        name: "Index",
        components:{
            Navbar:Navbar
        },
        data(){
            return{
                CurrentJoke:'',
                AllJokes:[],
                url:'https://v2.jokeapi.dev/joke/any?type=any',
                UserWord:'',
                StoreClicked:false

            }
        },
        methods:{

            FetchJokes(){

axios.get(this.url)
    .then((response)=>{
        const type= response.data.type

        if (type === 'twopart'){
            const a = response.data.setup
            const b = response.data.delivery
          const c =  a.concat(b)
            this.CurrentJoke = c

        }else if (type === 'single'){
            this.CurrentJoke = response.data.joke
        }
    })
            },

            StoreJokes(){

                this.AllJokes.push(this.CurrentJoke)
                this.StoreClicked=true


            },
            DeleteJoke(idx){
                    const index = this.AllJokes.indexOf(idx)
                this.AllJokes.splice(idx,1)

            },


        },
        computed:{
            FilteredJokes (){
                return this.AllJokes.filter(element =>{
                    return element.match(this.UserWord)

                })
            }
        }
    }
</script>

<style>
.Active{
  border-bottom: solid 2px #ea5455 ;
}

  *{
    outline: none!important;
  }

</style>
