function ListGroup() {
    let items = [
        'NewYork',
        'San Francisco',
        'Tokyo',
        'London'
    ]

    return (
        <>  {/* Fragment by default */}
            <h1>List</h1>
            {items.length === 0 && <p>No result found</p>} {/*if first is true then the next element will be rendered*/}
            <ul className="list-group">
                {items.map((item, index) => <li key={item} className="list-group-item" onClick={(event) => console.log("CLICKED",event,  item, index)}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;