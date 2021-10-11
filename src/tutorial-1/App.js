import { ProfileFunc, ProfileClass } from './components';

function App() {
  return (
    <>
      <ProfileFunc name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </>
  );
}

export default App;
