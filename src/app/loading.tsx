export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <div className="relative">
        {/* Outer glowing ring */}
        <div className="w-16 h-16 rounded-full border-4 border-white/5 border-t-brand-blue border-r-brand-purple animate-spin"></div>
        {/* Inner glow */}
        <div className="absolute inset-0 bg-brand-purple/20 blur-xl rounded-full animate-pulse"></div>
      </div>
      <p className="mt-6 text-gray-400 text-sm font-medium tracking-widest uppercase animate-pulse">
        Loading
      </p>
    </div>
  );
}
