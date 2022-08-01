import Gun from 'gun/gun';
import 'gun/sea';


const gun = new Gun({
  // peers: ['https://gun-manhattan.herokuapp.com/gun'],
  // file: 'file/path.json'
});

export default gun;