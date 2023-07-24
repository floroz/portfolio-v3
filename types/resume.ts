export type WorkEntry = {
  companyName: string;
  title: string;
  isContract?: boolean;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
};

export type ResumeSchema = {
  work: WorkEntry[];
}
