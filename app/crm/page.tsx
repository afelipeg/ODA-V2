import ConversationThread from '@/components/ConversationThread';
import FileList from '@/components/FileList';

export default function CRM() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">CRM</h1>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Acá el agente te ayudará a crear mapas de viaje de usuarios, configuración de viajes en plataformas, definiciones de fuentes de entrada del viaje, optimizaciones, analizar las estrategias de CRM, creación de modelos de RFM y más.
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