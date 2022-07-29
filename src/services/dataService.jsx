import axios from "axios";

// let catalog = [
//   {
//     id: 1,
//     price: 10.2,
//     stock: 9,
//     title: "Henchman",
//     image: "henchman.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
//   {
//     id: 2,
//     price: 20.5,
//     stock: 8,
//     title: "Pool of Sharks",
//     image: "shark.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
//   {
//     id: 3,
//     price: 30.9,
//     stock: 7,
//     title: "Death Ray",
//     image: "ray.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
//   {
//     id: 4,
//     price: 40.3,
//     stock: 6,
//     title: "Tragic Backstory",
//     image: "sad.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
//   {
//     id: 5,
//     price: 50.4,
//     stock: 5,
//     title: "Arch Nemesis' Location",
//     image: "location.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
//   {
//     id: 6,
//     price: 60,
//     stock: 4,
//     title: "Hell Hounds",
//     image: "hound.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
//   {
//     id: 7,
//     price: 70.7,
//     stock: 3,
//     title: "Pocket Dimension",
//     image: "pocket.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
//   {
//     id: 8,
//     price: 80,
//     stock: 2,
//     title: "House Cat that Explodes",
//     image: "cat.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
//   {
//     id: 9,
//     price: 90.9,
//     stock: 1,
//     title: "Evil Lair",
//     image: "lair.jpg",
//     discount: 5,
//     category: "Veggetable",
//   },
// ];

class DataService {
  serverURL = "http://127.0.0.1:5000";

  async getCatalog() {
    // return catalog;
    let response = await axios.get(this.serverURL + "/api/products");
    return response.data;
  }

  async saveProduct(prod) {
    let response = await axios.post(this.serverURL + "/api/products", prod);
    console.log(response.data);
  }
}

export default DataService;
