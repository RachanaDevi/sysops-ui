import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
    // Hook is a function to tap into built in functions in react
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // arr[0] // variable selectedIndex
    // arr[1] // updater function 

    return (
        <>  {/* Fragment by default */}
            <h1>{heading}</h1>
            {items.length === 0 && <p>No result found</p>} {/*if first is true then the next element will be rendered*/}
            <ul className="list-group">
                {items.map((item, index) => <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => { setSelectedIndex(index); }}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;