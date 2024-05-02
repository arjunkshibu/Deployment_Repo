/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'blurBack': "url('./src/assets/img/peakpx.jpg')",
        'blurBack2':"url('./src/assets/img/peakpx2.jpg)",
        'bg-girl' : "url('./src/assets/img/picture-young-woman-standing-pointing-up2.jpg')",
        'logo' : "url('./src/assets/img/logotext2.png')",
        'logo2' : "url('./src/assets/img/logotext.png)",
        'bg-gold' : "url('./src/assets/img/gold.jpg')",
        'bg-girl_pc': "url('./src/assets/img/girl_pc.jpg')",
        'bg-girl-w': "url('./src/assets/img/girl.jpg')",
        'intel': "url('./src/assets/img/intel.png')",
        'outdoor-girl': "url('./src/assets/img/outdoors.jpg')"


      },
      fontFamily:{
        'Montserrat': ["Montserrat, sans"],
        'Scania':["Scania"],
        'Cabin' : ["Cabin"]
      },
      colors:{
        'syn-blue': '#39A7FF',
        'syn-purple' : '#362e7b',
        'nav-blue': '	#6360b1',
        'peach-bg': '#bcb4cc',
        'syn-red':'#891652',
        'syn-skin':'#D27685',
        'syn-darl':'#240A34',
        'syn-white':'#FBF6EE',
        'syn-lb':'#87C4FF',
        'syn-lb-light':'#E0F4FF',
        'blacky':"#000000",
        'mil-blue': "#0a2540",
        'li-yel':"#FAEF9B",
        'test-1':"#67C6E3",
        'navy':"#0a192f",
        'dark-blue':"#3b82f6"
      }
    },
  },
  plugins: [],
}

