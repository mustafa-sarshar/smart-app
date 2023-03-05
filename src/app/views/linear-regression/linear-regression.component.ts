import { Component, OnInit } from "@angular/core";

import * as tf from "@tensorflow/tfjs";

@Component({
  selector: "app-linear-regression",
  templateUrl: "./linear-regression.component.html",
  styleUrls: ["./linear-regression.component.scss"],
})
export class LinearRegressionComponent implements OnInit {
  linearModel: tf.Sequential;
  prediction: any;

  ngOnInit(): void {
    this.trainNewModel();
  }

  async trainNewModel(): Promise<void> {
    // Define a model for Linear Regression
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Prepare the model for training: specify the loss and the optimizer
    this.linearModel.compile({ loss: "meanSquaredError", optimizer: "sgd" });

    // Training Data, completely a random stuff
    const xs = tf.tensor1d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const ys = tf.tensor1d([11, 24, 32, 41, 50, 65, 71, 88, 95, 103]);

    // Train
    await this.linearModel.fit(xs, ys);

    console.log("model trained!");
  }

  linearPrediction(val: any) {
    console.log(val);
    const output = this.linearModel.predict(
      tf.tensor2d([+val || 0], [1, 1])
    ) as any;

    this.prediction = Array.from(output.dataSync())[0];
  }
}
