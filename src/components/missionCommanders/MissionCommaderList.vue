<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Missions Commanders</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missionCommader, index) in missionCommaders"
          :key="index"
          @click="setActiveMissionCommander(missionCommader, index)"
        >
          {{ missionCommader.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMissionCommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMissionCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMissionCommander.username}}
          <br><label><strong>Mission:</strong></label> {{ currentMissionCommander.mainStack}}
        </div>
        <router-link :to="'/missionCommander/' + currentMissionCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Miission Commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MissionCommanderService from "../../services/MissionCommanderService";

export default {
  name: "missioncommander-list",
  data() {
    return {      
      missionCommaders: [],    
      currentMissionCommander: null,
      currentIndex: -1,      
      missionCommanderId: ""
    };
  },
  methods: {
    getAllMissionCommanders(){
      MissionCommanderService.getAll()
        .then(response => {
          this.missionCommaders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMissionCommander(missionCommader, index) {
      this.currentMissionCommander= missionCommader;
      this.currentIndex = missionCommader? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommanders();
  }
};
</script>
