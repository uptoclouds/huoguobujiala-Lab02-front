import type { Event, MedalEvent } from '@/type'

export default {
  getEvents(perPage: number, page: number) {
    const baseUrl = import.meta.env.VITE_BACKEND_URL; // 使用环境变量中的后端URL
    const url = `${baseUrl}/data/db.json`; // 相对于 public 目录的路径

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch events.json');
      }
      return response.json();
    })
    .then(data => {
      const totalEventsCount = data.length; // 获取总事件数
      const startIndex = (page - 1) * perPage;
      const endIndex = Math.min(page * perPage, totalEventsCount);
      const evented = data.slice(startIndex, endIndex);
      return { evented, total: totalEventsCount };
    })
    .catch(error => {
      console.error('There was an error!', error);
      throw error; // 将错误抛出，以便在调用处处理
    });
  },
  getEvent(id:number): Promise<Event> {
    // 假设您的db.json文件位于public目录下，可以直接通过相对路径访问
    const baseUrl = import.meta.env.VITE_BACKEND_URL; // 使用环境变量中的后端URL
    const url = `${baseUrl}/data/db.json`; // 相对于public目录的路径

    // 使用fetch API从public目录读取db.json文件
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch db.json');
        }
        return response.json();
      })
      .then(data => {
        // 假设db.json是一个对象数组，每个对象都有一个id属性
        const event = data.find((item: Event) => item.id === id);
        return event; // 如果找到事件，返回事件对象，否则返回undefined
      });
  },
  getMedalEventById(id:number): Promise<MedalEvent> {
    // 假设您的db.json文件位于public目录下，可以直接通过相对路径访问
    const baseUrl = import.meta.env.VITE_BACKEND_URL; // 使用环境变量中的后端URL
    const url = `${baseUrl}/data/countries_medals.json`; // 相对于public目录的路径

    // 使用fetch API从public目录读取db.json文件
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch db.json');
        }
        return response.json();
      })
      .then(data => {
        // 假设db.json是一个对象数组，每个对象都有一个id属性
        const medalEvent = data.find((item: MedalEvent) => item.id === id);
        return medalEvent; // 如果找到事件，返回事件对象，否则返回undefined
      });
  }
}