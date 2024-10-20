import ConversationThread from '@/components/ConversationThread';
import FileList from '@/components/FileList';

export default function Estrategia() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Estrategia</h1>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          En esta sección, el agente te ayudará con la creación y gestión de Documentos estratégicos, el desarrollo de Growth Modeling (Modelado de Crecimiento), y la elaboración de Experience Maps para optimizar la experiencia del cliente.
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