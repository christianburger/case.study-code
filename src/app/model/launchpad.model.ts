export class Launchpad {
    constructor(
      public images: { large: string[] } = { large: [] },
      public name: string = '',
      public full_name: string = '',
      public locality: string = '',
      public region: string = '',
      public latitude: number = 0,
      public longitude: number = 0,
      public launchAttempts: number = 0,
      public launchSuccesses: number = 0,
      public rockets: string[] = [],
      public timezone: string = '',
      public launches: string[] = [],
      public status: string = '',
      public details: string = '',
      public id: string = ''
    ) {}
  }