import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/container";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MemorialHeaderProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  photoUrl: string;
  className?: string;
}

export function MemorialHeader({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  className,
}: MemorialHeaderProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const age = differenceInYears(deathDay, birthDay);
  const ageText = age === 1 ? "год" : age < 5 ? "года" : "лет";

  return (
    <div
      className={cn(
        "relative w-full",
        "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `url(http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/52091a5b-f518-4d3b-824e-97fc11ab31e0/photo/1755016766025_bg_image_3.png)`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 py-16 lg:py-24">
          {/* Photo - Left side */}
          <div className="flex-shrink-0">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-lg overflow-hidden">
              <Image
                src={photoUrl}
                alt={`Фото ${fullName}`}
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 480px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text content - Right side */}
          <div className="flex-1 flex flex-col justify-between text-left space-y-8 lg:space-y-0">
            {/* Top section with name and dates */}
            <div className="space-y-5">
              {/* Name */}
              <Typography.H1 
                className="text-white font-bold leading-tight" 
                style={{ fontSize: "40px" }}
              >
                {fullName}
              </Typography.H1>

              {/* Age badge */}
              <div className="pt-5">
                <span 
                  className="inline-block px-4 py-2 rounded-full bg-[#F6B95A] text-black font-light"
                  style={{ fontSize: "16px" }}
                >
                  {age} {ageText} жизни
                </span>
              </div>

              {/* Birth and death dates */}
              <div className="pt-2">
                <Typography.P className="m-0 text-white" style={{ fontSize: "20px" }}>
                  <span className="font-light" style={{ color: "#8B8B8B" }}>
                    {birthDayMonth}
                  </span>{" "}
                  <span className="font-bold text-white">{birthYear}</span>
                  {" — "}
                  <span className="font-bold text-white">{deathYear}</span>{" "}
                  <span className="font-light" style={{ color: "#8B8B8B" }}>
                    {deathDayMonth}
                  </span>
                </Typography.P>
              </div>
            </div>

            {/* Location blocks at bottom */}
            <div className="space-y-4 pt-8">
              {/* Birth place */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#8B8B8B]" />
                  <Typography.Small 
                    className="font-normal"
                    style={{ fontSize: "14px", color: "#8B8B8B" }}
                  >
                    Место рождения
                  </Typography.Small>
                </div>
                <Typography.P 
                  className="font-bold text-white m-0"
                  style={{ fontSize: "20px" }}
                >
                  {birthPlace}
                </Typography.P>
              </div>

              {/* Death place */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#8B8B8B]" />
                  <Typography.Small 
                    className="font-normal"
                    style={{ fontSize: "14px", color: "#8B8B8B" }}
                  >
                    Место смерти
                  </Typography.Small>
                </div>
                <Typography.P 
                  className="font-bold text-white m-0"
                  style={{ fontSize: "20px" }}
                >
                  {deathPlace}
                </Typography.P>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}