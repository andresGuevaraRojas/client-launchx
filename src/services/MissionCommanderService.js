import http from "../http-common";

class MissionCommanderService {
  getAll() {
    return http.get("/missioncommanders");
  }
  get(id) {
    return http.get(`/missioncommanders/${id}`);
  }
  create(data) {
    return http.post("/missioncommanders", data);
  }
  update(id, data) {
    return http.put(`/missioncommanders/${id}`, data);
  }
  delete(id) {
    return http.delete(`/missioncommanders/${id}`);
  }
}

export default new MissionCommanderService();
