import { TrackModel } from '../../core/models/tracks.model';
import * as mockRaw from '../../data/tracks.json';
import { OrderListPipe } from './order-list.pipe';

describe('OrderListPipe', () => {

  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the same list if args is null', () => {
    const pipe = new OrderListPipe();
    
    const {mockTracks}:any = (mockRaw as any).default;

    expect(pipe.transform(mockTracks)).toEqual(mockTracks);
  });

  
  
  it('Probandar si se ordena de manera correcta', () => {
    //TODO: Arrange
    const pipe = new OrderListPipe();    
    const {data}:any = (mockRaw as any).default;
    const firstValue = data.find((i:any) => i._id === 7);
    const lastValue = data.find((i:any) => i._id === 6);

    //TODO: Act
    const result:TrackModel[] = pipe.transform(data,'name','asc');
    const firstResult = result[0];
    const lastResult = result[result.length - 1];

    //TODO: Assert
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);

    
  });


});
