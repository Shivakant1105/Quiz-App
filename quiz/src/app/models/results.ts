export class Results {
  id: number;
  date: string;
  name: string;
  result: number;
  duration: string;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.date = data.date;
      this.name = data.name;
      this.result = data.result;
      this.duration = data.duration;
    }
  }
}
