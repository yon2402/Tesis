import { motion } from 'framer-motion'

export function HomePage() {
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
          ⚽ Champions League
        </h1>
        <p className="text-muted-foreground text-lg">Bienvenido a Betgamling. Explora partidos y arma tu boleta.</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        <StatCard title="Saldo" value="$1,250.00" icon="💰" />
        <StatCard title="Apuestas" value="12" icon="🎯" />
        <StatCard title="Ganancias" value="$320.50" icon="🏆" />
      </motion.div>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-lg border bg-card/60 backdrop-blur p-4 shadow-sm hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-muted-foreground">{title}</div>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-2xl font-bold text-green-400">{value}</div>
    </motion.div>
  )
}