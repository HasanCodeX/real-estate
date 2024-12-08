import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      toast.success('Logged out successfully');
    }).catch((error) => {
      toast.error(error.message);
    });
  };

  return (
    <div>
      <header>
        <h1>Real Estate Website</h1>
        {user ? (
          <div>
            <img src={user.photoURL} alt={user.displayName} />
            <span>{user.displayName}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </header>

      <section className="estate-list">
        {/* List your estates here */}
        <div className="estate-card">
          <h2>Estate Title</h2>
          <p>Description</p>
          <Link to="/estate/1">View Property</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
