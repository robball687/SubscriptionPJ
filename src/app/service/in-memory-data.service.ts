import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice'},
      { id: 12, name: 'Narco'},
      { id: 13, name: 'Bombasto'},
      { id: 14, name: 'Celeritas'},
      { id: 15, name: 'Magneta'},
      { id: 16, name: 'RubberMan'},
      { id: 17, name: 'Dynama'},
      { id: 18, name: 'Dr IQ'},
      { id: 19, name: 'Magma'},
      { id: 20, name: 'Tornado' }
    ];

    const devices = [
      { id: 0,  name: 'Stick 1', userFK: 0 },
      { id: 1, name: 'Stick 2', userFK: 11 }      
    ];

    return {users, devices};
  }
}