import ListGroup from './components/ListGroup';
import LoginForm from './components/LoginForm';

function App() {

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }
  // JSX Javascript XML
  let items = [
    'NewYork',
    'San Francisco',
    'Tokyo',
    'London'
  ]
  return <div>
    {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} /> */}
    <LoginForm></LoginForm>
  </div>
}

export default App;