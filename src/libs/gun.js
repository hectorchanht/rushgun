import Gun from 'gun/gun';
import 'gun/sea';


const gun = Gun({
  peers: [
    'https://rushgun-backend.herokuapp.com/gun',
  ],
});

export default gun;