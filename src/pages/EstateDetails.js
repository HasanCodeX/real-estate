import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EstateDetails = () => {
  const { id } = useParams(); // URL থেকে প্রপার্টি আইডি পাবেন
  const [estate, setEstate] = useState(null); // প্রপার্টির ডেটা সঞ্চয়ের জন্য স্টেট
  const [loading, setLoading] = useState(true); // লোডিং স্টেট
  const [error, setError] = useState(null); // এরর হ্যান্ডলিং

  useEffect(() => {
    const fetchEstate = async () => {
      try {
        // `public/estates.json` ফাইল থেকে ডেটা ফেচ করা
        const response = await fetch('/estates.json');
        const data = await response.json();

        // ID অনুযায়ী প্রপার্টি খোঁজা
        const estateDetails = data.find((item) => item.id === id);

        if (estateDetails) {
          setEstate(estateDetails);
        } else {
          setError('Estate not found');
        }
      } catch (err) {
        setError('Failed to fetch estate details');
      } finally {
        setLoading(false);
      }
    };

    fetchEstate();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{estate.estate_title}</h1>
      <img src={estate.image} alt={estate.estate_title} style={{ maxWidth: '100%' }} />
      <p>{estate.description}</p>
      <ul>
        <li>Price: {estate.price}</li>
        <li>Location: {estate.location}</li>
        <li>Status: {estate.status}</li>
        <li>Area: {estate.area}</li>
        <li>Facilities: {estate.facilities.join(', ')}</li>
      </ul>
    </div>
  );
};

export default EstateDetails;
