
function CreateTicketForm() {
    return (
        <>
            <div className="mb-3">
                <label className="form-label">Concern</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
                <label className="form-label">Time</label>
                <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </>
    );
}

export default CreateTicketForm;