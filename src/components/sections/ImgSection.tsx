import Image from 'next/image';

const ImgSection = () => {
  return (
    <div className="relative w-full aspect-[16/9]">
      <Image
        src="/section-img.png"
        alt="Sample"
        fill
        className="object-cover" // розтягнеться на весь контейнер
        priority
      />
    </div>
  );
};

ImgSection.displayName = 'ImgSection';

export default ImgSection;
