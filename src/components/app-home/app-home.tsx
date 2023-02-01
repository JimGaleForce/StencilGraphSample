import { Component, h } from '@stencil/core';
import { defineCustomElements } from '@sme.up/ketchup/dist/loader';
//import * from '@sme.up/ketchup/dist/types/components/kup-chart/kup-chart-declarations';
// import  {ChartType} from '@sme.up/ketchup/dist/types/components/kup-chart/kup-chart-declarations';
// import * as d3 from "d3";
// import {sankey as d3Sankey} from "d3-sankey"

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  // private sk: d3Sankey;
  // private chart: d3Sankey;
  // private node;
  private data;

  componentWillLoad() {
    this.init();

    defineCustomElements(window);
  }

  private init() {
    // const energy = [{"source":"Agricultural 'waste'","target":"Bio-conversion","value":124.729},{"source":"Bio-conversion","target":"Liquid","value":0.597},{"source":"Bio-conversion","target":"Losses","value":26.862},{"source":"Bio-conversion","target":"Solid","value":280.322},{"source":"Bio-conversion","target":"Gas","value":81.144},{"source":"Biofuel imports","target":"Liquid","value":35},{"source":"Biomass imports","target":"Solid","value":35},{"source":"Coal imports","target":"Coal","value":11.606},{"source":"Coal reserves","target":"Coal","value":63.965},{"source":"Coal","target":"Solid","value":75.571},{"source":"District heating","target":"Industry","value":10.639},{"source":"District heating","target":"Heating and cooling - commercial","value":22.505},{"source":"District heating","target":"Heating and cooling - homes","value":46.184},{"source":"Electricity grid","target":"Over generation / exports","value":104.453},{"source":"Electricity grid","target":"Heating and cooling - homes","value":113.726},{"source":"Electricity grid","target":"H2 conversion","value":27.14},{"source":"Electricity grid","target":"Industry","value":342.165},{"source":"Electricity grid","target":"Road transport","value":37.797},{"source":"Electricity grid","target":"Agriculture","value":4.412},{"source":"Electricity grid","target":"Heating and cooling - commercial","value":40.858},{"source":"Electricity grid","target":"Losses","value":56.691},{"source":"Electricity grid","target":"Rail transport","value":7.863},{"source":"Electricity grid","target":"Lighting & appliances - commercial","value":90.008},{"source":"Electricity grid","target":"Lighting & appliances - homes","value":93.494},{"source":"Gas imports","target":"Ngas","value":40.719},{"source":"Gas reserves","target":"Ngas","value":82.233},{"source":"Gas","target":"Heating and cooling - commercial","value":0.129},{"source":"Gas","target":"Losses","value":1.401},{"source":"Gas","target":"Thermal generation","value":151.891},{"source":"Gas","target":"Agriculture","value":2.096},{"source":"Gas","target":"Industry","value":48.58},{"source":"Geothermal","target":"Electricity grid","value":7.013},{"source":"H2 conversion","target":"H2","value":20.897},{"source":"H2 conversion","target":"Losses","value":6.242},{"source":"H2","target":"Road transport","value":20.897},{"source":"Hydro","target":"Electricity grid","value":6.995},{"source":"Liquid","target":"Industry","value":121.066},{"source":"Liquid","target":"International shipping","value":128.69},{"source":"Liquid","target":"Road transport","value":135.835},{"source":"Liquid","target":"Domestic aviation","value":14.458},{"source":"Liquid","target":"International aviation","value":206.267},{"source":"Liquid","target":"Agriculture","value":3.64},{"source":"Liquid","target":"National navigation","value":33.218},{"source":"Liquid","target":"Rail transport","value":4.413},{"source":"Marine algae","target":"Bio-conversion","value":4.375},{"source":"Ngas","target":"Gas","value":122.952},{"source":"Nuclear","target":"Thermal generation","value":839.978},{"source":"Oil imports","target":"Oil","value":504.287},{"source":"Oil reserves","target":"Oil","value":107.703},{"source":"Oil","target":"Liquid","value":611.99},{"source":"Other waste","target":"Solid","value":56.587},{"source":"Other waste","target":"Bio-conversion","value":77.81},{"source":"Pumped heat","target":"Heating and cooling - homes","value":193.026},{"source":"Pumped heat","target":"Heating and cooling - commercial","value":70.672},{"source":"Solar PV","target":"Electricity grid","value":59.901},{"source":"Solar Thermal","target":"Heating and cooling - homes","value":19.263},{"source":"Solar","target":"Solar Thermal","value":19.263},{"source":"Solar","target":"Solar PV","value":59.901},{"source":"Solid","target":"Agriculture","value":0.882},{"source":"Solid","target":"Thermal generation","value":400.12},{"source":"Solid","target":"Industry","value":46.477},{"source":"Thermal generation","target":"Electricity grid","value":525.531},{"source":"Thermal generation","target":"Losses","value":787.129},{"source":"Thermal generation","target":"District heating","value":79.329},{"source":"Tidal","target":"Electricity grid","value":9.452},{"source":"UK land based bioenergy","target":"Bio-conversion","value":182.01},{"source":"Wave","target":"Electricity grid","value":19.013},{"source":"Wind","target":"Electricity grid","value":289.366}];
    // var nodeAlign = "justify"; // e.g., d3.sankeyJustify; set by input above
    // var linkColor = "source"; // e.g., "source" or "target"; set by input above
    // var width = 960;

    // this.chart = d3Sankey();

    // this.chart({
    //   links: energy
    // }, {
    //   nodeGroup: d => d.id.split(/\W/)[0], // take first word for color
    //   nodeAlign, // e.g., d3.sankeyJustify; set by input above
    //   linkColor, // e.g., "source" or "target"; set by input above
    //   format: (f => d => `${f(d)} TWh`)(d3.format(",.1~f")),
    //   width,
    //   height: 600
    // });
    this.data = this.getData();
    for (var i=0; i<this.data.rows.length; i++) {
      //this.data.rows[i].cells.Col1 = this.data.rows[i].cells.Col1.value;
    }

  }

  componentDidRender() {
//     // const svg = d3.select(this.node);
//     const energy = [{"source":"Agricultural 'waste'","target":"Bio-conversion","value":124.729},{"source":"Bio-conversion","target":"Liquid","value":0.597},{"source":"Bio-conversion","target":"Losses","value":26.862},{"source":"Bio-conversion","target":"Solid","value":280.322},{"source":"Bio-conversion","target":"Gas","value":81.144},{"source":"Biofuel imports","target":"Liquid","value":35},{"source":"Biomass imports","target":"Solid","value":35},{"source":"Coal imports","target":"Coal","value":11.606},{"source":"Coal reserves","target":"Coal","value":63.965},{"source":"Coal","target":"Solid","value":75.571},{"source":"District heating","target":"Industry","value":10.639},{"source":"District heating","target":"Heating and cooling - commercial","value":22.505},{"source":"District heating","target":"Heating and cooling - homes","value":46.184},{"source":"Electricity grid","target":"Over generation / exports","value":104.453},{"source":"Electricity grid","target":"Heating and cooling - homes","value":113.726},{"source":"Electricity grid","target":"H2 conversion","value":27.14},{"source":"Electricity grid","target":"Industry","value":342.165},{"source":"Electricity grid","target":"Road transport","value":37.797},{"source":"Electricity grid","target":"Agriculture","value":4.412},{"source":"Electricity grid","target":"Heating and cooling - commercial","value":40.858},{"source":"Electricity grid","target":"Losses","value":56.691},{"source":"Electricity grid","target":"Rail transport","value":7.863},{"source":"Electricity grid","target":"Lighting & appliances - commercial","value":90.008},{"source":"Electricity grid","target":"Lighting & appliances - homes","value":93.494},{"source":"Gas imports","target":"Ngas","value":40.719},{"source":"Gas reserves","target":"Ngas","value":82.233},{"source":"Gas","target":"Heating and cooling - commercial","value":0.129},{"source":"Gas","target":"Losses","value":1.401},{"source":"Gas","target":"Thermal generation","value":151.891},{"source":"Gas","target":"Agriculture","value":2.096},{"source":"Gas","target":"Industry","value":48.58},{"source":"Geothermal","target":"Electricity grid","value":7.013},{"source":"H2 conversion","target":"H2","value":20.897},{"source":"H2 conversion","target":"Losses","value":6.242},{"source":"H2","target":"Road transport","value":20.897},{"source":"Hydro","target":"Electricity grid","value":6.995},{"source":"Liquid","target":"Industry","value":121.066},{"source":"Liquid","target":"International shipping","value":128.69},{"source":"Liquid","target":"Road transport","value":135.835},{"source":"Liquid","target":"Domestic aviation","value":14.458},{"source":"Liquid","target":"International aviation","value":206.267},{"source":"Liquid","target":"Agriculture","value":3.64},{"source":"Liquid","target":"National navigation","value":33.218},{"source":"Liquid","target":"Rail transport","value":4.413},{"source":"Marine algae","target":"Bio-conversion","value":4.375},{"source":"Ngas","target":"Gas","value":122.952},{"source":"Nuclear","target":"Thermal generation","value":839.978},{"source":"Oil imports","target":"Oil","value":504.287},{"source":"Oil reserves","target":"Oil","value":107.703},{"source":"Oil","target":"Liquid","value":611.99},{"source":"Other waste","target":"Solid","value":56.587},{"source":"Other waste","target":"Bio-conversion","value":77.81},{"source":"Pumped heat","target":"Heating and cooling - homes","value":193.026},{"source":"Pumped heat","target":"Heating and cooling - commercial","value":70.672},{"source":"Solar PV","target":"Electricity grid","value":59.901},{"source":"Solar Thermal","target":"Heating and cooling - homes","value":19.263},{"source":"Solar","target":"Solar Thermal","value":19.263},{"source":"Solar","target":"Solar PV","value":59.901},{"source":"Solid","target":"Agriculture","value":0.882},{"source":"Solid","target":"Thermal generation","value":400.12},{"source":"Solid","target":"Industry","value":46.477},{"source":"Thermal generation","target":"Electricity grid","value":525.531},{"source":"Thermal generation","target":"Losses","value":787.129},{"source":"Thermal generation","target":"District heating","value":79.329},{"source":"Tidal","target":"Electricity grid","value":9.452},{"source":"UK land based bioenergy","target":"Bio-conversion","value":182.01},{"source":"Wave","target":"Electricity grid","value":19.013},{"source":"Wind","target":"Electricity grid","value":289.366}];
//     const parent = (this.node as any);
//     var width = 960;
//     var height = 600;
//     var linkColor = "source-target"; // e.g., "source" or "target"; set by input above
//     var nodeGroup =  d => d.id.split(/\W/)[0];

//     const svg = d3.select('#xyz').append('svg')
//   .attr('width', width)
//   .attr('height', height);

// const link = svg.append('g')
//   .attr('class', 'links')
//   .selectAll('path')
//   .data(energy)
//   .enter().append('path')
//   .attr('d', this.chart.sankeyLinkHorizontal())
//   .attr('stroke-width', d => Math.max(1, d.width))
//   .attr('stroke', linkColor)
//   .sort((a, b) => b.width - a.width);

// const node = svg.append('g')
//   .attr('class', 'nodes')
//   .selectAll('rect')
//   .data(energy)
//   .enter().append('rect')
//   .attr('x', d => d.x0)
//   .attr('y', d => d.y0)
//   .attr('height', d => d.y1 - d.y0)
//   .attr('width', d => d.x1 - d.x0)
//   .style('fill', nodeGroup)
//   .style('stroke', '#fff')
//   .style('shape-rendering', 'crispEdges');

// const sankeyData = this.getData();

// const kupChart = document.createElement('kup-chart');
// kupChart.setAttribute('data', JSON.stringify(sankeyData));
// kupChart.setAttribute('types', "['Sankey']");
// kupChart.setAttribute('axis', 'Col1');
// kupChart.setAttribute('series', "[{ code: 'Col2', decode: 'Col2' }, { code: 'Col3', decode: 'Col3' }]");
// document.body.appendChild(kupChart);

  }

  getData() {
    return {
      columns: [
        {
          name: 'Col1',
          title: 'From',
          size: '10',
        },
        {
          name: 'Col2',
          title: 'To',
          size: '10',
        },
        {
          name: 'Col3',
          title: 'Weight',
          size: '10',
        },
      ],
      rows: [
        {
          cells: {
            Col1: {
              obj: {
                t: '',
                p: '',
                k: 'A',
              },
              value: 'A',
            },
            Col2: {
              obj: {
                t: '',
                p: '',
                k: 'X',
              },
              value: 'X',
            },
            Col3: {
              obj: {
                t: 'NR',
                p: '',
                k: '5',
              },
              value: '5',
            },
          },
        },
        {
          cells: {
            Col1: {
              obj: {
                t: '',
                p: '',
                k: 'A',
              },
              value: 'A',
            },
            Col2: {
              obj: {
                t: '',
                p: '',
                k: 'Y',
              },
              value: 'Y',
            },
            Col3: {
              obj: {
                t: 'NR',
                p: '',
                k: '7',
              },
              value: '7',
            },
          },
        },
        {
          cells: {
            Col1: {
              obj: {
                t: '',
                p: '',
                k: 'A',
              },
              value: 'A',
            },
            Col2: {
              obj: {
                t: '',
                p: '',
                k: 'Z',
              },
              value: 'Z',
            },
            Col3: {
              obj: {
                t: 'NR',
                p: '',
                k: '6',
              },
              value: '6',
            },
          },
        },
        {
          cells: {
            Col1: {
              obj: {
                t: '',
                p: '',
                k: 'B',
              },
              value: 'B',
            },
            Col2: {
              obj: {
                t: '',
                p: '',
                k: 'X',
              },
              value: 'X',
            },
            Col3: {
              obj: {
                t: 'NR',
                p: '',
                k: '2',
              },
              value: '2',
            },
          },
        },
        {
          cells: {
            Col1: {
              obj: {
                t: '',
                p: '',
                k: 'B',
              },
              value: 'B',
            },
            Col2: {
              obj: {
                t: '',
                p: '',
                k: 'Y',
              },
              value: 'Y',
            },
            Col3: {
              obj: {
                t: 'NR',
                p: '',
                k: '9',
              },
              value: '9',
            },
          },
        },
        {
          cells: {
            Col1: {
              obj: {
                t: '',
                p: '',
                k: 'B',
              },
              value: 'B',
            },
            Col2: {
              obj: {
                t: '',
                p: '',
                k: 'Z',
              },
              value: 'Z',
            },
            Col3: {
              obj: {
                t: 'NR',
                p: '',
                k: '4',
              },
              value: '4',
            },
          },
        },
      ],
    };
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

        <kup-chart class='chart' 
        data={this.data} types={['Sankey']} axis='Col1' series={[
        { code: 'Col2', decode: 'Col2' },
        { code: 'Col3', decode: 'Col3' }
      ]} ></kup-chart>
      </ion-content>
    ];
  }
}
