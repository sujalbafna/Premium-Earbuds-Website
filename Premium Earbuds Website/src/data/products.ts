export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: "neo-pulse-pro",
    name: "Neo Pulse Pro",
    price: 299.99,
    description: "Experience the future of sound with quantum-enhanced bass technology",
    features: ["Neural adaptive noise cancellation", "Quantum bass enhancement", "48hr battery"],
    image: "https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&q=80",
    colors: ["#FF00FF", "#00FFFF", "#000000"]
  },
  {
    id: "cyber-sonic-elite",
    name: "Cyber Sonic Elite",
    price: 349.99,
    description: "Military-grade sound isolation with holographic audio projection",
    features: ["Holographic sound stage", "Titanium drivers", "Neural link ready"],
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80",
    colors: ["#FF0000", "#0000FF", "#FFD700"]
  },
  {
    id: "quantum-bass-x",
    name: "Quantum Bass X",
    price: 249.99,
    description: "Deep, resonating bass powered by quantum harmonics",
    features: ["Quantum resonance chamber", "Adaptive EQ", "Haptic feedback"],
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80",
    colors: ["#8A2BE2", "#00FF00", "#000000"]
  },
  {
    id: "neural-link-pro",
    name: "Neural Link Pro",
    price: 399.99,
    description: "Direct neural interface for unprecedented audio clarity",
    features: ["Brain-computer interface", "Thought controls", "Emotional response tracking"],
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80",
    colors: ["#FF1493", "#4169E1", "#32CD32"]
  },
  {
    id: "holo-sound-max",
    name: "Holo Sound Max",
    price: 329.99,
    description: "3D holographic sound projection for immersive experiences",
    features: ["3D sound projection", "Spatial audio", "Reality augmentation"],
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80",
    colors: ["#FF4500", "#00CED1", "#FF1493"]
  },
  {
    id: "synth-wave-elite",
    name: "Synth Wave Elite",
    price: 279.99,
    description: "Retro-futuristic design with cutting-edge technology",
    features: ["Synthwave optimization", "LED visualization", "80s mode"],
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f3?auto=format&fit=crop&q=80",
    colors: ["#FF69B4", "#4B0082", "#00FF00"]
  },
  {
    id: "matrix-pods",
    name: "Matrix Pods",
    price: 199.99,
    description: "Enter the matrix with reality-bending audio",
    features: ["Reality distortion", "Digital decode", "Time manipulation"],
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80",
    colors: ["#008000", "#000000", "#FF0000"]
  },
  {
    id: "cyber-pulse-lite",
    name: "Cyber Pulse Lite",
    price: 159.99,
    description: "Entry-level cyberpunk audio experience",
    features: ["Basic neural link", "Pulse sync", "Neon aesthetics"],
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80",
    colors: ["#FF00FF", "#00FFFF", "#FFFF00"]
  },
  {
    id: "tech-noir-pro",
    name: "Tech Noir Pro",
    price: 289.99,
    description: "Dark future aesthetic with premium sound quality",
    features: ["Noir mode", "Rain enhancement", "Night city optimization"],
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80",
    colors: ["#000000", "#FF0000", "#0000FF"]
  },
  {
    id: "virtual-reality-buds",
    name: "Virtual Reality Buds",
    price: 379.99,
    description: "Seamless integration with VR systems",
    features: ["VR sync", "Motion tracking", "Reality blend"],
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80",
    colors: ["#800080", "#00FF00", "#FFD700"]
  }
];

export const featuredProducts = products.slice(0, 4);