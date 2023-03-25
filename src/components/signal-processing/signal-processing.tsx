import { Component, h, Listen, Prop, State } from '@stencil/core';
import * as d3 from 'd3';
import { SineWave } from 'data/SineWave';
import { eventBus } from '../../global/event-bus';

@Component({
  tag: 'signal-processing',
  styleUrl: 'signal-processing.css'
})
export class SignalProcessing {
  @Prop() params: { numPoints: number, frequency: number, amplitude: number };
  @State() renderCount = 0;

  private chartContainer!: HTMLDivElement;

  private data: [number, number][] = [];

  private svg!: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  private xScale!: d3.ScaleLinear<number, number>;
  private yScale!: d3.ScaleLinear<number, number>;
  private line!: d3.Line<[number, number]>;

  constructor() {
    this.handleParamsChanged = this.handleParamsChanged.bind(this);
  }

  handleParamsChanged(params: { numPoints: number, frequency: number, amplitude: number }) {
    this.params = params;
    this.generateData();
    this.updateChart();
    ++this.renderCount;
  }

  componentWillLoad() {
    this.generateData();
  }

  generateData() {
    //console.log(this.params);
    this.data = new SineWave().generateData(this.params);
  }

  private updateChart() {
    this.xScale.domain([0, this.params.numPoints]);
    this.yScale.domain([-this.params.amplitude, this.params.amplitude])

    this.svg.select('.line')
      .datum(this.data)
      .attr('d', this.line);
  }

  disconnectedCallback() {
    eventBus.removeListener('paramsChanged', this.handleParamsChanged);
  }

  render() {
    return (
      <div ref={(el) => this.chartContainer = el!}>
        <svg />
      </div>
    );
  }

  componentDidLoad() {
    eventBus.on('paramsChanged', this.handleParamsChanged);

    // set up d3 chart
    this.svg = d3.select(this.chartContainer)
      .select('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 500 300');

    this.xScale = d3.scaleLinear()
      .domain([0, this.params.numPoints])
      .range([0, 500]);

    this.yScale = d3.scaleLinear()
      .domain([-this.params.amplitude, this.params.amplitude])
      .range([300, 0]);

    this.line = d3.line<[number, number]>()
      .x((d) => this.xScale(d[0]))
      .y((d) => this.yScale(d[1]));

    // draw grid lines under the data
    this.drawGridLines();

    // render chart using d3
    this.svg.append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', this.line);

    // draw things on top of the data
  }

  drawGridLines() {
    // draw grid lines
    const xAxisGrid = d3.axisBottom(this.xScale)
      .ticks(10)
      .tickSize(-300)
      .tickFormat(() => '');

    const yAxisGrid = d3.axisLeft(this.yScale)
      .ticks(10)
      .tickSize(-500)
      .tickFormat(() => '');

    this.svg.append('g')
      .attr('class', 'x grid')
      .attr('transform', 'translate(0, 300)')
      .call(xAxisGrid);

    this.svg.append('g')
      .attr('class', 'y grid')
      .call(yAxisGrid);
  }
}
