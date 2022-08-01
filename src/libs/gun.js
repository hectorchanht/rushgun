import Gun from 'gun/gun';
import 'gun/sea';


const gun = Gun({
  peers: [
    'http://localhost:8964/gun',
    'http://gun-manhattan.herokuapp.com/gun',
  ],
});

export default gun;