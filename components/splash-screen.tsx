import Image from 'next/image';

interface SplashScreenProps {
  variant: 'light' | 'dark';
}

export default function SplashScreen({ variant }: SplashScreenProps) {
  const bgColor = variant === 'light' ? 'bg-splash-light' : 'bg-splash-dark';
  const textColor = variant === 'light' ? 'text-splash-text-light' : 'text-onboarding-text';

  return (
    <div className={`flex flex-col items-center justify-center h-screen w-full ${bgColor} ${textColor}`}>
      <div className="flex items-center justify-center">
        <Image
          src={variant === 'light' ? '/images/splash-logo-light.svg' : '/images/splash-logo-dark.svg'}
          alt="Vire Logo"
          width={64}
          height={64}
        />
        {variant === 'dark' && (
          <span className="ml-3 text-4xl font-bold font-cabinet-grotesk">vire</span>
        )}
      </div>
      {variant === 'light' && (
        <div className="absolute bottom-10 flex items-center justify-center space-x-4">
          <div className="text-center font-aerotis">
            <p className="text-sm">Cafe</p>
            <p className="text-lg font-bold font-lemon-milk">MANANA</p>
          </div>
          <div className="flex items-center font-cabinet-grotesk">
            <Image
              src="/images/vire-logo-footer.svg"
              alt="Vire Footer Logo"
              width={18}
              height={19}
            />
            <span className="ml-2 text-2xl font-bold">vire</span>
          </div>
        </div>
      )}
    </div>
  );
}
