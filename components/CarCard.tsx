"use client";

import { useState } from "react";

import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";
import {lazy, Suspense} from "react";

// const CarRentComponentLazy = lazy(() => import("./CarRentComponent"));

interface CarCardProps {
    car: CarProps;
    
}

const CarCard = ({car}: CarCardProps) => {
    

    const {city_mpg, year, make, model, transmission, drive, } = car;
    


    
     
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

    </div>
  )
}

export default CarCard