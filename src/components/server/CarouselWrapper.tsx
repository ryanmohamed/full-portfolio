import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ReactNode } from "react";

export default function CarouselWrapper ({ children, ...props}: { children: ReactNode } ){
    return (
        <Carousel {...props}>
            {children}
        </Carousel>
    );
} 