import Image from 'next/image';

export default function MainBanner() {
  return (
    <div className="flex w-full h-[83vh]">
      <Image
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-one.jpg"
        alt="Foto 1"
        width={500}
        height={500}
      />
      <Image
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-two.jpg"
        alt="Foto 2"
        width={500}
        height={500}
      />
      <Image
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-three.jpg"
        alt="Foto 3"
        width={500}
        height={500}
      />
      <Image
        loading="lazy"
        className="hidden md:block aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-four.jpg"
        alt="Foto 4"
        width={500}
        height={500}
      />
    </div>
  );
}
