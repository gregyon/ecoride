import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({ type: null, message: null });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: null });

    try {
      // TODO: Implémenter l'envoi du message via une API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation
      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Une question ? Un problème ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-8 grid-cols-1 lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-md">
            <Mail className="h-8 w-8 text-eco-green-600 mb-3" />
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-600">
              contact@ecovoiturage.fr
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-md">
            <Phone className="h-8 w-8 text-eco-green-600 mb-3" />
            <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
            <p className="mt-2 text-base text-gray-600">
              +33 (0)1 23 45 67 89
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-md">
            <MessageSquare className="h-8 w-8 text-eco-green-600 mb-3" />
            <h3 className="text-lg font-medium text-gray-900">Support</h3>
            <p className="mt-2 text-base text-gray-600">
              7j/7 de 9h à 19h
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Envoyez-nous un message
            </h2>

            {status.message && (
              <div className={`mb-6 p-4 rounded-md flex items-start ${
                status.type === 'success' ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <AlertCircle className={`h-5 w-5 ${
                  status.type === 'success' ? 'text-green-400' : 'text-red-400'
                } mt-0.5 mr-3`} />
                <p className={`text-sm ${
                  status.type === 'success' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {status.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-green-500 focus:ring-eco-green-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-eco-green-600 hover:bg-eco-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                <span>{loading ? 'Envoi en cours...' : 'Envoyer le message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}