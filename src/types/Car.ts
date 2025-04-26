export interface Car {
  id: number;
  plate: string;
  entryTime: string;
  exitTime: string | null; // ← Accept null here
  duration: string | null; // ← Accept null here
  fee?: string;
}
