import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Video, Heart, MessageCircle, Play, Sparkles, X, Volume2, Share2, Music } from 'lucide-react';

interface SocialPost {
  id: string;
  type: 'instagram' | 'tiktok';
  videoThumbnail: string;
  videoUrl?: string; // Simulated video or cool styling
  caption: string;
  likes: string;
  comments: string;
  date: string;
  tag: string;
}

export default function SocialFeed() {
  const [playingVideo, setPlayingVideo] = useState<SocialPost | null>(null);

  const posts: SocialPost[] = [
    {
      id: 'soc-1',
      type: 'instagram',
      videoThumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500',
      caption: '🔥 ARRIVAGE EXCLUSIF DE SNEAKERS PRESTIGE ! Déballage en direct de nos nouveautés de la semaine. Quantités très limitées, disponibles dès aujourd’hui à la boutique d\'Adidogomé ! 👟 #SyetaVip #LomeMode #TogoLuxury',
      likes: '1 420',
      comments: '185',
      date: 'Il y a 2 heures',
      tag: 'Unboxing Sneakers'
    },
    {
      id: 'soc-2',
      type: 'tiktok',
      videoThumbnail: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500',
      caption: '💃 Les robes de soirée en soie sauvage et satin premium sont enfin là ! Préparez vos meilleurs looks pour les dîners gala de Lomé avec notre collection couture ✨ #VipPrestige #SyetaCouture #Adidogome',
      likes: '3 890',
      comments: '412',
      date: 'Il y a 1 jour',
      tag: 'Collection Robes'
    },
    {
      id: 'soc-3',
      type: 'instagram',
      videoThumbnail: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500',
      caption: '👞 L’art du mocassin italien pour l’homme VIP d’affaires. Confection en cuir pleine fleur, disponible du 40 au 45. Commandez votre paire par WhatsApp ou venez l’essayer en salon privé.',
      likes: '942',
      comments: '67',
      date: 'Il y a 2 jours',
      tag: 'Mocassins Prestige'
    },
    {
      id: 'soc-4',
      type: 'tiktok',
      videoThumbnail: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=500',
      caption: '⌚ Unboxing de la montre chronographe "Togo Gold" ! Cadran noir profond et bracelet en acier inoxydable doré brossé. Un bijou d\'assurance pour les leaders de Lomé. #GoldVIP #Lome #Togo',
      likes: '2 105',
      comments: '133',
      date: 'Il y a 3 jours',
      tag: 'Montres & Bijoux'
    }
  ];

  return (
    <section className="py-20 theme-bg-primary border-t theme-border-primary relative animate-fadeIn">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold block mb-3">#SYETAVIP sur les Réseaux</span>
          <h2 className="text-3xl md:text-5xl font-light uppercase theme-text-primary tracking-tight mb-4 animate-slideIn">
            VIDÉOS ET COULISSES <br />
            <span className="italic font-serif text-gold-400 lowercase">en direct d'adidogomé.</span>
          </h2>
          <p className="text-xs theme-text-secondary uppercase tracking-widest leading-relaxed mt-6">
            Suivez nos comptes officiels pour ne rater aucun déballage de colis ("unboxing") et arrivage en temps réel à Lomé !
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setPlayingVideo(post)}
              className="group theme-bg-secondary border theme-border-secondary hover:border-gold-400/50 rounded-none overflow-hidden shadow-xl cursor-pointer relative transition-all duration-300"
            >
              {/* Image Thumbnail with Dark overlay */}
              <div className="aspect-[4/5] relative overflow-hidden bg-black">
                <img
                  src={post.videoThumbnail}
                  alt={post.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Network Logo overlay */}
                <div className="absolute top-4 right-4 z-10 p-2 rounded-none bg-black/85 backdrop-blur-md border border-white/10 text-gold-400">
                  {post.type === 'instagram' ? <Instagram className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                </div>

                {/* Bottom stats overlay info */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2">
                  <span className="px-2.5 py-0.5 theme-bg-primary border theme-border-primary text-gold-400 text-[9px] font-semibold uppercase tracking-widest rounded-none">
                    {post.tag}
                  </span>
                  <p className="text-xs text-white line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-4 text-white/40 text-[11px] font-mono pt-1">
                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5 text-gold-400" /> {post.comments}</span>
                  </div>
                </div>

                {/* Floating Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px]">
                  <div className="w-14 h-14 rounded-none border border-gold-400 bg-black text-gold-400 flex items-center justify-center shadow-2xl transition-transform duration-300 transform scale-90 group-hover:scale-100">
                    <Play className="w-5 h-5 fill-gold-400 text-gold-400 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic call to action to real platforms */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border theme-border-primary hover:border-gold-400 bg-gold-400/5 text-[10px] uppercase tracking-widest font-semibold theme-text-primary hover:text-gold-400 rounded-none flex items-center gap-2.5 transition-all cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-gold-400" />
            Rejoindre sur Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border theme-border-primary hover:border-gold-400 bg-gold-400/5 text-[10px] uppercase tracking-widest font-semibold theme-text-primary hover:text-gold-400 rounded-none flex items-center gap-2.5 transition-all cursor-pointer"
          >
            <Video className="w-4 h-4 text-gold-400" />
            Suivre sur TikTok
          </a>
        </div>

      </div>

      {/* Simulated Video Player Modal */}
      <AnimatePresence>
        {playingVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md theme-bg-secondary border theme-border-primary rounded-none overflow-hidden shadow-2xl flex flex-col"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-none theme-bg-primary border theme-border-primary theme-text-secondary hover:theme-text-primary cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Video Simulator Area (Simulated loop animation with background image pulsing) */}
              <div className="relative aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
                <motion.img
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  src={playingVideo.videoThumbnail}
                  alt="Video playing"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover blur-[2px] opacity-70"
                />

                {/* Center Audio Symbol & Play Overlay to show active video stream */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 border border-gold-400 flex items-center justify-center text-gold-400 animate-pulse">
                    <Volume2 className="w-8 h-8" />
                  </div>
                  <div className="relative z-10 bg-black/95 border border-white/10 rounded-none p-4 max-w-xs space-y-1">
                    <span className="text-[9px] text-gold-400 font-semibold uppercase tracking-widest flex items-center justify-center gap-1">
                      <Music className="w-3.5 h-3.5" /> Son original Syeta VIP
                    </span>
                    <p className="text-[11px] text-white/80">Vidéo de déballage active - Lecture simulée</p>
                  </div>
                </div>

                {/* Simulated TikTok bottom user overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 border border-gold-400 theme-bg-secondary flex items-center justify-center font-serif text-gold-400 text-xs font-bold rounded-none">
                      S
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">syetavip_officiel</span>
                      <span className="text-[9px] text-gold-400 block">{playingVideo.type === 'instagram' ? 'Reels' : 'TikTok Video'}</span>
                    </div>
                  </div>

                  <p className="text-xs text-white/80 font-sans leading-normal">
                    {playingVideo.caption}
                  </p>

                  <div className="flex justify-between items-center pt-2 border-t theme-border-primary">
                    <div className="flex items-center gap-4 text-xs text-white/60 font-mono">
                      <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-500 fill-red-500" /> {playingVideo.likes}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4 text-gold-400" /> {playingVideo.comments}</span>
                    </div>
                    <button className="px-3 py-1.5 border border-gold-400 hover:bg-gold-400 text-gold-400 hover:text-black rounded-none text-[10px] uppercase tracking-widest font-semibold transition-colors cursor-pointer flex items-center gap-1.5">
                      <Share2 className="w-3.5 h-3.5" /> Partager
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
            
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
