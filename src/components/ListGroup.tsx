function ListGroup() {
    let items = [
        'NewYork',
        'San Francisco',
        'Tokyo',
        'London'
    ]

    const getMessage = () => items.length === 0 ? <p>No result found</p> : null

    return (
        <>  {/* Fragment by default */}
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;