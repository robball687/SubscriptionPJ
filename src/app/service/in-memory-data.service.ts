import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0,  name: 'Zero', devices:[ {id: 0, name:'Stick 1'},{id: 1, name:'Stick 2'}] },
      { id: 11, name: 'Mr. Nice', devices:[ {id: 2, name:'Stick 3'},{id: 3, name:'Stick 4'}] },
      { id: 12, name: 'Narco', devices:[ ] },
      { id: 13, name: 'Bombasto', devices:[ ] },
      { id: 14, name: 'Celeritas', devices:[ ] },
      { id: 15, name: 'Magneta', devices:[ ] },
      { id: 16, name: 'RubberMan', devices:[ ] },
      { id: 17, name: 'Dynama', devices:[ ] },
      { id: 18, name: 'Dr IQ', devices:[ ] },
      { id: 19, name: 'Magma', devices:[ ] },
      { id: 20, name: 'Tornado', devices:[ ] }
    ];
    return {users};
  }
}