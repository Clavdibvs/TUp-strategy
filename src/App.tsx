import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap, Eye, Bookmark, Images, ShoppingBag, MessageCircle,
  Menu, X, ArrowRight, Shield, Lightbulb, CheckCircle,
  Activity, BarChart2, Smile
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

// Types
interface Trend {
  id: string
  title: string
  category: 'brainrot' | 'relatable'
  safety: 'verde' | 'giallo'
  analysis: string
  idea: string
  hook: string
}

// Data
const trendsData: Trend[] = [
  {
    id: "A",
    title: "67 / 6-7",
    category: "brainrot",
    safety: "verde",
    analysis: "Il meme del '6-7' è un inside joke Gen-Alpha privo di senso, usato come interruzione comica. Mainstream e innocuo.",
    idea: "Magazziniere guarda in camera esasperato quando arriva l'ordine delle 16:59. Dice '6-7', taglio veloce su picking frenetico.",
    hook: "Quando senti '6-7' ma devi ancora contare 50 rulli..."
  },
  {
    id: "B",
    title: "Group 7 Rules",
    category: "brainrot",
    safety: "verde",
    analysis: "Esperimento virale 'Se vedi questo sei nel gruppo 7'. Crea un senso di appartenenza arbitrario e stimola i commenti.",
    idea: "Regole del 'Group 7 T-Up': Quelli che sanno distinguere a occhio due ruote identiche (ma non lo ammettono).",
    hook: "Se vedi questo sei nel Group 7."
  },
  {
    id: "C",
    title: "Pudding mit Gabel",
    category: "brainrot",
    safety: "verde",
    analysis: "Trend surreale su TikTok: ritrovi di massa per mangiare pudding con la forchetta. Assurdo ma comunitario.",
    idea: "Fake event (cartello stampato): 'Ritrovo in magazzino per contare rulli con la forchetta'. Sold out.",
    hook: "POV: Non posso venire al pudding mit gabel, devo fare picking."
  },
  {
    id: "D",
    title: "TOTR / Totya",
    category: "brainrot",
    safety: "giallo",
    analysis: "Audio virale Spongebob remix. Spesso usato per oggetti che 'ballano' o rituali ripetitivi.",
    idea: "Ricambi che entrano in scena a tempo di musica (solo guanti, niente facce). Packing ritual sincronizzato.",
    hook: "(Solo Audio + Ritmo Visivo)"
  },
  {
    id: "E",
    title: "AI Slop vs Real",
    category: "brainrot",
    safety: "verde",
    analysis: "Meta-meme contro i contenuti AI di bassa qualità ('slop'). Esalta ciò che è tangibile e reale.",
    idea: "Split screen: 'AI: ecco il ricambio' (finto) vs 'Noi: ecco quello vero' (macro, sporco, reale, satisfying).",
    hook: "Se vedi questo è slop, ma questo è magazzino vero."
  },
  {
    id: "F",
    title: "Aura Farming",
    category: "relatable",
    safety: "verde",
    analysis: "Sistema di punteggio sociale: guadagni o perdi 'Aura' (coolness) in base a situazioni imbarazzanti o epiche.",
    idea: "+1000 Aura quando trovi il ricambio al primo colpo. -1000 Aura quando il cliente non ha il codice.",
    hook: "Calcolo dell'Aura in magazzino oggi..."
  },
  {
    id: "G",
    title: "Gen Z Stare",
    category: "relatable",
    safety: "verde",
    analysis: "Lo sguardo vuoto/neutro di fronte a richieste assurde. Perfetto per il customer service B2B.",
    idea: "Cliente: 'Mi serve un ricambio... ma non so per cosa'. Magazziniere: *Stare*. Drop: 'Ok' -> mostra 10 varianti.",
    hook: "POV: Quando ti dicono 'è urgente' ma sono le 16:59."
  },
  {
    id: "H",
    title: "Jet2 Holiday",
    category: "relatable",
    safety: "verde",
    analysis: "Jingle pubblicitario allegro usato ironicamente su video di piccoli disastri o caos.",
    idea: "'Nothing beats a T-Up order' su video dove finisce lo scotch, poi punchline 'ma poi...' e pacco perfetto.",
    hook: "Nothing beats a T-Up order..."
  },
  {
    id: "I",
    title: "But you can't prove it",
    category: "relatable",
    safety: "verde",
    analysis: "Reaction meme (Doakes/Dexter): 'So che c'è qualcosa che non va, ma non ho prove'.",
    idea: "Slideshow: Quando il cliente dice 'va tutto bene' ma tu sai che nel carrello manca un rullo.",
    hook: "Ho un brutto presentimento..."
  },
  {
    id: "J",
    title: "Betrayal Lists",
    category: "relatable",
    safety: "giallo",
    analysis: "Lista di 'tradimenti' su audio triste (Runaway). Molto relatable per chi lavora nel settore.",
    idea: "'Magazzino Betrayals': Scotch che si spezza a metà, cutter che non taglia, etichette che non attaccano.",
    hook: "Top 5 Tradimenti in Magazzino."
  }
]

const scenarioData = [
  { name: 'Conservativo', views: 30000, color: '#7F8C8D' },
  { name: 'Base\n(Realistico)', views: 150000, color: '#3b82f6' },
  { name: 'Upside\n(1 Virale)', views: 1500000, color: '#F5B800' }
]

const contentBlocks = [
  {
    title: "1. Trend Hijack",
    icon: Zap,
    color: "primary",
    objective: "Reach & Follow",
    description: "Meme, brainrot, audio drop. Testo grande + Drop visivo.",
    format: "6-12 sec",
    frequency: "3x Settimana",
    borderColor: "border-primary"
  },
  {
    title: "2. ASMR / Satisfying",
    icon: Eye,
    color: "blue",
    objective: "Retention & Trust",
    description: "Packing, picking, macro suoni. \"Siamo reali e abbiamo stock\".",
    format: "8-20 sec (Loop)",
    frequency: "2x Settimana",
    borderColor: "border-blue-500"
  },
  {
    title: "3. Micro-Tutorial",
    icon: Bookmark,
    color: "green",
    objective: "Salvataggi",
    description: "Non tecnico. \"3 step per...\", testo semplice a video.",
    format: "15-30 sec",
    frequency: "1x Settimana",
    borderColor: "border-green-500"
  },
  {
    title: "4. Slideshow Meme",
    icon: Images,
    color: "purple",
    objective: "Share & Relatability",
    description: "Carousel IG/TikTok photo mode. Punchline + Template.",
    format: "5-8 Slide",
    frequency: "1x Settimana",
    borderColor: "border-purple-500"
  },
  {
    title: "5. Product Hero",
    icon: ShoppingBag,
    color: "orange",
    objective: "Conversioni Soft",
    description: "\"Prima/Dopo\" o \"Questo vs Quello\". Senza vendere duro.",
    format: "7-12 sec",
    frequency: "1x Settimana",
    borderColor: "border-orange-500"
  },
  {
    title: "6. Reply Video",
    icon: MessageCircle,
    color: "slate",
    objective: "Community",
    description: "Risposta video ai commenti. Contenuto \"gratis\" e veloce.",
    format: "6-15 sec",
    frequency: "Al bisogno",
    borderColor: "border-slate-500"
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null)
  const [trendFilter, setTrendFilter] = useState<'all' | 'brainrot' | 'relatable'>('all')

  const filteredTrends = trendFilter === 'all'
    ? trendsData
    : trendsData.filter(t => t.category === trendFilter)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border text-foreground shadow-lg"
      >
        <div className="container mx-auto px-4 py-3 flex justify-center lg:justify-between items-center gap-8">
          <div className="flex items-center space-x-3">
            <img
              src="/assets/logo-tup.png"
              alt="T-UP Logo"
              className="h-12 md:h-14 w-auto"
            />
            <span className="text-xs md:text-sm opacity-70 border-l border/30 pl-3 ml-1">
              Strategia Lancio
            </span>
          </div>

          <nav className="hidden lg:flex space-x-6 text-sm font-medium">
            <a href="#blocks" className="hover:text-primary transition-colors">6 Blocchi</a>
            <a href="#trends" className="hover:text-primary transition-colors">Trend Radar</a>
            <a href="#scenarios" className="hover:text-primary transition-colors">Scenari & KPI</a>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-accent"
              onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Roadmap
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary hover:bg-muted absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card/95 backdrop-blur-lg border-t border"
            >
              <nav className="p-4 space-y-3">
                <a href="#blocks" className="block py-2 hover:text-primary border-b border">
                  6 Blocchi
                </a>
                <a href="#trends" className="block py-2 hover:text-primary border-b border">
                  Trend Radar
                </a>
                <a href="#scenarios" className="block py-2 hover:text-primary">
                  Scenari
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Obiettivo: 1 Virale Mese 1
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold font-brand text-foreground leading-tight">
            Strategia "Start from Zero":<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Volume & Velocità
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Non inseguiamo la perfezione, compriamo dati.
            <br /><strong className="text-foreground">Regola d'oro:</strong> Hook visivo in 1 secondo + Cross-posting totale.
          </p>
        </motion.section>

        {/* 6 Content Blocks */}
        <section id="blocks" className="space-y-8">
          <div className="border-b border pb-4">
            <h2 className="text-3xl font-bold font-brand text-foreground">I 6 Blocchi Operativi</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Il mix di contenuti per un calendario da 22-26 post mensili.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`border-l-4 ${block.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-lg">{block.title}</CardTitle>
                      <block.icon className={`w-5 h-5 text-${block.color}-500`} />
                    </div>
                    <CardDescription className="text-xs font-bold uppercase">
                      Obiettivo: {block.objective}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{block.description}</p>
                    <div className="flex justify-between items-center text-xs font-medium bg-muted p-2 rounded">
                      <span>Format: {block.format}</span>
                      <Badge variant="secondary" className={`bg-${block.color}-100 text-${block.color}-600`}>
                        {block.frequency}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trend Radar */}
        <section id="trends" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-end border-b border pb-4">
            <div>
              <h2 className="text-3xl font-bold font-brand text-foreground">Trend Radar</h2>
              <p className="text-muted-foreground text-sm mt-1">
                Idee pronte all'uso per i blocchi "Trend Hijack" e "Slideshow".
              </p>
            </div>

            <div className="flex space-x-2 mt-4 md:mt-0">
              {(['all', 'brainrot', 'relatable'] as const).map((filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant={trendFilter === filter ? 'default' : 'outline'}
                  onClick={() => setTrendFilter(filter)}
                >
                  {filter === 'all' ? 'Tutti' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrends.map((trend, index) => (
              <motion.div
                key={trend.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full group"
                  onClick={() => setSelectedTrend(trend)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        {trend.category === 'brainrot' ? <Zap className="w-3 h-3" /> : <Smile className="w-3 h-3" />}
                        {trend.category}
                      </Badge>
                      <Badge
                        className={trend.safety === 'verde'
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        }
                      >
                        <Shield className="w-3 h-3 mr-1" />
                        {trend.safety === 'verde' ? 'Alta' : 'Media'}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {trend.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{trend.analysis}</p>
                    <div className="pt-4 border-t border flex justify-end items-center">
                      <span className="text-xs font-bold text-primary flex items-center group-hover:underline">
                        Vedi Strategia <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Scenarios & Data */}
        <section id="scenarios">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Proiezioni Mese 1</CardTitle>
              <CardDescription>
                Cosa aspettarsi pubblicando 22-26 contenuti partendo da zero.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Chart */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center">
                    <BarChart2 className="w-5 h-5 mr-2 text-blue-500" />
                    Scenari di Views (Totale Mese)
                  </h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={scenarioData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis
                          scale="log"
                          domain={[10000, 10000000]}
                          tickFormatter={(value) => {
                            if (value >= 1000000) return `${value / 1000000}M`
                            if (value >= 1000) return `${value / 1000}k`
                            return value
                          }}
                        />
                        <Tooltip
                          formatter={(value) => {
                            if (typeof value === 'number') {
                              return new Intl.NumberFormat('it-IT').format(value)
                            }
                            return value
                          }}
                        />
                        <Bar dataKey="views" radius={[8, 8, 0, 0]}>
                          {scenarioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Data Cards */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-4">
                  <Card className="bg-muted border-l-4 border-secondary">
                    <CardContent className="pt-6">
                      <h5 className="font-bold text-card-foreground mb-2">Scenario Conservativo</h5>
                      <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                        <div><span className="block font-bold text-foreground">10k-50k</span>Views</div>
                        <div><span className="block font-bold text-foreground">50-200</span>Follower</div>
                        <div><span className="block font-bold text-foreground">0-5</span>Ordini</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border-l-4 border-blue-500">
                    <CardContent className="pt-6">
                      <h5 className="font-bold text-blue-900 mb-2">Scenario Base (Realistico)</h5>
                      <div className="grid grid-cols-3 gap-2 text-sm text-blue-800">
                        <div><span className="block font-bold text-blue-900">50k-250k</span>Views</div>
                        <div><span className="block font-bold text-blue-900">200-1k</span>Follower</div>
                        <div><span className="block font-bold text-blue-900">2-15</span>Ordini</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-yellow-50 border-l-4 border-yellow-500">
                    <CardContent className="pt-6">
                      <h5 className="font-bold text-yellow-900 mb-2">Scenario Upside (1 Virale)</h5>
                      <div className="grid grid-cols-3 gap-2 text-sm text-yellow-800">
                        <div><span className="block font-bold text-yellow-900">300k+</span>Views</div>
                        <div><span className="block font-bold text-yellow-900">1k-10k</span>Follower</div>
                        <div><span className="block font-bold text-yellow-900">Effetto</span>Binge</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Signals */}
                <div>
                  <h4 className="font-bold text-foreground mb-3 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-green-500" />
                    Segnali "Sta Funzionando" (Pre-Follower)
                  </h4>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Video che superano 3-5x la media delle views.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Commenti specifici: "Dove si compra?", "Prezzo?", "Codice?".</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Salvataggi alti su Tutorial e Liste (es. Betrayal Lists).</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="space-y-6">
          <h2 className="text-3xl font-bold font-brand text-foreground">
            Roadmap (Settimana x Settimana)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                week: 1,
                title: "Settimana 1",
                subtitle: "Test Aggressivo",
                objective: "10-12 post",
                tasks: [
                  "6-7 Trend Hijack (diversi)",
                  "3 Satisfying/ASMR",
                  "1 Slideshow Meme",
                  "1 Micro Tutorial (semplice)"
                ],
                dark: true
              },
              {
                week: 2,
                title: "Settimana 2",
                subtitle: "Raddoppio",
                objective: "Iterazione",
                tasks: [
                  "Ripeti i 2 format migliori della W1",
                  "Varia solo Hook/Caption",
                  "Aggiungi 1 Trend nuovo"
                ],
                dark: false
              },
              {
                week: 3,
                title: "Settimana 3",
                subtitle: "Conversione Soft",
                objective: "Lead",
                tasks: [
                  "1-2 Video con CTA diretta",
                  '"Commenta RUOTA per il link"',
                  "Link in bio su Product Hero"
                ],
                dark: false
              },
              {
                week: 4,
                title: "Settimana 4",
                subtitle: "Serializzazione",
                objective: "Format",
                tasks: [
                  "Trasforma il top video in Serie",
                  'Es. "Le 16:59 - Ep. 1"',
                  "Pianificazione Mese 2"
                ],
                dark: false
              }
            ].map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`relative overflow-hidden group h-full ${
                  week.dark ? 'bg-primary/5 border-primary/20' : 'bg-card'
                }`}>
                  <div className={`absolute top-0 right-0 p-4 opacity-10 font-bold text-5xl group-hover:scale-110 transition-transform ${
                    week.dark ? 'text-primary' : 'text-foreground'
                  }`}>
                    {week.week}
                  </div>
                  <CardHeader>
                    <CardTitle className={week.dark ? 'text-primary' : ''}>
                      {week.title}
                    </CardTitle>
                    <CardDescription className={`text-xs uppercase tracking-wider font-bold ${
                      week.dark ? 'text-muted-foreground' : ''
                    }`}>
                      {week.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className={`border-b pb-2 mb-2 text-sm ${
                      week.dark ? 'border-primary/20 text-foreground' : 'border'
                    }`}>
                      Focus: {week.objective}
                    </p>
                    <ul className={`list-disc list-inside space-y-1 text-xs ${
                      week.dark ? 'text-muted-foreground' : 'text-muted-foreground'
                    }`}>
                      {week.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
            &copy; 2026 T-Up Strategy Analysis. Powered by Claudio.
          </p>
        </div>
      </footer>

      {/* Trend Modal */}
      <AnimatePresence>
        {selectedTrend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTrend(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative border"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10"
                onClick={() => setSelectedTrend(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Left: Analysis */}
              <div className="w-full md:w-1/2 p-8 bg-muted/30 border-r border">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="outline">{selectedTrend.category}</Badge>
                  <Badge
                    className={selectedTrend.safety === 'verde'
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }
                  >
                    Brand Safety: {selectedTrend.safety === 'verde' ? 'Alta (Clean)' : 'Media (Check Tone)'}
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold font-brand mb-4 text-foreground">
                  {selectedTrend.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-xs text-muted-foreground uppercase mb-1">
                      Analisi Trend
                    </h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {selectedTrend.analysis}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Execution */}
              <div className="w-full md:w-1/2 p-8 bg-card relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 rounded-bl-full pointer-events-none" />
                <div className="flex items-center space-x-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
                    Strategia T-Up 🇮🇹
                  </span>
                </div>

                <div className="space-y-6">
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-primary mb-2 flex items-center text-sm">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Adattamento Magazzino
                      </h4>
                      <p className="text-foreground font-medium text-sm leading-relaxed">
                        {selectedTrend.idea}
                      </p>
                    </CardContent>
                  </Card>

                  <div>
                    <h4 className="font-bold text-xs text-muted-foreground uppercase mb-2">
                      Hook / Gancio Visivo
                    </h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
                      <p className="pl-4 text-lg italic text-foreground/90 py-1">
                        "{selectedTrend.hook}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
