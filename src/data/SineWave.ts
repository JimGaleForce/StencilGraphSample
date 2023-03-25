
export class SineWave {
  private data: [number, number][] = [];

  public generateData(params: { numPoints: number, frequency: number, amplitude: number }) {
    this.data=[];

    for (let i = 0; i < params.numPoints; i++) {
      const x = i / (params.numPoints / (2 * Math.PI * params.frequency));
      const y = params.amplitude * Math.sin(x);
      this.data.push([x, y]);
    }

    return this.data;
  };
}
