<template>
  <div>
<!-- {{Events}} -->
<Event v-for="event in Events"
:key="event._id"
:eventsInfo="event"
/>
  </div>
</template>

<script>
import APIServices from "../services/Api";
import Event from "../components/Event.vue";

  export default {
    data () {
     return{
       Events:""
     }
    },
    methods: {
      getAllEvents() {
      APIServices.getAllEvents()
        .then(events => {
         this.Events = events
        })
        .catch(err => console.log(err));
    }
    },
    mounted(){
      this.getAllEvents()
    },
    components:{
      Event
    }

  }
</script>

<style lang="scss" scoped>

</style>