import React from 'react';
import axios from 'axios';

function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Неверные данные');
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post('/rooms', obj);
    onLogin(obj);
  };

  return (
    <div>
      <form>
        <h1 class="text-center">Добро пожаловать!</h1>
        <div class="form-group">
          <label>Room ID</label>
          <input type="text" class="form-control" placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="text" className='form-control' placeholder="Ваше имя" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <button disabled={isLoading} onClick={onEnter} className="btn btn-success">{isLoading ? 'ВХОД...' : 'ВОЙТИ'}</button>
      </form>
    </div>
  );
}

export default JoinBlock;
