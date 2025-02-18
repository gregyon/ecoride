import React from 'react';
import { SearchRide } from '../components/SearchRide';
import { Leaf, Users, Shield, Car, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-eco-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Covoiturage Écologique pour un Avenir Plus Vert
            </h1>
            <p className="text-xl mb-8 text-eco-green-100">
              Rejoignez notre communauté de voyageurs éco-responsables et réduisez votre empreinte carbone
            </p>
          </div>
          <SearchRide />
        </div>
      </section>

      {/* À Propos Section avec Images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Bienvenue chez EcoRide
              </h2>
              <p className="text-gray-600 mb-6">
                EcoRide est né d'une vision simple : rendre le covoiturage plus écologique et accessible à tous. Notre plateforme met l'accent sur les véhicules électriques et les conducteurs engagés dans la protection de l'environnement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="h-6 w-6 text-eco-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Voyagez Vert</h3>
                    <p className="text-gray-600">Privilégiez les véhicules électriques pour vos déplacements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-eco-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Communauté Engagée</h3>
                    <p className="text-gray-600">Rejoignez des voyageurs partageant vos valeurs écologiques</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center space-x-2 mt-6 text-eco-green-600 hover:text-eco-green-700"
              >
                <span>En savoir plus</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Nature préservée"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Forêt verte"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Montagne verdoyante"
                className="rounded-lg shadow-md w-full h-48 object-cover col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Pourquoi Choisir EcoRide ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-eco-green-500" />}
              title="100% Écologique"
              description="Privilégiez les véhicules électriques et contribuez à la réduction des émissions de CO2"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-eco-green-500" />}
              title="Communauté Engagée"
              description="Voyagez avec des personnes partageant votre engagement pour l'environnement"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-eco-green-500" />}
              title="Sécurité Garantie"
              description="Profitez d'un système de vérification des conducteurs et de paiement sécurisé"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-eco-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à Rejoindre l'Aventure ?
          </h2>
          <p className="text-xl mb-8 text-eco-green-100">
            Créez votre compte gratuitement et commencez à voyager de manière responsable
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-eco-green-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Créer un compte
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}