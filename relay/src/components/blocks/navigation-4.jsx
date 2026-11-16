"use client";;
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
// icons for each Relay tab
import { LayoutList, Users, CircleDot, User, PenSquare, Menu, X } from "lucide-react";
//added from a license key I bought, I have lifteime access because I use it for my websites as well

export function Navigation4() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mouseY = useMotionValue(Infinity);

  // Relay app tabs — each maps to a route
  const navItems = [
    { id: "feed",    icon: LayoutList, label: "Feed",    href: "/feed" },
    { id: "groups",  icon: Users,      label: "Groups",  href: "/groups" },
    { id: "circle",  icon: CircleDot,  label: "Circle",  href: "/circle" },
    { id: "profile", icon: User,       label: "Profile", href: "/profile" },
    { id: "post",    icon: PenSquare,  label: "Post",    href: "/post" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          {/* app name in the mobile header */}
          <div className="text-left">
            <p className="text-sm font-bold leading-tight" style={{ color: '#81C14B' }}>
              Relay
            </p>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden fixed bottom-3 left-0 right-0 z-50 px-4 pb-6"
          >
            <motion.div className="flex items-center justify-center gap-4 px-6 py-4 rounded-3xl bg-white/80 backdrop-blur-2xl dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/50 shadow-xl mx-auto w-fit">
              {navItems.map((item, index) => (
                <MobileNavItem key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="hidden md:flex fixed left-0 top-0 h-screen w-24 flex-col items-center py-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <div className="w-14 h-14 rounded-full bg-neutral-900 dark:bg-white"></div>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col items-center justify-center gap-4"
          onMouseMove={(e) => mouseY.set(e.pageY)}
          onMouseLeave={() => mouseY.set(Infinity)}
        >
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              index={index}
              mouseY={mouseY}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-8"
        >
          {/* app name at the bottom of the sidebar */}
          <div className="text-left">
            <p className="text-sm font-bold leading-tight" style={{ color: '#81C14B' }}>
              Relay
            </p>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}

function NavItem({
  item,
  index,
  mouseY,
  hoveredItem,
  setHoveredItem
}) {
  const ref = useRef(null);
  const Icon = item.icon;
  const location = useLocation();
  const isActive = location.pathname === item.href;

  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const sizeTransform = useTransform(
    distance,
    [-150, -75, 0, 75, 150],
    [56, 60, 64, 60, 56],
  );

  const size = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3 + index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* use Link for client-side routing; green tint when active */}
      <Link
        to={item.href}
        className="flex items-center justify-center w-full h-full rounded-2xl no-underline"
        style={{ background: isActive ? '#2E933C' : 'rgba(255,255,255,0.08)' }}
      >
        <Icon className="w-5 h-5" style={{ color: isActive ? '#fff' : '#81C14B' }} />
      </Link>

      <AnimatePresence>
        {hoveredItem === item.id && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium shadow-lg"
            style={{ background: '#1a1a1a', color: '#81C14B' }}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MobileNavItem({
  item,
  index
}) {
  const Icon = item.icon;
  const location = useLocation();
  const isActive = location.pathname === item.href;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.3 + index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative flex items-center justify-center w-12 h-12"
    >
      {/* use Link for client-side routing */}
      <Link
        to={item.href}
        className="flex items-center justify-center w-full h-full rounded-2xl no-underline"
        style={{ background: isActive ? '#2E933C' : 'rgba(255,255,255,0.08)' }}
      >
        <Icon className="w-5 h-5" style={{ color: isActive ? '#fff' : '#81C14B' }} />
      </Link>
    </motion.div>
  );
}

export default Navigation4;
