import React, { useState, useEffect } from 'react';
import { SearchRide } from '../components/SearchRide';
import { Star, Car, Leaf, ChevronRight, User, SlidersHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

// Types pour les données de covoiturage
interface RideType {
  id: string;
  driver: {
    username: string;
    avatar: string;
    rating: number;
  };
  seatsAvailable: number;
  price: number;
  departure: {
    time: string;
    date: string;
  };
  arrival: {
    time: string;
    date: string;
  };
  isEcological: boolean;
  duration: number; // en minutes
}

// Données de test
const mockRides: RideType[] = [
  {
    id: '1',
    driver: {
      username: 'Pierre D.',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
      rating: 4.8,
    },
    seatsAvailable: 3,
    price: 15,
    departure: {
      time: '08:00',
      date: '2024-03-20',
    },
    arrival: {
      time: '10:30',
      date: '2024-03-20',
    },
    isEcological: true,
    duration: 150,
  },
  {
    id: '2',
    driver: {
      username: 'Marie L.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 4.5,
    },
    seatsAvailable: 2,
    price: 12,
    departure: {
      time: '14:00',
      date: '2024-03-20',
    },
    arrival: {
      time: '15:30',
      date: '2024-03-20',
    },
    isEcological: false,
    duration: 90,
  },
];

export function Rides() {
  const [allRides, setAllRides] = useState<RideType[]>(mockRides);
  const [filteredRides, setFilteredRides] = useState<RideType[]>(mockRides);
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    ecological: false,
    maxPrice: '',
    maxDuration: '',
    minRating: '',
  });

  const handleSearch = (searchData: { departure: string; destination: string; date: string }) => {
    // Ici, nous simulerons une recherche avec les données de test
    console.log('Recherche avec:', searchData);
    // Dans une vraie application, nous ferions un appel API ici
    setAllRides(mockRides);
    applyFilters(mockRides, filters);
  };

  const handleFilterChange = (filterName: string, value: string | boolean) => {
    const newFilters = {
      ...filters,
      [filterName]: value,
    };
    setFilters(newFilters);
    applyFilters(allRides, newFilters);
  };

  const applyFilters = (rides: RideType[], currentFilters: typeof filters) => {
    let filtered = [...rides];

    // Filtre écologique
    if (currentFilters.ecological) {
      filtered = filtered.filter(ride => ride.isEcological);
    }

    // Filtre prix maximum
    if (currentFilters.maxPrice && !isNaN(Number(currentFilters.maxPrice))) {
      filtered = filtered.filter(ride => ride.price <= Number(currentFilters.maxPrice));
    }

    // Filtre durée maximum (conversion des heures en minutes)
    if (currentFilters.maxDuration && !isNaN(Number(currentFilters.maxDuration))) {
      const maxMinutes = Number(currentFilters.maxDuration) * 60;
      filtered = filtered.filter(ride => ride.duration <= maxMinutes);
    }

    // Filtre note minimum
    if (currentFilters.minRating && !isNaN(Number(currentFilters.minRating))) {
      filtered = filtered.filter(ride => ride.driver.rating >= Number(currentFilters.minRating));
    }

    setFilteredRides(filtered);
  };

  const resetFilters = () => {
    const resetFiltersState = {
      ecological: false,
      maxPrice: '',
      maxDuration: '',
      minRating: '',
    };
    setFilters(resetFiltersState);
    applyFilters(allRides, resetFiltersState);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section de recherche */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Rechercher un trajet</h1>
          <SearchRide onSearch={handleSearch} />
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="h-5 w-5 text-gray-500" />
              <h2 className="text-xl font-semibold text-gray-800">Filtres</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={resetFilters}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Réinitialiser les filtres
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-sm text-eco-green-600 hover:text-eco-green-700"
              >
                {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="ecological"
                  checked={filters.ecological}
                  onChange={(e) => handleFilterChange('ecological', e.target.checked)}
                  className="rounded text-eco-green-600 focus:ring-eco-green-500"
                />
                <label htmlFor="ecological" className="text-gray-700">Voyage écologique</label>
              </div>
              
              <div>
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
                  Prix maximum (€)
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
                  min="0"
                />
              </div>

              <div>
                <label htmlFor="maxDuration" className="block text-sm font-medium text-gray-700">
                  Durée maximum (heures)
                </label>
                <input
                  type="number"
                  id="maxDuration"
                  value={filters.maxDuration}
                  onChange={(e) => handleFilterChange('maxDuration', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
                  min="0"
                  step="0.5"
                />
              </div>

              <div>
                <label htmlFor="minRating" className="block text-sm font-medium text-gray-700">
                  Note minimum
                </label>
                <input
                  type="number"
                  id="minRating"
                  min="0"
                  max="5"
                  step="0.1"
                  value={filters.minRating}
                  onChange={(e) => handleFilterChange('minRating', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Résumé des filtres actifs */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {filters.ecological && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-eco-green-100 text-eco-green-800">
                <Leaf className="h-4 w-4 mr-1" />
                Écologique
              </span>
            )}
            {filters.maxPrice && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Prix max: {filters.maxPrice}€
              </span>
            )}
            {filters.maxDuration && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                Durée max: {filters.maxDuration}h
              </span>
            )}
            {filters.minRating && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                <Star className="h-4 w-4 mr-1" />
                Note min: {filters.minRating}
              </span>
            )}
          </div>
        </div>

        {/* Liste des trajets */}
        <div className="space-y-4">
          {filteredRides.map((ride) => (
            <div key={ride.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Informations conducteur */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <img
                    src={ride.driver.avatar}
                    alt={ride.driver.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{ride.driver.username}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-gray-600">{ride.driver.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Informations trajet */}
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-8">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{ride.seatsAvailable} places</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800">{ride.price} €</span>
                  </div>

                  <div className="text-gray-600">
                    <div>Départ: {ride.departure.time} - {ride.departure.date}</div>
                    <div>Arrivée: {ride.arrival.time} - {ride.arrival.date}</div>
                    <div>Durée: {Math.floor(ride.duration / 60)}h{ride.duration % 60 ? ` ${ride.duration % 60}min` : ''}</div>
                  </div>

                  {ride.isEcological && (
                    <div className="flex items-center space-x-1 text-eco-green-600">
                      <Leaf className="h-5 w-5" />
                      <span>Voyage écologique</span>
                    </div>
                  )}

                  <Link
                    to={`/rides/${ride.id}`}
                    className="flex items-center space-x-2 px-4 py-2 rounded-md bg-eco-green-600 text-white hover:bg-eco-green-700 transition-colors"
                  >
                    <span>Détails</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun trajet */}
        {filteredRides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucun trajet disponible pour votre recherche.
            </p>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche ou vos filtres.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}