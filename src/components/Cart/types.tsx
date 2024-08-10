export type ColorOption = {
    name: string;
    value: string;
  };
  
 export type SizeOption = {
    name: string;
    value: string;
  };
  export type sizeMeasureMents = {
    size:string;
    bust: string;
    waist: string;
    hips:string;
  };

  export type specificOptionsProps = {
    name: string;
    value: string;
  }
  export type specificOptionsArrayProps = {
    data: specificOptionsProps[];
    label:string;
    value:string;
  }
  
  export type ProductOptionsProps = {
    colors: ColorOption[];
    sizes: SizeOption[];
    colorValue:string;
    sizeValue:string;
  };