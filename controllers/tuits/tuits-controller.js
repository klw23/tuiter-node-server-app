import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.replies = 0;
    newTuit.liked = false;
    newTuit.retuits = 0;
    newTuit.dislikes = 0;
    newTuit.time = "2h";
    newTuit.username = "NASA";
    newTuit.handle = "@nasa",
    newTuit.image = "https://user-images.githubusercontent.com/29754137/202015346-5250b209-57fb-4175-ac1f-a9efb967cd45.png"
    tuits.push(newTuit);
    res.json(newTuit);
  }
  

const findTuits  = (req, res) => {
    res.json(tuits)
}


const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
      (t) => t._id.toString() === tuitdIdToUpdate)
    tuits[tuitIndex] = 
      {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
  }
  
const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
        t._id.toString() !== tuitdIdToDelete);
    res.sendStatus(200);
  }
  
export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

