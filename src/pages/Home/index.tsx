import { CheckCircle, AlertCircle, Plus, User, ImageIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function Home() {
  return (
    <div className="w-screen mx-auto justify-center bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2">
        <Button className="bg-white">
          <Plus size={20} />
        </Button>

        <div className="text-black font-medium text-lg">Início</div>
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <User size={18} className="text-blue-300" />
        </div>
      </div>

      {/* Banner Image */}
      <div className="mx-4 h-28 bg-blue-50 rounded flex items-center justify-center mb-6">
        <div className="text-blue-200">
          <ImageIcon size={48} strokeWidth={1} />
        </div>
      </div>

      {/* Welcome Text */}
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Olá, somos a Elo Drinks!
        </h1>
        <p className="text-gray-600">
          Especialistas em drinks para eventos de luxo.
        </p>
      </div>

      {/* Events Section */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Seus eventos</h2>

        {/* Event Card 1 */}
        <div className="bg-gray-50 p-4 rounded-lg mb-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <CheckCircle className="text-blue-500" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Formatura</h3>
              <p className="text-gray-500 text-sm">Santa Rita do Sapucaí, MG</p>
            </div>
          </div>
          <div className="text-blue-500 text-sm font-medium">APROVADO</div>
        </div>

        {/* Event Card 2 */}
        <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <AlertCircle className="text-blue-500" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Festa Corporativa</h3>
              <p className="text-gray-500 text-sm">
                Juiz de Fora, 21 de janeiro
              </p>
            </div>
          </div>
          <div className="text-blue-500 text-sm font-medium">ANÁLISE</div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="px-6 pb-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Nossos pacotes</h2>

        <div className="grid grid-cols-2 gap-4 jus">
          {/* Package Card 1 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden  max-w-70">
            <div className="h-32 bg-blue-50 flex items-center justify-center">
              <div className="text-blue-200">
                <ImageIcon size={48} strokeWidth={1} />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-gray-800 mb-1">
                Serviço Completo
              </h3>
              <p className="text-gray-500 text-xs mb-2">
                Para aqueles que querem tranquilidade.
              </p>
              <p className="text-gray-600 text-xs">
                Description. Lorem ipsum dolor sit amet consectetur adipiscing
                elit, sed do
              </p>
            </div>
          </div>

          {/* Package Card 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden max-w-70">
            <div className="h-32 bg-blue-50 flex items-center justify-center">
              <div className="text-blue-200">
                <ImageIcon size={48} strokeWidth={1} />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-gray-800 mb-1">Serviço Básico</h3>
              <p className="text-gray-500 text-xs mb-2">
                Para aqueles que querem economia.
              </p>
              <p className="text-gray-600 text-xs">
                Description. Lorem ipsum dolor sit amet consectetur adipiscing
                elit, sed do
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
