// 'use client'

// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { motion } from 'framer-motion'
// import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { RootState } from '../lib/strore/store'
// import { setCurrentSection, toggleNav, closeNav } from '../lib/strore/navigationSlice'
// import { toggleTheme } from '../lib/strore/themeSlice'
// import { setLanguage } from '../lib/strore/languageSlice'
// import { translations } from '@/lib/translations'
// import { cn } from '@/lib/utils'
// import { useScrollSpy } from '@/hooks/use-scroll-spy'
// import { AnimatedLogo } from './animated-logo'
// import { Link } from 'react-scroll';

// const navItems = [
//   { id: 'home', icon: '🏠' },
//   { id: 'about', icon: '👤' },
//   { id: 'skills', icon: '💪' },
//   { id: 'projects', icon: '💼' },
//   { id: 'services', icon: '🛠' },
//   { id: 'testimonials', icon: '💬' },
//   { id: 'contact', icon: '📧' },
// ] as const

// const languages = [
//   { code: 'en', label: 'English' },
//   { code: 'es', label: 'Español' },
//   { code: 'fr', label: 'Français' },
// ] as const

// export function Navbar() {
//   const dispatch = useDispatch()
//   const { isNavOpen } = useSelector((state: RootState) => state.navigation)
//   const darkMode = useSelector((state: RootState) => state.theme.darkMode)
//   const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
//   const t = translations[currentLanguage]
  
//   const activeId = useScrollSpy(
//     navItems.map(item => item.id),
//     64 // Navbar height
//   )

//   useEffect(() => {
//     if (activeId) {
//       dispatch(setCurrentSection(activeId as typeof navItems[number]['id']))
//     }
//   }, [activeId, dispatch])

//   return (
//     <motion.header
//       className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b h-16"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <nav className="container mx-auto px-4 h-full flex items-center justify-between">
//         <motion.div
//           className="flex items-center gap-2 text-2xl font-bold"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//         >
//           <AnimatedLogo />
//           <span>echfolio</span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center">
//           <motion.ul
//             className="flex items-center space-x-8 mr-8"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             {navItems.map((item) => (
//               <motion.li key={item.id}>
//                 <Link
//                   to={item.id}
//                   spy={true}
//                   smooth={true}
//                   offset={-64}
//                   duration={500}
//                   onSetActive={() => dispatch(setCurrentSection(item.id))}
//                 >
//                   <Button
//                     variant="ghost"
//                     className={cn(
//                       "flex items-center space-x-2",
//                       activeId === item.id && "text-primary"
//                     )}
//                   >
//                     <span>{item.icon}</span>
//                     <span>{t[item.id]}</span>
//                   </Button>
//                 </Link>
//               </motion.li>
//             ))}
//           </motion.ul>

//           {/* Theme and Language Switchers */}
//           <div className="flex items-center space-x-2">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => dispatch(toggleTheme())}
//               className="relative"
//             >
//               <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//               <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//               <span className="sr-only">{t.theme}</span>
//             </Button>
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Globe className="h-5 w-5" />
//                   <span className="sr-only">{t.language}</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 {languages.map((lang) => (
//                   <DropdownMenuItem
//                     key={lang.code}
//                     onClick={() => dispatch(setLanguage(lang.code))}
//                     className={currentLanguage === lang.code ? 'bg-accent' : ''}
//                   >
//                     {lang.label}
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => dispatch(toggleNav())}
//         >
//           {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </Button>

//         {/* Mobile Navigation Menu */}
//         <motion.div
//           className={cn(
//             "absolute top-16 left-0 right-0 bg-background border-b md:hidden",
//             !isNavOpen && "hidden"
//           )}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <div className="container mx-auto px-4 py-4">
//             <ul className="space-y-2">
//               {navItems.map((item) => (
//                 <motion.li
//                   key={item.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                 >
//                   <Link
//                     to={item.id}
//                     spy={true}
//                     smooth={true}
//                     offset={-64}
//                     duration={500}
//                     onSetActive={() => dispatch(setCurrentSection(item.id))}
//                     onClick={() => dispatch(closeNav())}
//                   >
//                     <Button
//                       variant="ghost"
//                       className={cn(
//                         "w-full justify-start space-x-2",
//                         activeId === item.id && "text-primary"
//                       )}
//                     >
//                       <span>{item.icon}</span>
//                       <span>{t[item.id]}</span>
//                     </Button>
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
            
//             {/* Mobile Theme and Language Switchers */}
//             <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => dispatch(toggleTheme())}
//                 className="relative"
//               >
//                 <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                 <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 <span className="sr-only">{t.theme}</span>
//               </Button>
              
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" size="icon">
//                     <Globe className="h-5 w-5" />
//                     <span className="sr-only">{t.language}</span>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end">
//                   {languages.map((lang) => (
//                     <DropdownMenuItem
//                       key={lang.code}
//                       onClick={() => dispatch(setLanguage(lang.code))}
//                       className={currentLanguage === lang.code ? 'bg-accent' : ''}
//                     >
//                       {lang.label}
//                     </DropdownMenuItem>
//                   ))}
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </motion.div>
//       </nav>
//     </motion.header>
//   )
// }



'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RootState } from '@/lib/strore/store'
import { setCurrentSection,toggleNav, closeNav } from '@/lib/strore/navigationSlice'
import { toggleTheme } from '@/lib/strore/themeSlice'
import { setLanguage } from '@/lib/strore/languageSlice'
import { translations } from '@/lib/translations'
import { cn } from '@/lib/utils'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { AnimatedLogo } from './animated-logo'

const navItems = [
  { id: 'home', icon: '🏠' },
  { id: 'about', icon: '👤' },
  { id: 'skills', icon: '💪' },
  { id: 'projects', icon: '💼' },
  { id: 'services', icon: '🛠' },
  { id: 'testimonials', icon: '💬' },
  { id: 'contact', icon: '📧' },
] as const

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
] as const

export function Navbar() {
  const dispatch = useDispatch()
  const { isNavOpen } = useSelector((state: RootState) => state.navigation)
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
  const t = translations[currentLanguage]
  
  const activeId = useScrollSpy(
    navItems.map(item => item.id),
    64 // Navbar height
  )

  useEffect(() => {
    if (activeId) {
      dispatch(setCurrentSection(activeId as typeof navItems[number]['id']))
    }
  }, [activeId, dispatch])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b h-16"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <AnimatedLogo />
          <span>echfolio</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <motion.ul
            className="flex items-center space-x-8 mr-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <motion.li key={item.id}>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex items-center space-x-2",
                    activeId === item.id && "text-primary"
                  )}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{t[item.id]}</span>
                </Button>
              </motion.li>
            ))}
          </motion.ul>

          {/* Theme and Language Switchers */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch(toggleTheme())}
              className="relative"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{t.theme}</span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">{t.language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => dispatch(setLanguage(lang.code))}
                    className={currentLanguage === lang.code ? 'bg-accent' : ''}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => dispatch(toggleNav())}
        >
          {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={cn(
            "absolute top-16 left-0 right-0 bg-background border-b md:hidden",
            !isNavOpen && "hidden"
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start space-x-2",
                      activeId === item.id && "text-primary"
                    )}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                      dispatch(closeNav())
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{t[item.id]}</span>
                  </Button>
                </motion.li>
              ))}
            </ul>
            
            {/* Mobile Theme and Language Switchers */}
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => dispatch(toggleTheme())}
                className="relative"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{t.theme}</span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">{t.language}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => dispatch(setLanguage(lang.code))}
                      className={currentLanguage === lang.code ? 'bg-accent' : ''}
                    >
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

