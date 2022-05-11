<template>
<h4>Explorer</h4>
  <div v-if="currentMissionCommader" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMissionCommader.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMissionCommader.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Stack principal</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMissionCommader.mainStack"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteMissionCommander">
      Eliminar Mission Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMissionCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un Mission Commander. </p>
  </div>
</template>
<script>
import MissionCommanderService from "../../services/MissionCommanderService";
export default {
  name: "missionCommander",
  data() {
    return {
      currentMissionCommader: null,
      message: ''
    };
  },
  methods: {
    getMissionCommander(id) {
      MissionCommanderService.get(id)
        .then(response => {
          this.currentMissionCommader= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMissionCommander() {
      MissionCommanderService.delete(this.currentMissionCommader.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "missionCommanders" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMissionCommander() {
      MissionCommanderService.update(this.currentMissionCommader.id, this.currentMissionCommader)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMissionCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
