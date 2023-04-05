import ListGroup from './components/ListGroup';

function App() {
  // JSX Javascript XML
  let items = [
    'NewYork',
    'San Francisco',
    'Tokyo',
    'London'
]
  return <div><ListGroup items={items} heading="Cities" /></div>
}

export default App;