import Image from "next/image";
import { useI18n } from "../lib/i18n";

interface LearnMoreButtonProps {
  className?: string;
}

export default function LearnMoreButton({
  className = "",
}: LearnMoreButtonProps) {
  const { t } = useI18n();

  return (
    <div className={`flex items-center gap-2 whitespace-nowrap ${className}`}>
      <span className="text-base md:text-xl leading-6 font-normal text-white">
        {t("common.learnMore")}
      </span>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
        <Image
          src="/icons/arrowRight.svg"
          alt="Arrow right"
          width={32}
          height={32}
          className="text-white w-4 h-4 md:w-6 md:h-6"
        />
      </div>
    </div>
  );
}
