export interface Passenger {
  name: string;
  childrens?: string[];
}

const passenger1: Passenger = {
  name: "Leonel",
};
const passenger2: Passenger = {
  name: "Julian",
  childrens: ["Lucas", "Camilo"],
};

const returnChildrenNumber = (passenger: Passenger): number => {

   const howManyChildren = passenger.childrens?.length || 0;
//   const howManyChildren = passenger.childrens!.length;

  console.log(passenger.name, howManyChildren);

  return howManyChildren
};

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
