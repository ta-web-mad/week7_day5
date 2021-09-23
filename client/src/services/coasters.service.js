import axios from 'axios';

class CoastersService {
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/coasters`
    })
  }

  getCoasters = () => this.instance.get("/");
  getOneCoaster = (id) => this.instance.get(`/${id}`);
  createCoaster = (coaster) => this.instance.post("/", coaster);
}

export default CoastersService;