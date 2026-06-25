import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import {motion} from 'motion/react'
import toast from 'react-hot-toast'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('')

    const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()

    const handleSearch = (e)=>{
        e.preventDefault()
        if (new Date(returnDate) <= new Date(pickupDate)) {
            toast.error('Return date must be after pickup date')
            return
        }
        navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate)
    }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className='relative h-screen flex flex-col items-center justify-center gap-14 text-center overflow-hidden'>
    
      {/* Background image */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20'
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1134857/pexels-photo-1134857.jpeg')`
        }}
      ></div>
      
      {/* Background overlay for better text readability */}
      <div className='absolute inset-0 bg-black/60'></div>
      
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse'></div>
      
      {/* Moving background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl'
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-3xl'
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-orange-300/20 rounded-full blur-2xl'
        ></motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-green-200/20 to-teal-300/20 rounded-full blur-2xl'
        ></motion.div>
      </div>
      
      {/* Floating and moving particles */}
      <div className='absolute inset-0'>
        <motion.div 
          animate={{ 
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300/50 rounded-full'
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 80, 0],
            x: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className='absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300/50 rounded-full'
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, -60, 0],
            x: [0, 40, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className='absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-indigo-300/50 rounded-full'
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 70, 0],
            x: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className='absolute bottom-1/4 right-1/4 w-1 h-1 bg-pink-300/50 rounded-full'
        ></motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          animate={{ 
            y: [0, -120, 0],
            x: [0, 80, 0],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute top-1/2 left-1/6 w-3 h-3 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-full blur-sm'
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 90, 0],
            x: [0, -60, 0],
            rotate: [0, -360, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
          className='absolute top-1/3 right-1/6 w-2.5 h-2.5 bg-gradient-to-r from-violet-300/40 to-purple-300/40 rounded-full blur-sm'
        ></motion.div>
      </div>
      
      {/* Animated wave lines */}
      <div className='absolute inset-0'>
        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: "100% 100%"
          }}
        ></motion.div>
      </div>

        <motion.h1 initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        className='relative z-10 text-4xl md:text-5xl font-semibold text-white drop-shadow-lg'>Our beloved cars for your duty!!</motion.h1>
      
      <motion.form
      initial={{ scale: 0.95, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}

       onSubmit={handleSearch} className='relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white/90 backdrop-blur-sm shadow-[0px_20px_40px_rgba(0,0,0,0.1)] border border-white/20'>

        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
            <div className='flex flex-col items-start gap-2'>
                <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
                    <option value="">Pickup Location</option>
                    {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                </select>
                <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <label htmlFor='pickup-date'>Pick-up Date</label>
                <input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required/>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <label htmlFor='return-date'>Return Date</label>
                <input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type="date" id="return-date" className='text-sm text-gray-500' required/>
            </div>
            
        </div>
            <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300'>
                <img src={assets.search_icon} alt="search" className='brightness-300'/>
                Search
            </motion.button>
      </motion.form>

      <motion.img 
        initial={{ y: 100, opacity: 0, x: -200 }}
        animate={{ 
          y: [0, -15, 0],
          x: [0, 200, 0],
          opacity: 1,
          rotate: [0, 0.5, -0.5, 0]
        }}
        transition={{ 
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          },
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 0.8,
            delay: 0.6
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/cars')}
        src={assets.main_car} 
        alt="car" 
        className='relative z-10 max-h-74 drop-shadow-2xl cursor-pointer hover:brightness-110 transition-all duration-300'/>
    </motion.div>
  )
}

export default Hero
