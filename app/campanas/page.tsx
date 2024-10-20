import ConversationThread from '@/components/ConversationThread';
import FileList from '@/components/FileList';

export default function Campanas() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Campañas</h1>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Acá el agente te ayudará a clasificar, planear y recursos de campaña, analizar y obtener insights de tu brief, crear los segmentos de campaña según la industria, vertical y KPIs a cumplir.
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