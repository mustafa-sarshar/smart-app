import { Component, OnInit, ViewChild } from "@angular/core";

import * as tf from "@tensorflow/tfjs";
import { DrawableDirective } from "src/app/shared/directives/drawable.directive";

@Component({
  selector: "app-mnist-handwriting",
  templateUrl: "./mnist-handwriting.component.html",
  styleUrls: ["./mnist-handwriting.component.scss"],
})
export class MnistHandwritingComponent implements OnInit {
  @ViewChild(DrawableDirective) canvas: any;
  model: tf.LayersModel;
  predictions: any;

  ngOnInit(): void {
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadLayersModel(
      "../../../assets/ai-models/mnist/model.json"
    );
    console.log("Model Loaded!");
  }

  predict(imageData: ImageData) {
    tf.tidy(() => {
      // Convert the canvas pixels to number
      let img = tf.browser.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1]);
      img = tf.cast(img, "float32");

      // Make and format the predictions
      const output = this.model.predict(img) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync());
      console.log("Predictions:", this.predictions);
    });
  }
}
