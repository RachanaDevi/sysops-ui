function ListGroup() {
    let items = [
        'NewYork',
        'San Francisco',
        'Tokyo',
        'London'
    ]
    if(items.length ===0){
        return <p>No</p>
    }

    return (
        <>  {/* Fragment by default */}
            <h1>List</h1>
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;