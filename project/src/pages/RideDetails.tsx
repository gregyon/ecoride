import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Leaf, 
  User, 
  Clock, 
  MapPin, 
  Calendar,
  MessageCircle,
  Car,
  CreditCard,
  ChevronLeft,
  Shield
} from 'lucide-react';

// Types
interface RideType {
  id: string;
  driver: {
    username: string;
    avatar: string;
    rating: number;
    totalRides: number;
    memberSince: string;
    verifiedProfile: boolean;
  };
  seatsAvailable: number;
  price: number;
  departure: {
    city: string;
    address: string;
    time: string;
    date: string;
  };
  arrival: {
    city: string;
    address: string;
    time: string;
    date: string;
  };
  isEcological: boolean;
  duration: number;
  carInfo: {
    model: string;
    color: string;
    comfort: string;
  };
  preferences: {
    smoking: boolean;
    animals: boolean;
    music: boolean;
  };
  description: string;
}

// Données de test
const mockRide: RideType = {
  id: '1',
  driver: {
    username: 'Pierre D.',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
    rating: 4.8,
    totalRides: 127,
    memberSince: '2023',
    verifiedProfile: true,
  },
  seatsAvailable: 3,
  price: 15,
  departure: {
    city: 'Paris',
    address: 'Gare de Lyon',
    time: '08:00',
    date: '2024-03-20',
  },
  arrival: {
    city: 'Lyon',
    address: 'Gare Part-Dieu',
    time: '10:30',
    date: '2024-03-20',
  },
  isEcological: true,
  duration: 150,
  carInfo: {
    model: 'Tesla Model 3',
    color: 'Blanc',
    comfort: 'Premium',
  },
  preferences: {
    smoking: false,
    animals: true,
    music: true,
  },
  description: 'Trajet direct Paris-Lyon en Tesla. Départ de la Gare de Lyon, arrivée à la Gare Part-Dieu. Possibilité de prendre des bagages de taille moyenne. Voyage confortable et écologique garanti !',
};

export function RideDetails() {
  const { id } = useParams<{ id: string }>();
  const [ride] = useState<RideType>(mockRide);
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState('');

  const handleReservation = () => {
    // TODO: Implémenter la logique de réservation
    console.log('Réservation en cours...');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter l'envoi du message
    console.log('Message envoyé:', message);
    setShowContactForm(false);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Retour aux résultats */}
        <Link
          to="/rides"
          className="inline-flex items-center space-x-2 text-eco-green-600 hover:text-eco-green-700 mb-6"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Retour aux résultats</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations principales */}
          <div className="lg:col-span-2 space-y-6">
            {/* En-tête */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={ride.driver.avatar}
                    alt={ride.driver.username}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {ride.driver.username}
                      </h2>
                      {ride.driver.verifiedProfile && (
                        <Shield className="h-5 w-5 text-eco-green-500" />
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-gray-600">{ride.driver.rating}</span>
                      <span className="text-gray-400">• {ride.driver.totalRides} trajets</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Membre depuis {ride.driver.memberSince}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{ride.price} €</div>
                  <div className="text-gray-500">par personne</div>
                </div>
              </div>

              {/* Trajet */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{ride.departure.city}</div>
                    <div className="text-gray-600">{ride.departure.address}</div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{ride.departure.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{ride.departure.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{ride.arrival.city}</div>
                    <div className="text-gray-600">{ride.arrival.address}</div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{ride.arrival.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{ride.arrival.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>Durée estimée : {Math.floor(ride.duration / 60)}h{ride.duration % 60 ? ` ${ride.duration % 60}min` : ''}</span>
                </div>
              </div>
            </div>

            {/* Informations véhicule */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Véhicule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-800">{ride.carInfo.model}</div>
                    <div className="text-gray-500">{ride.carInfo.color}</div>
                  </div>
                </div>
                {ride.isEcological && (
                  <div className="flex items-center space-x-2 text-eco-green-600">
                    <Leaf className="h-5 w-5" />
                    <span>Véhicule écologique</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description et préférences */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Description et préférences</h3>
              <p className="text-gray-600 mb-6">{ride.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${ride.preferences.smoking ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-gray-600">
                    {ride.preferences.smoking ? 'Fumeur accepté' : 'Non-fumeur'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${ride.preferences.animals ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-gray-600">
                    {ride.preferences.animals ? 'Animaux acceptés' : 'Pas d\'animaux'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${ride.preferences.music ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-gray-600">
                    {ride.preferences.music ? 'Musique acceptée' : 'Pas de musique'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Panneau de réservation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Réserver ce trajet</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Places disponibles</span>
                  <div className="flex items-center space-x-1">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="font-medium text-gray-800">{ride.seatsAvailable}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Prix par personne</span>
                  <span className="font-medium text-gray-800">{ride.price} €</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total</span>
                    <span>{ride.price} €</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleReservation}
                  className="w-full flex justify-center items-center space-x-2 py-3 px-4 bg-eco-green-600 text-white rounded-md hover:bg-eco-green-700 transition-colors"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Réserver maintenant</span>
                </button>

                <button
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-eco-green-600 text-eco-green-600 rounded-md hover:bg-eco-green-50 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Contacter {ride.driver.username}</span>
                </button>
              </div>

              {showContactForm && (
                <form onSubmit={handleContactSubmit} className="mt-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Votre message..."
                    className="w-full p-3 border rounded-md focus:ring-eco-green-500 focus:border-eco-green-500"
                    rows={4}
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full py-2 px-4 bg-eco-green-600 text-white rounded-md hover:bg-eco-green-700 transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}