<template>
  <div class="user-card">
      <div class="user-card-header">
        <h1>User Card</h1>
        <button class="user-card-header__btn" @click="closeUserCard">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div>
          <p>Name: {{ user.name }}</p>
          <p>UserName: {{ user.username }}</p>
          <p>Email: {{ user.email }}</p>
          <p>Phone: {{ user.phone }}</p>
          <p>Website: {{ user.website }}</p>
      </div>
      <div class="user-card-block">
          <div class="user-card-block__elem">
                <p>Company:</p>
                <p>Name: {{ user.company.name }}</p>
                <p>catchPhrase: {{ user.company.catchPhrase }}</p>
                <p>Bs: {{ user.company.bs }}</p>
          </div>
          <div class="user-card-block__elem">
                <p>Address:</p>
                <p>Street: {{ user.address.street }}</p>
                <p>Suite: {{ user.address.suite }}</p>
                <p>City: {{ user.address.city }}</p>
                <p>ZipCode: {{ user.address.zipcode }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object
        }
    },
    methods: {
        closeUserCard() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.user-card {
    position: absolute;
    width: 60%;
    top: 20px;
    left: 18%;
    background-color: white;
    border-radius: 5px;
    padding: 7px 15px;
    color: #2c3e50;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border: 1px solid gray;

    &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__btn {
            background-color: inherit;
            color: lightgray;
            border: none;
            font-size: 31px;
            padding: 5px 10px;;
            cursor: pointer;
        }
    }

    &-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__elem {
            width: 45%;
        }
    }
}

@media (max-width: 979px) {
  .user-card { 
    width: 80%;
    left: 6%;

    &-block__elem {
        width: 100%;
    }
  }
}
</style>