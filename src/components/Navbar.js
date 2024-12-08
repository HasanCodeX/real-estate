import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase-config';


const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <img
            src={user.photoURL || 'https://via.placeholder.com/40'}
            alt="User"
            style={{ width: 40, height: 40, borderRadius: '50%' }}
          />
          <button onClick={() => auth.signOut()}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
