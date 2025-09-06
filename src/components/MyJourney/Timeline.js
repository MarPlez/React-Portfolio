import React from "react";
import BanerCourses from "../img/baner_courses.png";
import BanerGithub from "../img/baner_github.png";
import { CarouselPictures } from "./CarouselPictures/CarouselPictures";
import { CarouselClients } from "./CarouselClients/CarouselClients";

import {
  TimelineDiv,
  ItemRow,
  Description,
  Gallery,
  PeriodBadge,
  Title,
  Text,
  Axis,
  TimelineHeading,
  CornerBadgeLink
} from "./TimelineStyle";


const items = [
  { title: "Frontend Developer", 
    text: "As an aspiring frontend developer, I focus on mastering HTML, CSS, JavaScript, and React.js. With my artistic background, I bring a creative eye to design and strive to deliver aesthetically pleasing and user-friendly web experiences.", 
    media: BanerGithub, link: "https://github.com/MarPlez" , 
    period: "2024-NOW",  layout: "desc-period-gal" },
  { title: "Photography Courses", 
    text: "Trained over 2,000 people through in-person courses across Poland, including both private individuals and corporate teams. Delivered more than 300 workshops covering photography and Photoshop photo retouching.", 
    media: BanerCourses, link: "https://www.instagram.com/kursyfotografii/" ,  
    period: "2010-NOW", layout: "gal-period-desc" },
  { title: "Advertising Photography", 
    text: "I specialized in commercial photography, with a strong focus on portrait and product photography. I collaborated with both Polish and international companies, delivering consistent and visually appealing advertising content. My work was featured in numerous advertising campaigns.", 
    media: CarouselPictures, 
    period: "2010-NOW", layout: "desc-period-gal" },
  { title: "Featured Clients", 
    text: "Some of the brands I had the pleasure to work with — either as a photographer or as a photography/Photoshop trainer — include:  New Balance, Inglot Cosmetics, Subaru, G2A.com, Lancerto, Brand Active, Ergo-Hestia, Meble.pl, Bispol, Bell Cosmetics, ASOA Cosmetics, Mistero Milano, Resovia Rzeszów, Caritas, Gmoto.pl, Colorland, and many more.", 
    media: CarouselClients, 
    period: "2010-NOW", layout: "gal-period-desc" },
];

function useInView(options = { threshold: 0.2 }) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setInView(true));
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function TimelineRowAnimated({ item }) {
  const { ref, inView } = useInView();
  const [from] = item.period.split("-");

  const galSide  = item.layout === "gal-period-desc" ? "left"  : "right";
  const descSide = item.layout === "gal-period-desc" ? "right" : "left";

  return (
    <ItemRow
      as="li"
      role="listitem"
      ref={ref}
      data-inview={inView}
      data-layout={item.layout}        
      data-gal-side={galSide}          
      data-desc-side={descSide}        
    >
      <Description data-col="description">
        <Title>{item.title}</Title>
        <Text>{item.text}</Text>
      </Description>

      <PeriodBadge data-col="period">
        <time dateTime={from}>{item.period}</time>
      </PeriodBadge>

      <Gallery data-col="gallery">
        {typeof item.media === "string" ? (
        item.link ? (
        <CornerBadgeLink className="cursor-hover-target" href={item.link} target="_blank" rel="noopener noreferrer">
        <img src={item.media} alt={item.title} />
        <span className="badge" aria-hidden="true">↗</span>
        </CornerBadgeLink>
        ) : (

          <img src={item.media} alt={item.title} />

        )
       ) : React.isValidElement(item.media) ? (
       item.media
        ) : (
        React.createElement(item.media)
        )}
      </Gallery>
    </ItemRow>
  );
}

export default function Timeline() {
  return (
    <>
    <TimelineHeading>MY JOURNEY</TimelineHeading>
    <TimelineDiv as="ol" >
      <Axis aria-hidden="true" />
      {items.map((item, i) => (
        <TimelineRowAnimated key={i} item={item} />
      ))}
    </TimelineDiv>
    </>
  );
}
