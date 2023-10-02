"use client";

import { useState } from "react";

import Image from "next/image";
import { CarProps } from "@/types";
import {  CustomButton } from ".";
import { calculateCarRent } from "@/utils";
import {lazy, Suspense} from "react";
import CarDetails from "./CarDetails";

// const CarRentComponentLazy = lazy(() => import("./CarRentComponent"));

interface CarCardProps {
    car: CarProps;
    
}

const CarCard = ({car}: CarCardProps) => {
    

    const {city_mpg, year, make, model, transmission, drive, } = car;

    const [isOpen, setIsOpen] = useState(false);
    


    
     
    //  const CarRent = calculateCarRent(city_mpg,year);
    // const CarRent = lazy(()  => calculateCarRent(city_mpg,year))


  return (
    <div className="car-card group">
        <div className="car-card__component">
            <h2 className="car-card__content-title">
                {make} {model}

            </h2>
        </div>

        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">
              KES  
            </span>
            {"2,500"}
            <span className="self-end text-[14px] font-medium">
                /Day
            </span>
        </p>

        {/* <Suspense fallback={<div>Loading...</div>}>
        <CarRentComponentLazy carRent={carRent} />
      </Suspense> */}

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" fill priority alt="car model" className="object-contain" />

      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
                <p className="text-[14px]">
                    {transmission === 'a' ? 'Automatic' : 'Manual'}

                </p>

            </div>

        </div>

        <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/tire.svg" width={20} height={20} alt="tire" />
                <p className="text-[14px]">
                    {drive.toUpperCase()}

                </p>

            </div>

        </div>

        <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/gas.svg" width={20} height={20} alt="gas" />
                <p className="text-[14px]">
                    {city_mpg} KM/L

                </p>

            </div>

        </div>

        <div className="car-card__btn-container">

            {/* <CustomButton btnType="button" title="ViewMore" containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white text-[14px] 
            leading-[17px] font-bold 
            rightIcon="/right-arrow.svg" 
            handleClick={() => setIsOpen(isOpen)}
            console.log(isOpen);
            
            /> */}

            

        </div>






      </div>

      <CarDetails isOpen={isOpen} closeModal={() =>
            setIsOpen(!isOpen) } car={car}/>

    </div>
  )
}

export default CarCard