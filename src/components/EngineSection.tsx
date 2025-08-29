import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const EngineSection = () => {
  const [shuffledScreenshots, setShuffledScreenshots] = useState<Array<{
    src: string;
    alt: string;
  }>>([]);

  useEffect(() => {
    const screenshots = [
      {
        src: "/assets/screenshots/screenshot-1.png",
        alt: "Tikka Engine App Screenshot 1"
      },
      {
        src: "/assets/screenshots/screenshot-2.png",
        alt: "Tikka Engine App Screenshot 2"
      },
      {
        src: "/assets/screenshots/screenshot-3.png",
        alt: "Tikka Engine App Screenshot 3"
      },
      {
        src: "/assets/screenshots/screenshot-4.png",
        alt: "Tikka Engine App Screenshot 4"
      }
    ];

    // Fisher-Yates shuffle algorithm
    const shuffled = [...screenshots];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setShuffledScreenshots(shuffled);
  }, []);

  return (
    <section id="engine" className="section-spacing section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-heading mb-6">Tikka Engine</h2>

          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Transparent Glucose & Nutrition scores for any food. Make healthier choices for your family, 
            backed by open-source science you can trust.
          </p>
        </div>

        {/* Screenshots Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {shuffledScreenshots.map((screenshot, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
         
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-subheading text-foreground">
                Simple Health Scores You Can Trust
              </h3>
              <p className="text-body text-muted-foreground">
                Every food gets two clear scores from 0-100: a Glucose Score showing blood sugar impact 
                and a Nutrition Score for overall food quality. Our scoring formulas are completely 
                public and open-sourced—fully transparent and never influenced by sponsors or corporations.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-subheading text-foreground">
                Instant Analysis & Smart Alternatives
              </h3>
              <p className="text-body text-muted-foreground">
                Snap a photo of any food and get immediate nutritional insights. Our recommendation engine 
                suggests better alternatives for every food you scan, showing you healthier options with 
                similar taste profiles but better nutrition and glucose impact.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-subheading text-foreground">
                Comprehensive Food Database
              </h3>
              <p className="text-body text-muted-foreground">
                Search thousands of foods including popular snack brands, packaged foods, and family favorites. 
                See exactly how those seemingly innocent granola bars, fruit snacks, and "healthy" cereals 
                really impact your blood sugar and nutrition goals.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-subheading text-foreground">
                Science-Backed & Actionable
              </h3>
              <p className="text-body text-muted-foreground">
                Perfect for anyone managing blood sugar, improving personal nutrition, or wanting to break 
                the cycle of processed snacking. Makes nutrition science accessible and actionable for real life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineSection;