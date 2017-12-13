import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, title: 'first', isDone: false },
      { id: 2, title: 'second', isDone: true },
    ];
    return {tasks};
  }
}
