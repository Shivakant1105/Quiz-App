export class Test {
  id: number;
  que: string;
  name: string;
  option: string;
  que_id: number;
  option_id: number;
  is_answer: boolean;
  description: string;
  question_type_id: number;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.que = data.que;
      this.name = data.name;
      this.que_id = data.que_id;
      this.option = data.option;
      this.is_answer = data.is_answer;
      this.option_id = data.option_id;
      this.description = data.description;
      this.question_type_id = data.question_type_id;
    }
  }
}
