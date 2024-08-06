import { Component, OnInit } from "@angular/core";
import { Results } from "../models";
import { TestService } from "../services/test.service";
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  results: [Results];
  submit: boolean = false;
  newTest: boolean = false;
  queLimit: boolean = false;

  testForm = this.fb.group({
    name: "",
    description: "",
    questions: this.fb.array([]),
  });

  constructor(private fb: FormBuilder, private testService: TestService) {}

  ngOnInit(): void {
    this.getResults();
  }

  addMoreQuestions() {
    if (this.testForm.controls.questions.value.length > 7) {
      this.queLimit = true;
      this.submit = true;
    } else {
      let rows = this.testForm.get("questions") as FormArray;
      rows.push(
        this.fb.group({
          name: [null],
          ans1: "",
          correct1: false,
          ans2: "",
          correct2: false,
          ans3: "",
          correct3: false,
          ans4: "",
          correct4: false,
        })
      );
    }
  }

  onSubmit() {
    let id = 1;
    let question = [];
    let opts = [];
    const { name, description, questions } = this.testForm.value;
    questions.forEach((item, index) => {
      let name = item.name;

      opts[index] = [
        { name: item.ans1, isAnswer: item.correct1 },
        { name: item.ans2, isAnswer: item.correct2 },
        { name: item.ans3, isAnswer: item.correct3 },
        { name: item.ans4, isAnswer: item.correct4 },
      ];

      question.push({ ...question[index], name });
    });
    for (let i = 0; i < question.length; i++) {
      let questionType = {
        id: 1,
        isActive: true,
        name: "Multiple Choice",
      };
      let options = opts[i];
      question[i] = { ...question[i], options, questionType };
    }

    this.createTestService(id, name, description, question);
    id += 1;
    console.log("Response", id);
  }

  getResults() {
    this.testService.getApi("get/results").subscribe((res) => {
      this.results = res;
    });
  }

  createTestService(i, n, d, q) {
    let payload = {
      id: i,
      name: n,
      description: d,
      questions: q,
    };
    this.testService.postApi("create/test", payload).subscribe((res) => {
      console.log("Response", res);
    });
  }
}
