import ConversationThread from '@/components/ConversationThread';
import FileList from '@/components/FileList';

export default function Medios() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Medios</h1>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          En esta sección, el agente te asistirá en la Creación y Gestión de Planes de Medios digitales y offline, el Análisis de Audiencias y Competencia, la Optimización y Suficiencia de Medios, el análisis de proveedores, y el análisis de gestión de tarifas publicitarias para maximizar el impacto de tus campañas publicitarias.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 border rounded-lg p-4">
          <ConversationThread />
        </div>
        <div className="border rounded-lg p-4">
          <FileList />
        </div>
      </div>
    </div>
  )
}