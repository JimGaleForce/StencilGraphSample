import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { RangeChangeEventDetail } from '@ionic/core';
import { eventBus } from '../../global/event-bus';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})

export class AppHome {
  @State() params: { numPoints: number, frequency: number, amplitude: number } = { numPoints: 200, frequency: 100, amplitude: 50 };

  handleFrequencyChange = (event: CustomEvent<RangeChangeEventDetail>) => {
    this.params.frequency = event.detail.value as number;
    eventBus.emit('paramsChanged', this.params);
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

        <signal-processing params={this.params} />
      </ion-content>
    ];
  }
}
