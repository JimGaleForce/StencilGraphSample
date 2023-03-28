import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { RangeChangeEventDetail } from '@ionic/core';
import { eventBus } from '../../global/event-bus';
import { basicSetup, EditorView } from "codemirror"
import widgets from '@jupyter-widgets/base';

//import 'codemirror/mode/python/python';
declare global {
  interface Window { BrythonRunner, __BRYTHON__ }
}

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})

export class AppHome {
  @State() params: { numPoints: number, frequency: number, amplitude: number } = { numPoints: 200, frequency: 100, amplitude: 50 };

  codeEditorEl1: HTMLDivElement;
  codeEditor1: EditorView;
  source1text = 'hello world';
  //private languagePluginLoader: any; // Language plugin loader

  handleFrequencyChange = (event: CustomEvent<RangeChangeEventDetail>) => {
    this.params.frequency = event.detail.value as number;
    eventBus.emit('paramsChanged', this.params);
  }

  componentDidLoad() {
    const code1 = document.querySelector("#code1");

    const editor1: DocumentFragment = code1 === null ? null : code1.shadowRoot;
    this.codeEditor1 = new EditorView({
      doc: this.source1text,
      extensions: [basicSetup, EditorView.lineWrapping],
      parent: editor1
    });

    window.addEventListener('load', () => {
      (window as any).brython();
    });
  }

  executePythonFunction() {
    debugger;
    const result = (window as any).my_function_result;
    console.log('Result from Python function:', result);
  }

  runPythonCode() {
    const pythonCode = this.codeEditor1.state.doc.toString();

    // Create a new script element with the Python code
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/python';
    scriptElement.textContent = pythonCode;

    // Update the DOM with the new script element
    const pythonContainer = document.querySelector('#pythonContainer');
    pythonContainer.innerHTML = ''; // Clear the container
    pythonContainer.appendChild(scriptElement);

    // Execute Brython
    (window as any).brython();

    // Call the Python function and plot the result
    window.setTimeout(() => {
      try {
        const t_vals = (window as any).t_vals;
        const x_vals = (window as any).x_vals;
        this.createChart(t_vals, x_vals);

      } catch (error) {
        alert(`error: ${error.message}`);
      }

    }, 2000);


  }

  createChart(t_vals, x_vals) {
    const chartContainer = document.querySelector('#chartContainer');
    const chartElement = chartContainer.querySelector('#chart');

    const data = {
      labels: t_vals,
      datasets: [
        {
          label: 'Signal',
          data: x_vals.map((x, i) => ({ x: t_vals[i], y: x })),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    };

    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: 't',
          },
        },
        y: {
          title: {
            display: true,
            text: 'x',
          },
        },
      },
    };

    new (window as any).Chart(chartElement, {
      type: 'line',
      data: data,
      options: options,
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>tabs</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h1>Home</h1>

        <ion-range min={10} max={1000} step={10} value={this.params.frequency}
          onIonChange={this.handleFrequencyChange} />

        <ion-grid>
          <ion-row>
            <ion-col id='code1' size='12'>
              <div ref={el => this.codeEditorEl1 = el}></div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size='2'>
              <button onClick={() => this.runPythonCode()}>Go</button>
            </ion-col>
          </ion-row>
        </ion-grid>

        <div id="pythonContainer">
          <script type="text/python">
            def my_function():
            return "Hello from Python!"

            # Call the function and store the result in a JS variable
            from browser import window
            window.my_function_result = my_function()
          </script>
        </div>

        <div id="pythonOutput">
        </div>

        <signal-processing params={this.params} />

        <div id="chartContainer">
          <canvas id="chart"></canvas>
        </div>

      </ion-content>
    ];
  }
}
