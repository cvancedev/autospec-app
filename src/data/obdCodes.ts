import { OBD2Code } from "@/types/obd2Code";

export const obdCodes: OBD2Code[] = [
  { code: "P0100", title: "Mass Air Flow Circuit Malfunction", description: "Problem detected in the mass air flow sensor circuit." },
  { code: "P0101", title: "Mass Air Flow Sensor Range/Performance", description: "The mass air flow sensor signal is outside the expected range." },
  { code: "P0102", title: "Mass Air Flow Circuit Low Input", description: "The mass air flow sensor is reporting a low input signal." },
  { code: "P0103", title: "Mass Air Flow Circuit High Input", description: "The mass air flow sensor is reporting a high input signal." },
  { code: "P0113", title: "Intake Air Temperature Sensor High Input", description: "The intake air temperature sensor is reporting a high voltage signal." },

  { code: "P0128", title: "Coolant Thermostat Below Regulating Temperature", description: "The engine is not reaching the expected operating temperature." },
  { code: "P0130", title: "Oxygen Sensor Circuit Bank 1 Sensor 1", description: "Problem detected in the upstream oxygen sensor circuit." },
  { code: "P0133", title: "Oxygen Sensor Slow Response Bank 1 Sensor 1", description: "The oxygen sensor is responding slower than expected." },
  { code: "P0135", title: "Oxygen Sensor Heater Circuit Bank 1 Sensor 1", description: "Problem detected in the oxygen sensor heater circuit." },
  { code: "P0141", title: "Oxygen Sensor Heater Circuit Bank 1 Sensor 2", description: "Problem detected in the downstream oxygen sensor heater circuit." },

  { code: "P0155", title: "Oxygen Sensor Heater Circuit Bank 2 Sensor 1", description: "Problem detected in the bank 2 upstream oxygen sensor heater circuit." },
  { code: "P0161", title: "Oxygen Sensor Heater Circuit Bank 2 Sensor 2", description: "Problem detected in the bank 2 downstream oxygen sensor heater circuit." },
  { code: "P0171", title: "System Too Lean Bank 1", description: "The engine is running too lean on bank 1." },
  { code: "P0172", title: "System Too Rich Bank 1", description: "The engine is running too rich on bank 1." },
  { code: "P0174", title: "System Too Lean Bank 2", description: "The engine is running too lean on bank 2." },

  { code: "P0175", title: "System Too Rich Bank 2", description: "The engine is running too rich on bank 2." },
  { code: "P0201", title: "Injector Circuit Cylinder 1", description: "Problem detected in the fuel injector circuit for cylinder 1." },
  { code: "P0202", title: "Injector Circuit Cylinder 2", description: "Problem detected in the fuel injector circuit for cylinder 2." },
  { code: "P0300", title: "Random/Multiple Cylinder Misfire", description: "Multiple cylinder misfires detected." },
  { code: "P0301", title: "Cylinder 1 Misfire", description: "Misfire detected in cylinder 1." },

  { code: "P0302", title: "Cylinder 2 Misfire", description: "Misfire detected in cylinder 2." },
  { code: "P0303", title: "Cylinder 3 Misfire", description: "Misfire detected in cylinder 3." },
  { code: "P0304", title: "Cylinder 4 Misfire", description: "Misfire detected in cylinder 4." },
  { code: "P0305", title: "Cylinder 5 Misfire", description: "Misfire detected in cylinder 5." },
  { code: "P0306", title: "Cylinder 6 Misfire", description: "Misfire detected in cylinder 6." },

  { code: "P0325", title: "Knock Sensor Circuit Malfunction", description: "Problem detected in the knock sensor circuit." },
  { code: "P0335", title: "Crankshaft Position Sensor Circuit", description: "Problem detected in the crankshaft position sensor circuit." },
  { code: "P0340", title: "Camshaft Position Sensor Circuit", description: "Problem detected in the camshaft position sensor circuit." },
  { code: "P0401", title: "EGR Flow Insufficient", description: "The exhaust gas recirculation system flow is too low." },
  { code: "P0402", title: "EGR Flow Excessive", description: "The exhaust gas recirculation system flow is too high." },

  { code: "P0420", title: "Catalyst Efficiency Below Threshold Bank 1", description: "The catalytic converter efficiency is below the expected threshold on bank 1." },
  { code: "P0430", title: "Catalyst Efficiency Below Threshold Bank 2", description: "The catalytic converter efficiency is below the expected threshold on bank 2." },
  { code: "P0440", title: "EVAP System Malfunction", description: "A general fault was detected in the evaporative emissions system." },
  { code: "P0441", title: "EVAP Incorrect Purge Flow", description: "Incorrect purge flow detected in the evaporative emissions system." },
  { code: "P0442", title: "EVAP Small Leak", description: "A small leak was detected in the evaporative emissions system." },

  { code: "P0446", title: "EVAP Vent Control Circuit", description: "Problem detected in the EVAP vent control circuit." },
  { code: "P0455", title: "EVAP Gross Leak", description: "A large leak was detected in the evaporative emissions system." },
  { code: "P0456", title: "EVAP Very Small Leak", description: "A very small leak was detected in the evaporative emissions system." },
  { code: "P0500", title: "Vehicle Speed Sensor Malfunction", description: "Problem detected in the vehicle speed sensor circuit." },
  { code: "P0505", title: "Idle Control System Malfunction", description: "Problem detected in the idle air control system." },

  { code: "P0506", title: "Idle Speed Low", description: "Engine idle speed is lower than expected." },
  { code: "P0507", title: "Idle Speed High", description: "Engine idle speed is higher than expected." },
  { code: "P0700", title: "Transmission Control System Malfunction", description: "The transmission control module has detected a fault." },
  { code: "P0715", title: "Input/Turbine Speed Sensor Circuit", description: "Problem detected in the transmission input speed sensor circuit." },
  { code: "P0720", title: "Output Speed Sensor Circuit", description: "Problem detected in the transmission output speed sensor circuit." },

  { code: "P0730", title: "Incorrect Gear Ratio", description: "The transmission is detecting an incorrect gear ratio." },
  { code: "P0740", title: "Torque Converter Clutch Circuit", description: "Problem detected in the torque converter clutch circuit." },
  { code: "P0750", title: "Shift Solenoid A Malfunction", description: "Problem detected with transmission shift solenoid A." },
  { code: "P0760", title: "Shift Solenoid C Malfunction", description: "Problem detected with transmission shift solenoid C." },
  { code: "P1000", title: "OBD System Readiness Test Not Complete", description: "The vehicle has not completed all OBD readiness checks." },
];