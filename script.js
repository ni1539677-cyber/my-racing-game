body { margin: 0; background: #1a1a1a; font-family: 'Segoe UI', sans-serif; overflow: hidden; }
#gameArea { 
    width: 400px; height: 100vh; background: #333; margin: 0 auto;
    position: relative; overflow: hidden; border-left: 8px solid #555; border-right: 8px solid #555;
    background-image: repeating-linear-gradient(#333, #333 50px, #444 50px, #444 100px); /* রাস্তার টেক্সচার */
}
.car, .enemy { 
    position: absolute; width: 50px; height: 90px; border-radius: 12px 12px 5px 5px;
    box-shadow: 0 20px 15px rgba(0,0,0,0.6); transition: 0.1s;
}
/* আপনার লাল স্পোর্টস কার */
.car { 
    background: linear-gradient(to bottom, #ff0000 0%, #990000 100%); 
    border: 2px solid #550000;
}
.car::before { /* উইন্ডশিল্ড */
    content: ''; position: absolute; top: 15px; left: 5px; width: 40px; height: 25px;
    background: #add8e6; border-radius: 5px; opacity: 0.7;
}
/* শত্রু গাড়ি (সবুজ/নীল) */
.enemy { background: linear-gradient(to bottom, #00ff00 0%, #006600 100%); }
.line { 
    position: absolute; width: 10px; height: 100px; background: rgba(255,255,255,0.8); 
    left: 195px; border-radius: 5px;
}
#score { 
    position: absolute; top: 20px; left: 20px; color: #fff; font-size: 28px; 
    font-weight: bold; text-shadow: 2px 2px #000; z-index: 100;
}
