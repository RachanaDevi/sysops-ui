import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTicketForm from './components/CreateTicketForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {

  const [token, setToken] = useState();
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/createTicket" element={<CreateTicketForm />} />
          </Routes>
        </BrowserRouter>


      </div>
    </>
  )

  // return <div>
  //   <CreateTicketForm></CreateTicketForm>
  // </div>
}

export default App;