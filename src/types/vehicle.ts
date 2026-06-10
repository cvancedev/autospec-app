export interface Vehicle {
  year: string;
  make: string;
  model: string;
}

export interface VehicleSpec extends Vehicle {
  id: string;

  engine: {
    size: string;
    horsepower: string;
    torque: string;
  };

  filters: {
    airFilter: string;
    cabinFilter: string;
  };

  fluids: {
    oilType: string;
    oilCapacity: string;
  };
}
