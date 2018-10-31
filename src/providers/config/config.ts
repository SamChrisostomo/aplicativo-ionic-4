import { Injectable } from '@angular/core';

const local_key_name = "config";

@Injectable()
export class ConfigProvider {

  constructor() {

  }

  getLocalStorage(): any{
    return localStorage.getItem(local_key_name);
  }

  setLocalStorage(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: '',
      username: ''
    }

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }
    
    if(username){
      config.username = username;
    }

    localStorage.setItem(local_key_name, JSON.stringify(config));
  }

}
