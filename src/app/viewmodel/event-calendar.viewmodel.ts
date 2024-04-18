export interface EventCalendarViewModel {
    events: {
      title: string;
      date: Date;
      location: string;
    }[];
    errorMessage?: string;
  }
  