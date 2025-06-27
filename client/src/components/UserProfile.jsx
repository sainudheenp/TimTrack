import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem('user');
      localStorage.removeItem('token');

      toast.success('Successfully logged out.', {
        position: 'top-right',
        autoClose: 3000,
      });

      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors duration-200"
    >
      <i className="fa-solid fa-right-from-bracket text-gray-600"></i>
      Logout
    </button>
  );
};

export default UserProfile;
