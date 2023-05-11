export interface Idata {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export interface Itarget {
  target: { value: React.SetStateAction<string> };
}

export type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};
