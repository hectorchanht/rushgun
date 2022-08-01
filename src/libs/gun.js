import Gun from 'gun/gun';
import 'gun/sea';


const gun = new Gun({
  peers: [
    'http://localhost:8964/gun',
    'http://gun-manhattan.herokuapp.com/gun'],
  // file: 'file/path.json'
});

export default gun;