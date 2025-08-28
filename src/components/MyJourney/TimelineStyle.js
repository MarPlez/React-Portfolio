import styled, { css } from "styled-components";

export const TimelineHeading = styled.h1`
  display: flex;
  justify-content: center;
  color: #a85700;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
`;

export const TimelineDiv = styled.ol`
  position: relative;
  max-width: 1300px;
  margin: 0 auto 100px auto;
  padding: 0;
  list-style: none;
`;

export const Axis = styled.div`
  position: absolute;
  inset: 0 auto 0 50%;
  width: 1px;
  transform: translateX(-50%);
  background: #d08300;
`;

const initialLeft = css`
  opacity: 0;
  transform: translateY(100px) translateX(-100px) scale(0.985);
`;
const initialRight = css`
  opacity: 0;
  transform: translateY(100px) translateX(100px) scale(0.985);
`;
const appear = css`
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
`;

export const ItemRow = styled.li`
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  gap: 14px;
  padding: 20px 20px;
  position: relative;

  min-height: 200px;
  align-items: stretch;

  &[data-layout="gal-period-desc"] { grid-template-areas: "gal period desc"; }
  &[data-layout="desc-period-gal"] { grid-template-areas: "desc period gal"; }

  > [data-col="description"] { grid-area: desc; }
  > [data-col="period"]      { grid-area: period; }
  > [data-col="gallery"]     { grid-area: gal; }

  > [data-col="description"],
  > [data-col="period"] {
    height: 100%;
  }
  > [data-col="gallery"] {
    height: auto; 
  }

  > [data-col="description"] {
    justify-self: center;  
    align-self: center;    
   
  }

  > [data-col="period"] {
    display: grid;
    place-items: center;
  }

  &[data-gal-side="left"]  > [data-col="gallery"]      { ${initialLeft}; }
  &[data-gal-side="right"] > [data-col="gallery"]      { ${initialRight}; }
  &[data-desc-side="left"] > [data-col="description"]  { ${initialLeft}; }
  &[data-desc-side="right"]> [data-col="description"]  { ${initialRight}; }

  > [data-col="period"] {
    opacity: 0;
    transform: scale(0.95);
  }

  &[data-inview="true"] > [data-col="gallery"],
  &[data-inview="true"] > [data-col="description"] {
    ${appear};
    transition: opacity 520ms ease, transform 640ms cubic-bezier(.22,.61,.36,1);
  }
  &[data-inview="true"] > [data-col="period"] {
    opacity: 1;
    transform: scale(1);
    transition: opacity 360ms ease, transform 360ms ease;
    transition-delay: 90ms;
  }

  &:is(:hover, :focus-within) > [data-col="period"] time {
    background-color: #d08300;
    color: #fff;
  }

  &:is(:hover, :focus-within) > [data-col="description"] h3 {
  color: #d08300;   
}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  gap: 20px;
  text-align: justify;
  max-width: 450px;

`;

export const Title = styled.h3`
  display: flex;
  justify-content: flex-start;  
  margin: 0;
  font-size: 24px;
`;

export const Text = styled.p`
  margin: 0;
  color: #4b5563;
  line-height: 1.6;
`;

export const Gallery = styled.div`
  display: flex;              
  justify-content: center;
  align-items: center;

  > a {
    display: inline-block;    
  }

  img {
    display: block;
    width: 100%;              
    max-width: 140px;         
    height: auto;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const PeriodBadge = styled.div`
  time {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: 1px solid #d08300;
    background: #fff;
    font-size: 0.85rem;
    text-align: center;
    color: #000;
    transition: background-color 0.25s ease, color 0.25s ease;
  }
`;

export const CornerBadgeLink = styled.a`
  position: relative;
  display: inline-block;

  img {
    transition: transform 0.35s ease;
  }

  .badge {
    position: absolute;
    top: 0px;
    right: -10px;
    width: 28px;
    height: 28px;
    border-radius: 50px 50px 50px 5px;
    background: #d08300;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    display: flex;             
    align-items: center;        
    justify-content: center;    
    opacity: 0;
    transition: transform 0.35s ease, opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover img { transform: scale(1.05); }

  &:hover .badge {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg);
  }

  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
  }
`;
