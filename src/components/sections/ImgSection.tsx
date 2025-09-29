import Image from 'next/image';

const ImgSection = () => {
  return (
    <div className="relative w-full aspect-[16/9]">
      <Image
        src="/section-img.webp"
        alt="Sample"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

ImgSection.displayName = 'ImgSection';

export default ImgSection;
