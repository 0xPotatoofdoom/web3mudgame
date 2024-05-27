import React, { useState } from 'react';

interface Props {
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    if (!email) {
      console.log('Register cancelled: email is required.');
    }

    if (!password) {
      console.log('Register cancelled: password is required.');
    }

    try {
      const response = await fetch('http://localhost:443/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Register failed: ${response.statusText}`);
      }

      const data = await response.json();
      onClose();
      console.log(data.message);
    } catch (error) {
      console.log(`Registration error: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/90">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font-semibold">Register</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              <label className="block text-sm font-bold mb-1">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 mb-1 text-black"
                onChange={(event) => setEmail(event.target.value)}
                type="email"
              />
              {submitted && (!isValidEmail(email) || !email) ? (
                <label className="block text-sm font-bold mb-1">
                  {!email
                    ? 'Enter email'
                    : !isValidEmail(email)
                      ? 'Enter valid email'
                      : ''}
                </label>
              ) : null}
              <label className="block text-sm font-bold mb-1 mt-1">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
              {submitted && !password ? (
                <label className="block text-sm font-bold mb-1">
                  {!email ? 'Enter password' : ''}
                </label>
              ) : null}
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
