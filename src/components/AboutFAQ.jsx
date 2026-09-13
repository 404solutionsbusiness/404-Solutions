import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Pause, Play, Volume2, VolumeX } from "lucide-react";
import robotImg from "../assets/about/faq-robot.webp";
import { faqItems } from "../data/about";

const faqAudioFiles = import.meta.glob("../assets/about/faq-audio/faq*.mp3", { eager: true, query: "?url", import: "default" });
const audioById = Object.fromEntries(faqItems.map((item, index) => {
  const file = `faq${index + 1}.mp3`;
  const match = Object.entries(faqAudioFiles).find(([path]) => path.endsWith(`/${file}`));
  return [item.id, match?.[1]];
}));

export default function AboutFAQ() {
  const [activeId, setActiveId] = useState(faqItems[0]?.id);
  const [playingId, setPlayingId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);  const [isMuted, setIsMuted] = useState(false);
  const audio = useRef(null);
  const activeItem = useMemo(() => faqItems.find((item) => item.id === activeId) ?? faqItems[0], [activeId]);
  const activeAudio = activeItem ? audioById[activeItem.id] : undefined;
  const isPlaying = playingId === activeItem?.id;

  useEffect(() => () => { audio.current?.pause(); audio.current = null; }, []);

  const stopAudio = () => {
    if (audio.current) { audio.current.pause(); audio.current.currentTime = 0; }
    setPlayingId(null); setCurrentTime(0);
  };
  const playAudio = (item = activeItem) => {
    if (!item || !audioById[item.id]) { setPlayingId(null); return; }
    stopAudio();
    const next = new Audio(audioById[item.id]);
    audio.current = next; next.muted = isMuted;
    next.onloadedmetadata = () => setDuration(Number.isFinite(next.duration) ? next.duration : 0);
    next.ontimeupdate = () => setCurrentTime(next.currentTime);
    next.onended = () => { setPlayingId(null); setCurrentTime(0); };
    next.onerror = () => setPlayingId(null);
    next.play().then(() => setPlayingId(item.id)).catch(() => setPlayingId(null));
  };
  const selectItem = (item) => { if (item.id === activeId && isPlaying) return; stopAudio(); setActiveId(item.id); setDuration(0); playAudio(item); };
  const toggleAudio = () => { if (!activeAudio) return; if (isPlaying) stopAudio(); else playAudio(activeItem); }; const toggleMute = (event) => { event.stopPropagation(); setIsMuted((muted) => { const nextMuted = !muted; if (audio.current) audio.current.muted = nextMuted; return nextMuted; }); };
  const formatTime = (value) => { const seconds = Math.max(0, Math.floor(value || 0)); return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`; };

  const renderQuestion = (item, index) => {
    const open = item.id === activeId;
    const available = Boolean(audioById[item.id]);
    return (
      <button type="button" key={item.id} onClick={() => selectItem(item)} aria-expanded={open} aria-controls={"faq-answer-" + item.id} className={"flex min-h-10 w-full items-center gap-3 rounded-xl border px-3 py-1.5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand " + (open ? "border-brand/20 bg-brand-pale/80 text-brand shadow-clay-soft" : "border-white bg-white/80 text-ink hover:border-brand/20")}>
        <span className={"flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-black " + (open ? "bg-brand text-white" : "bg-brand-pale text-brand")}>{String(index + 1).padStart(2, "0")}</span>
        <span className="min-w-0 flex-1 text-sm font-extrabold">{item.question}</span>
        {available && <button type="button" onClick={toggleMute} aria-label={isMuted ? "Unmute FAQ audio" : "Mute FAQ audio"} className="shrink-0 rounded-full p-1 text-brand/60 transition hover:bg-brand-pale hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">{isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}</button>}
        <ChevronDown size={17} className={"shrink-0 transition " + (open ? "rotate-180" : "")} />
      </button>
    );
  };

  return (
    <section id="faq" className="py-4 lg:py-6">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 lg:px-12">
        <div className="overflow-visible rounded-[28px] border border-white/80 bg-white/75 p-4 shadow-clay-card md:p-5 lg:p-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1.35fr)] lg:items-stretch lg:gap-5">
            <div className="grid gap-5 lg:grid-cols-2 lg:gap-5">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-pale px-3 py-1 text-[10px] font-extrabold tracking-[.12em] text-brand"><MessageCircle size={13} /> FAQ</span>
                  <span className="hidden text-xs font-bold tracking-[.2em] text-ink-light sm:inline">STILL HAVE QUESTIONS?</span>
                </div>
                <h2 className="mt-3 max-w-2xl font-black text-h2 leading-[1.02]">Frequently Asked <span className="text-brand">Questions</span></h2>
                <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-ink-soft">Quick answers about 404 Solutions, our services, and how we can help you.</p>
              </div>
              <div><div className="space-y-1.5">{faqItems.slice(0, 4).map((item, index) => renderQuestion(item, index))}</div></div>
              <div><div className="space-y-1.5">{faqItems.slice(4).map((item, index) => renderQuestion(item, index + 4))}</div></div>
            </div>
            <div className="relative flex min-h-[390px] flex-col justify-end pt-[150px] lg:min-h-[440px]">
              <div className="pointer-events-none absolute inset-x-0 -top-12 z-0 h-[360px] lg:-top-24 lg:h-[410px]">
                <motion.div animate={isPlaying ? { y: [0, -4, 0], rotate: [0, 1, -1, 0] } : { y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: isPlaying ? 1.2 : 3, ease: "easeInOut" }} className="absolute inset-x-0 top-0 flex justify-center">
                  <img src={robotImg} alt="404 Solutions robot assistant" className="h-auto max-h-[300px] w-full max-w-[380px] object-contain drop-shadow-robot lg:max-h-[360px] lg:max-w-[460px]" />
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: isPlaying ? [1, 1.03, 1] : 1, boxShadow: isPlaying ? ["0 12px 28px rgba(67, 25, 180, .12)", "0 14px 34px rgba(67, 25, 180, .24)", "0 12px 28px rgba(67, 25, 180, .12)"] : "0 12px 28px rgba(67, 25, 180, .12)" }} transition={{ duration: isPlaying ? 1.8 : 0.25, repeat: isPlaying ? Infinity : 0, ease: "easeInOut" }} aria-live="polite" className="absolute left-[8%] top-10 w-32 rounded-[22px] rounded-bl-md border border-brand/15 bg-white/40 backdrop-blur-sm px-3 py-2.5 text-center text-xs font-extrabold leading-tight text-ink lg:left-[11%] lg:top-8">
                  {isPlaying ? "Speaking..." : "👋 Hey!"}
                </motion.div>
              </div>
              <div id={"faq-answer-" + activeItem.id} className="relative z-10 rounded-2xl border border-white bg-white/90 p-3.5 shadow-clay-card md:p-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-pale text-lg font-black text-brand">{String(faqItems.findIndex((item) => item.id === activeItem.id) + 1).padStart(2, "0")}</span>
                  <h3 className="pt-1 text-lg font-black leading-tight text-ink">{activeItem.question}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{activeItem.answer}</p>
                <div className="mt-4 rounded-xl border border-brand/15 bg-white p-3">
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={toggleAudio} disabled={!activeAudio} aria-label={isPlaying ? "Pause answer" : "Play answer"} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white disabled:cursor-not-allowed disabled:opacity-40">{isPlaying ? <Pause size={16} /> : <Play size={16} />}</button>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-extrabold text-ink">{isPlaying ? "Playing answer..." : activeAudio ? "Play voice answer" : "Audio unavailable"}</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-pale"><span className="block h-full rounded-full bg-brand transition-[width]" style={{ width: duration ? Math.min(100, currentTime / duration * 100) : 0 }} /></div>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-light">{formatTime(currentTime)} / {formatTime(duration)}</span>
                  </div>
                </div>
                <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-ink-mid"><MessageCircle size={15} className="text-brand" /> Listening, learning, building a better tomorrow!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
