type Props = {
  className?: string;
};

export function HeroBG({ className, ...props }: Props) {
  return (
    <div className='realtive'>
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,black,transparent)] dark:stroke-white/10"
        aria-hidden="true"
      >
        <defs>
          <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width={170} height={170} x="50%" y={-1} patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-transparent">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0}/>
        </svg>
        <rect width="100%" height="100%" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1318/752] w-[80rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </div>
  )
}