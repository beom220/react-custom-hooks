import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div>
      <h1>리액트 훅 모음</h1>
      <Outlet />
    </div>
  );
};

export default Main;
