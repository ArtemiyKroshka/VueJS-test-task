<template>
  <form>
      <h1>Количество постов: {{ postsCount }}</h1>
      <div class="post-wrapper">
        <div class="post" v-for="post in listOfPost" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
          
          <router-link
            :to="{ name: 'postPage', params: {id: post.id} }"
            class="more-info"
          />
        </div>
      </div>

      <div v-if="MobileWidth" class="post-btn-block">
        <button class="post__btn" @click.prevent="currentPage = 1" >
          <span class="post__btn__special" aria-hidden="true">&laquo;</span>
        </button>
        <button v-if="currentPage-1 != 0" class="post__btn" @click.prevent="currentPage -= 1" >
          {{ currentPage - 1 }}
        </button>
        <button class="post__btn" @click.prevent="currentPage = currentPage" >
          {{ currentPage }}
        </button>
        <button v-if="currentPage+1 != 11" class="post__btn" @click.prevent="currentPage += 1" >
          {{ currentPage + 1 }}
        </button>   
        <button class="post__btn" @click.prevent="currentPage = 10" >
          <span class="post__btn__special" aria-hidden="true">&raquo;</span>
        </button>
      </div>

      <div v-else class="post-btn-block">
        <button class="post__btn" v-for="p in 10" :key="p" @click.prevent="currentPage = p">
          {{ p }}
        </button>
      </div>
  </form>
</template>

<script>
import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        postInPage: 10,
        currentPage: 1,
      }
    },
    computed: {
      ...mapGetters(['allPosts','postsCount']),
      listOfPost() {
        return this.allPosts.slice((this.currentPage*this.postInPage)-this.postInPage,(this.currentPage*this.postInPage))
      },
      MobileWidth() {
        const htmlElem = document.documentElement
        if(htmlElem.clientWidth <= 769) {
          return true
        } else {
          return false
        }
      }
    },
    created() {
      this.$store.dispatch('fetchPosts');
      this.$store.dispatch('fetchComments');
      this.$store.dispatch('fetchUsers');
      
    }
  }
</script>

<style>

.post-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
}

.post {
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  padding: 10px 10px;
  width: 40%; 
  margin: 15px;
  position: relative;
}

.more-info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 30px;
    text-decoration: none;
    opacity: 0;
    transition: all 0.2s ease;
}

.more-info:hover,
.more-info:focus {
  opacity: 0.2;
}

.post-btn-block {
  display: flex;
  align-items: center;
  justify-content: center;
}

.post__btn,
.post__btn__special {
    background-color: inherit;
    color: #2c3e50;
    border: none;
    font-size: 21px;
    margin: 0 5px;
    padding: 5px 10px;
    font-weight: 100;
    cursor: pointer;
}


@media (max-width: 979px) {
  .post { 
    width: 100%;
  }
}
</style>