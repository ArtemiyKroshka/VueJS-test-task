<template :class="{userCardOpen: isUserCardOpen}">
    <div class="post-page">
        <div v-if="post">
            <h1>{{ post.title }}</h1>
            <div class="post-page__text">
                <p>Author: <span class="post-page__name" @click="openUserCard">{{ user.name }}</span></p>
                <user-card
                    v-if="isUserCardOpen"
                    :user="user"
                    @close="isUserCardOpen = false"
                />
            </div>
            <div class="post-page__text">
                <p>{{ post.body }}</p>
            </div>
            <router-link :to="{name: 'posts'}" class="post-page__btn">
                Back
            </router-link>
            <div class="comments-section">
                <p class="comments-section__title">Comments:</p>
                <div class="comments-section-block" v-for="com in comment" :key="com.id">
                    <p class="comments-section-block__name" >{{ com.name }}</p>
                    <p class="comments-section-block__email"> {{com.email}} </p>
                    <p class="comments-section-block__text"> {{ com.body  }} </p>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import {mapGetters} from 'vuex'
import UserCard from '../components/UserCard.vue'

export default {
    data() {
        return {
            post: null,
            user: null,
            comment: null,
            isUserCardOpen: false,
        }
    },
    components: {UserCard},
    computed: {
        ...mapGetters(['allPosts','allComments','allUsers'])
    },
    methods: {
        openUserCard() {
            this.isUserCardOpen = true
        }
    },
    watch: {
        isUserCardOpen: function(val) {
            const htmlElem = document.documentElement;
            if(val) {
                htmlElem.style.background = 'rgba(0,0,0,.5)'
            } else {
                htmlElem.style.background = 'white';
            }
        }
    },
    created() {
        const post = this.allPosts.find(post => post.id == this.$route.params.id)
        if(post) {
            this.post = post
        }
        const user = this.allUsers.find(user => user.id == this.post.userId)
        if(user) {
            this.user = user
        } 
        const comment = this.allComments.filter(comment => comment.postId == this.post.userId)
        if(comment) {
            this.comment = comment  
        }
    }
}
</script>

<style lang="scss" scoped>
template {
    color: #2c3e50
}

.post-page {
    width: 70%;
    margin: 0 auto;

    &__text {
        text-align: start;
    }

    &__name {
        font-weight: bold;
        position: relative;
        cursor: pointer;
    }

    &__btn {
        padding: 7px 10px;
        background-color: inherit;
        color: #2c3e50;
        border: 1px solid #2c3e50;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;

        &:focus {
            background-color: rgba(0,0,0,0.2);
        }
    }
}

.comments-section {
    text-align: start;

    &__title {
        border-bottom: 1px solid gray;
    }

    &-block {
        padding: 5px 10px;
        margin: 12px auto;
        border: 1px solid gray;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        border-radius: 5px;

        &__name {
            font-weight: bold;
        }
    }
}

@media (max-width: 979px) {
  .post-page { 
    width: 95%;
  }
}
</style>