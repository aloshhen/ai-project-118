import { ShoppingCart, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

function Navigation() {
  return (
    <nav className="fixed w-full bg-[#1E293B]/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold text-[#3B82F6]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Dress Store
        </motion.h1>
        
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            <ShoppingCart size={24} />
          </motion.button>
          
          <motion.button
            whileHover={{ rotate: 90 }}
            className="text-white"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation