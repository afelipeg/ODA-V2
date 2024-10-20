"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Megaphone,
  Lightbulb,
  Palette,
  Radio,
  ShoppingCart,
  Users,
  ClipboardCheck,
  DollarSign,
  BarChart2,
  BookOpen,
  Link as LinkIcon,
  Shield,
  User,
  Settings,
  Bot
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Campañas', icon: Megaphone, href: '/campanas' },
  { name: 'Estrategia', icon: Lightbulb, href: '/estrategia' },
  { name: 'Creatividad', icon: Palette, href: '/creatividad' },
  { name: 'Medios', icon: Radio, href: '/medios' },
  { name: 'E-commerce', icon: ShoppingCart, href: '/ecommerce' },
  { name: 'CRM', icon: Users, href: '/crm' },
  { name: 'Aprobaciones', icon: ClipboardCheck, href: '/aprobaciones' },
  { name: 'Presupuesto', icon: DollarSign, href: '/presupuesto' },
  { name: 'Análisis', icon: BarChart2, href: '/analisis' },
  { name: 'Conocimiento', icon: BookOpen, href: '/conocimiento' },
  { name: 'Integración', icon: LinkIcon, href: '/integracion' },
  { name: 'Seguridad', icon: Shield, href: '/seguridad' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-background border-r flex flex-col h-screen">
      <div className="p-4 flex items-center space-x-2">
        <Bot className="h-6 w-6" />
        <span className="font-bold text-lg">ODA</span>
      </div>
      <nav className="flex-grow overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm",
              pathname === item.href
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="mr-3 h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <User className="h-6 w-6" />
          <span>Usuario</span>
        </div>
        <Link href="/configuracion" className="flex items-center mt-2 text-sm text-muted-foreground hover:text-foreground">
          <Settings className="mr-2 h-4 w-4" />
          Configuración
        </Link>
      </div>
    </aside>
  );
}