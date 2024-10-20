import ConversationThread from '@/components/ConversationThread';
import FileList from '@/components/FileList';

export default function Analisis() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Análisis</h1>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          El agente es tu copiloto para analizar Resultados de Campañas, Análisis ROI, insights, agendas de aprendizajes, Biblioteca de Assets, Histórico de Campañas. Te ayudará a interpretar datos de marketing, proporcionando insights accionables y recomendaciones basadas en el rendimiento de tus campañas.
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