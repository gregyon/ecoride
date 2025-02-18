import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchRide() {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="departure" className="block text-sm font-medium text-gray-700">
              Départ
            </label>
            <input
              type="text"
              id="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
              placeholder="Ville de départ"
              required
            />
          </div>
          
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
              placeholder="Ville d'arrivée"
              required
            />
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-eco-green-600 hover:bg-eco-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-green-500"
        >
          <Search className="h-5 w-5" />
          <span>Rechercher un trajet</span>
        </button>
      </form>
    </div>
  );
}