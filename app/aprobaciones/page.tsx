import ConversationThread from '@/components/ConversationThread';
import FileList from '@/components/FileList';

export default function Aprobaciones() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Aprobaciones</h1>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          El agente te ayudará en Flujos de Aprobación, Gestión de Feedback y Notificaciones para optimizar el proceso de revisión y aprobación de materiales de marketing.
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