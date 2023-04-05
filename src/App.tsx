import ListGroup from './components/ListGroup';

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
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} /></div>
}

export default App;