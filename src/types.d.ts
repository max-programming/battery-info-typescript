export interface BatteryType {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: number | null;
  onchargingtimechange: number | null;
  ondischargingtimechange: number | null;
  onlevelchange: number | null;
}
