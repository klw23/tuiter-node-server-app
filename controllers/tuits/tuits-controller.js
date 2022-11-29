import * as tuitsDao from './tuits-dao.js'


const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.replies = 0;
    newTuit.liked = false;
    newTuit.retuits = 0;
    newTuit.dislikes = 0;
    newTuit.time = "2h";
    newTuit.username = "NASA";
    newTuit.handle = "@nasa",
    newTuit.image = "https://user-images.githubusercontent.com/29754137/202015346-5250b209-57fb-4175-ac1f-a9efb967cd45.png"
    const insertedTuit = await tuitsDao
                             .createTuit(newTuit);
    res.json(insertedTuit);
  }
  

  const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
  }
 
  
  const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
                         .updateTuit(tuitdIdToUpdate,
                                     updates);
    res.json(status);
  }
  
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
                 .deleteTuit(tuitdIdToDelete);
    res.json(status);

  }
  
export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

