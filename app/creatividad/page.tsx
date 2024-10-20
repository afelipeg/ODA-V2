import ConversationThread from '@/components/ConversationThread';
import FileList from '@/components/FileList';

export default function Creatividad() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Creatividad</h1>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          En esta sección, el agente te asistirá en el Desarrollo y Aprobación de Conceptos Creativos, el Seguimiento de Producción y Adaptación de Materiales, y la Integración con Herramientas de Diseño y Producción para optimizar tu proceso creativo.
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