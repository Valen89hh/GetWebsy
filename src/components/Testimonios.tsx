import chevronLeft from "../assets/icons/chevron-left.svg";
import chevronRight from "../assets/icons/chevron-right.svg";
import avatar1 from "../assets/testimonios/avatar1.png";
import avatar2 from "../assets/testimonios/avatar2.png";
import avatar3 from "../assets/testimonios/avatar3.png";
import avatar4 from "../assets/testimonios/avatar4.png";
import Slider, { type InnerSlider } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

interface CardTestimonioProps{
    img: string;
    name: string;
    subtitle: string;
    comment: string;
}

const CardTestimonio: React.FC<CardTestimonioProps> = ({
    img,
    name,
    subtitle,
    comment
}) => {
    return ( 
        <article className="p-6 h-fit rounded-sm border-t border-b border-l border-r border-border">
            <div className="flex items-center gap-2">
                <img src={img} alt={name} className="rounded-full" width={50} />
                <div>
                    <h5 className="font-agrandir-bold text-white leading-none">{name}</h5>
                    <span className="font-agrandir-bold text-secondary leading-none">{subtitle}</span>
                </div>
            </div>
            <p className="text-md mt-4 font-agrandir-bold text-white">
                {comment}
            </p>
        </article>
     );
}
 

const Testimonios = () => {
    const sliderRef = useRef<Slider | null>(null);
    const next = () => {
        console.log(sliderRef.current)
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        console.log(sliderRef.current)
        sliderRef.current?.slickPrev();
    };
    const testimonios = [
        {
            img: avatar1.src,
            name: "Mariana Torres",
            subtitle: "Emprendedora",
            comment: "GetWebsy entendió mi visión desde el primer momento. Mi tienda online quedó hermosa y funcional."
        },
        {
            img: avatar2.src,
            name: "Carlos Mendez",
            subtitle: "Desarrollador",
            comment: "Aunque soy dev, necesitaba un equipo que me ayude con diseño y experiencia. GetWebsy superó mis expectativas."
        },
        {
            img: avatar3.src,
            name: "Laura Salazar",
            subtitle: "Diseñadora",
            comment: "Su equipo fue súper profesional. Me ayudaron a crear una web que refleja mi estilo."
        },
        {
            img: avatar4.src,
            name: "Eduardo Ríos",
            subtitle: "Comerciante",
            comment: "No sabía por dónde empezar. GetWebsy me dio la solución ideal y sin complicaciones."
        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
        {
            breakpoint: 1280,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return ( 
        <section className="bg-black py-12">
            <div data-aos="fade-down" className="container mx-auto px-6 xl:px-12 space-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-agrandir-bold text-white">Escucha lo que dicen nuestros clientes:</h1>
                    <div className="flex gap-4 items-center">
                        <button onClick={previous} className="border border-primary rounded-sm h-15 w-15 inline-flex justify-center items-center">
                            <img src={chevronLeft.src} alt="" />
                        </button>
                        <button onClick={next} className="border border-primary rounded-sm h-15 w-15 inline-flex justify-center items-center">
                            <img src={chevronRight.src} alt="" />
                        </button>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="-mx-4">
                        <Slider 
                            ref={sliderRef}
                            {...settings}
                        >
                            {testimonios.map((testimonio, index)=>(
                                <div key={index} className="px-4">
                                    <CardTestimonio 
                                        img={testimonio.img}
                                        name={testimonio.name}
                                        subtitle={testimonio.subtitle}
                                        comment={testimonio.comment}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Testimonios;