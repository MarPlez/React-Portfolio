import styled, { css } from "styled-components";

export const TimelineHeading = styled.h1`
  display: flex;
  justify-content: center;
  color: #a85700;
  font-family: "Poppins", sans-serif;
  font-size: clamp(20px, 2vw, 24px);

  @media (max-width: 768px) {
  justify-content: flex-start;
  margin-left: 40px;
  }
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

  @media (max-width: 768px) {
  inset: 0 auto 0 60px; 
  transform: none;
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
  grid-template-columns: minmax(0, 1fr) 80px minmax(0, 1fr);
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

  @media (max-width: 768px) {
    
    &[data-layout="gal-period-desc"],
    &[data-layout="desc-period-gal"] {
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto auto;
    gap: 10px 10px;
    grid-template-areas:
      "period desc"
      "period gal";
    }
  
    > [data-col="description"] {
      justify-self: center;
      align-self: start;
    }
    > [data-col="gallery"] {
      justify-self: center;
      align-self: start;
    }
  }
 `;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  gap: 20px;
  text-align: justify;
  max-width: 450px;

  @media (max-width: 1200px) {
  margin: 0 20px 0 20px;
  }

  @media (max-width: 768px) {
  margin: 10px 10px 0 10px;
  gap: 10px;
  }
`;

export const Title = styled.h3`
  display: flex;
  justify-content: flex-start;  
  margin: 0;
  font-size: clamp(20px, 2vw, 24px);
`;

export const Text = styled.p`
  margin: 0;
  color: #4b5563;
  line-height: 1.6;
  font-size: clamp(14px, 1.5vw, 16px);
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
    max-width: 120px;         
    height: auto;
    object-fit: contain;
    cursor: pointer;

    @media (max-width: 1200px) {
    max-width: 110px;
    }

    @media (max-width: 768px) {
    max-width: 100px;
    }
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
    font-size: clamp(10px, 1.5vw, 12px);
    text-align: center;
    color: #000;
    transition: background-color 0.25s ease, color 0.25s ease;

    @media (max-width: 1200px) {
    width: 70px;
    height: 70px;
    }
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

      @media (max-width: 1200px) {
      width: 24px;
      height: 24px;
      }
  }

  &:hover img { transform: scale(1.05); }

  &:hover .badge {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg);
  }
`;
