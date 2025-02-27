import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }: { open: boolean }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y:-100 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{duration: 0.3}}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
            <div className="text-xl font-semibold uppercase py-10 m-6 ">
              <ul className="flex flex-col justify-center items-center gap-10 bg-gray-950 text-white rounded-3xl py-2">
              <li >Home</li>
              <li >Elements</li>
              <li >Shop</li>
              <li >Blog</li>
              <li >Page</li>
              </ul>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
